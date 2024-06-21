const firebaseConfig = {
  apiKey: "AIzaSyBiyG3AdHa7uWa4miLcAqCQGqQhaC-amD4",
  authDomain: "daejeon-loveu.firebaseapp.com",
  projectId: "daejeon-loveu",
  storageBucket: "daejeon-loveu.appspot.com",
  messagingSenderId: "952789620772",
  appId: "1:952789620772:web:8e1b46f0e4c99dab9ea0b1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function getDatas(collectionName) {
  const querySnapshot = await db.collection(collectionName).get();
  return querySnapshot;
}

async function addDatas(collectionName, addObj) {
  const result = await db.collection(collectionName).add(addObj);
  return result;
}
async function addFieldToArrayInDocument(
  collectionName,
  docId,
  fieldName,
  newObj
) {
  const docRef = db.collection(collectionName).doc(docId);

  // Firestore의 arrayUnion을 사용하여 새로운 객체를 배열에 추가
  await docRef.update({
    [fieldName]: firebase.firestore.FieldValue.arrayUnion(newObj),
  });

  return docRef.get();
}
async function deleteDatas(collectionName, docId) {
  try {
    await db.collection(collectionName).doc(docId).delete();
    return true;
  } catch (error) {
    return false;
  }
}
// async function deleteFieldToArrayInDocument(
//   collectionName,
//   docId,
//   fieldName,
//   newObj
// ) {
//   const docRef = db.collection(collectionName).doc(docId);

//   // Firestore의 arrayUnion을 사용하여 새로운 객체를 배열에 추가
//   await docRef.update({
//     [fieldName]: firebase.firestore.FieldValue.delete(newObj),
//   });

//   return docRef.get();
// }
async function updateDatas(collectionName, docId, updateObj) {
  await db.collection(collectionName).doc(docId).update(updateObj);
}
