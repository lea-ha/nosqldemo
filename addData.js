const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, doc, setDoc, getDocs, query, where, deleteDoc } = require("firebase/firestore");
const { firebaseConfig } = require("./firebaseConfig");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// let coursesData = [
//     { courseId: "COE 416", courseName: "Software Engineering", instructor: "Dr. Ishak" },
//     { courseId: "COE 201", courseName: "Programming I", instructor: "Prof. Johnson" },
//     { courseId: "MTH 431", courseName: "Linear Algebra", instructor: "Dr. Brown" },
//     { courseId: "BIO 201", courseName: "Intro to Biology", instructor: "Dr. Rodriguez" },
//     { courseId: "GRD 201", courseName: "Type Design", instructor: "Dr. Thompson" }
// ];

// coursesData.forEach(async course => {
//     try {
//         const docRef = doc(db, "course", course.courseId);
//         await setDoc(docRef, course);
//         console.log("Course successfully added with ID: ", course.courseId);
//     } catch (error) {
//         console.error("Error adding course: ", error);
//     }
// });

// let studentsData = [
//     { studentId: "JD_CSC", firstName: "John", lastName: "Doe", age: 20, major: "Computer Science" },
//     { studentId: "AS_CCE", firstName: "Alice", lastName: "Smith", age: 21, major: "Computer Engineering" },
//     { studentId: "EJ_MTH", firstName: "Emily", lastName: "Johnson", age: 21, major: "Mathematics" },
//     { studentId: "MB_BIO", firstName: "Michael", lastName: "Brown", age: 18, major: "Biochemistry" },
//     { studentId: "SW_GRD", firstName: "Samantha", lastName: "Wilson", age: 19, major: "Graphic Design" }
//   ];
  
//   studentsData.forEach(student => {
//     setDoc(doc(db, "students", student.studentId), student)
//     .then(() => {
//       console.log("Student successfully added with ID: ", student.studentId);
//     })
//     .catch((error) => {
//       console.error("Error adding student: ", error);
//     });
//   });

  
//update student with ID JD_CSC
// const updateStudent = async () => {
//     try {
//         const docRef = doc(db, "students", "JD_CSC");
//         await setDoc(docRef, { firstName: "John", major: "Computer Science" }, { merge: true });
//         console.log("Student successfully updated with ID: JD_CSC");
//     } catch (error) {
//         console.error("Error updating student: ", error);
//     }
// };

// updateStudent();

//delete student with ID SD_ARCH
// const deleteStudent = async () => {
//     try {
//         await deleteDoc(doc(db, "students", "SD_ARCH"));
//         console.log("Student successfully deleted with ID: SD_ARCH");
//     } catch (error) {
//         console.error("Error deleting student: ", error);
//     }
// };

// deleteStudent();