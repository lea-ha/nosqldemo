//Firebase firestore will be used for the Demos

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, doc, setDoc, getDocs, query, where, limit } = require("firebase/firestore");
const { firebaseConfig } = require("./firebaseConfig");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//1 Query all students : SELECT * FROM students
const queryAllStudents = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "students"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error querying students: ", error);
    }
};

//2 Query students by age > 20 : SELECT * FROM students WHERE age > 20
const queryStudentsByAge = async () => {
    try {
        const q = query(collection(db, "students"), where("age", ">", 20));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error querying students by age: ", error);
    }
};

//3 Query students with limit of 3 : SELECT * FROM students LIMIT 3
const queryStudentsLimit = async () => {
    try {
        const q = query(collection(db, "students"), limit(3));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error querying students with limit: ", error);
    }
};
//4 Query all students whose name start with 'A' : SELECT * FROM students WHERE firstName LIKE 'A%'
const queryStudentsByName = async () => {
    try {
        const q = query(collection(db, "students"), where("firstName", ">=", "A"), where("firstName", "<", "B"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error querying students by name: ", error);
    }
};
//5 Find all Students' names and ages
const queryStudentsNameAge = async () => {
    try {
        const q = query(collection(db, "students"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data().firstName, doc.data().age);
        });
    } catch (error) {
        console.error("Error querying students by name and age: ", error);
    }
};
//6 Find all students whose age is 21 and are Computer Engineers
const queryStudentsAgeMajor = async () => {
    try {
        const q = query(collection(db, "students"), where("age", "==", 21), where("major", "==", "Computer Engineering"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error querying students by age and major: ", error);
    }
};  
//7 Count how many students are 21
const queryStudentsCount = async () => {
    try {
        const q = query(collection(db, "students"), where("age", "==", 21));
        const querySnapshot = await getDocs(q);
        let count = 0;
        querySnapshot.forEach((doc) => {
            count++;
        });
        console.log("Number of students who are 21: ", count);
    } catch (error) {
        console.error("Error querying students count: ", error);
    }
};
//Count for each major how many students are there, so group by major
const queryStudentsCountByMajor = async () => {
    try {
        const q = query(collection(db, "students"));
        const querySnapshot = await getDocs(q);
        let count = {};
        querySnapshot.forEach((doc) => {
            if (count[doc.data().major]) {
                count[doc.data().major]++;
            } else {
                count[doc.data().major] = 1;
            }
        });
        console.log("Number of students by major: ", count);
    } catch (error) {
        console.error("Error querying students count by major: ", error);
    }
};
//View all student_course from collection student_course
const queryStudentsCourses = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "student_course"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error querying students courses: ", error);
    }
}



// console.log("1) Querying all students \n");
// queryAllStudents();
// console.log("\n2) Querying students by age > 20 \n");
// queryStudentsByAge();
// console.log("\n3) Querying students with limit of 3 \n");
// queryStudentsLimit();
// console.log("\n4) Querying students whose name start with 'A' \n");
// queryStudentsByName();
// console.log("\n5) Querying students' names and ages \n");
// queryStudentsNameAge();
// console.log("\n6) Querying students whose age is 21 and are Computer Engineers \n");
// queryStudentsAgeMajor();
// console.log("\n7) Counting how many students are 21 \n");
// queryStudentsCount();
// console.log("\n8) Counting how many students are there by major \n");
// queryStudentsCountByMajor();
// console.log("\n9) View registered students in each course \n");
// queryStudentsCourses();

