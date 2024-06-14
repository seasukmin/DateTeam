const currentMonthYear = document.getElementById("currentMonthYear");
const daysContainer = document.getElementById("days");
let currentDate = new Date();
let startDate = null;
let endDate = null;

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  currentMonthYear.innerText = `${year}년 ${month + 1}월`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  daysContainer.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    daysContainer.appendChild(emptyCell);
  }

  for (let i = 1; i <= lastDate; i++) {
    const dayCell = document.createElement("div");
    dayCell.innerText = i;
    dayCell.addEventListener("click", () =>
      selectDate(year, month, i, dayCell)
    );
    if (isInRange(year, month, i)) {
      dayCell.classList.add("range");
    }
    if (isSelectedDate(year, month, i)) {
      dayCell.classList.add("selected");
    }
    daysContainer.appendChild(dayCell);
  }
}

function selectDate(year, month, day, dayCell) {
  const selectedDate = new Date(year, month, day);

  if (!startDate || (startDate && endDate)) {
    startDate = selectedDate;
    endDate = null;
    clearSelections();
    dayCell.classList.add("selected");
  } else if (selectedDate < startDate) {
    startDate = selectedDate;
    clearSelections();
    dayCell.classList.add("selected");
  } else {
    endDate = selectedDate;
    highlightRange();
  }
}

function clearSelections() {
  const selected = document.querySelectorAll(".days .selected");
  selected.forEach((el) => el.classList.remove("selected"));
  const range = document.querySelectorAll(".days .range");
  range.forEach((el) => el.classList.remove("range"));
}

function highlightRange() {
  if (startDate && endDate) {
    const days = daysContainer.querySelectorAll("div");
    let inRange = false;
    days.forEach((day) => {
      const dayNum = parseInt(day.innerText);
      if (!isNaN(dayNum)) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          dayNum
        );
        if (date >= startDate && date <= endDate) {
          inRange = true;
          day.classList.add("range");
        }
      }
    });
  }
}

function isInRange(year, month, day) {
  if (!startDate || !endDate) {
    return false;
  }
  const date = new Date(year, month, day);
  return date >= startDate && date <= endDate;
}

function isSelectedDate(year, month, day) {
  if (!startDate) {
    return false;
  }
  const date = new Date(year, month, day);
  return date.getTime() === startDate.getTime();
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
