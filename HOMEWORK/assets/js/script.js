milliSecondInDay = 604800000;

function Student(firstName, lastName, age, phoneNumber, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.id = id
}

function Teacher(firstName, lastName, age, educations, experience) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.educations = educations;
    this.experience = experience;

}

function Class(name, room, teacher, students, duration, educationType, wholeProgram, start, hoursPerDay) {
    this.name = name;
    this.room = room;
    this.teacher = teacher;
    this.students = students;
    this.duration = duration;
    this.educationType = educationType;
    this.wholeProgram = wholeProgram;
    this.start = new Date(start);
    this.hoursPerDay = hoursPerDay;
    this.requiredWeeks;
    this.getStudentsList = () => {
        students.forEach(student => {
            console.log(`Student's name from ${this.name} class: ${student.firstName}`);
        });
    }
    this.getStudentPhoneNumber = firstName => {
        students.forEach((student) => {
            if (student.firstName == firstName) {
                console.log(`The phone number of ${student.firstName} is ${student.phoneNumber}`)
            }
        });
    }
    this.getWholeCourseDuration = () => {
        if (this.educationType == "weekend") {
            this.requiredWeeks = this.wholeProgram / (this.hoursPerDay * 2)
        }
        else {
            this.requiredWeeks = this.wholeProgram / (this.hoursPerDay * 4)
        }
    }
    this.getEducationEndDate = () => {
        this.end = new Date(start + this.requiredWeeks * milliSecondInDay);
        console.log(`The date of education's start: ${this.start}\nThe date of education's end: ${this.end}`)
    }
    this.addOrDeleteSelection = () => {
        var choice = prompt("Do you want to add or delete a student?\nIf add enter \"add\" else enter \"delete\" if neither then \"no\" ").toLowerCase();
        if (choice == "add") {
            //ASK QUESTION ABOUT MAKING THIS PART MORE DYNAMIC
            this.addStudent = () => {
                var uniqueID = true;
                const newStudent = new Student()
                newStudent.firstName = prompt("Enter student's First Name:");
                newStudent.lastName = prompt("Enter student's Last Name:");
                newStudent.age = prompt("Enter student's age:") / 1;
                newStudent.phoneNumber = prompt("Enter student's phone number:") / 1;
                newStudent.id = prompt("Enter student's ID:") / 1;
                for (let student in students) {
                    if (students[student].id == newStudent.id) {
                        uniqueID = false;
                    }
                }
                if (uniqueID == false) {
                    while (uniqueID != true) {
                        uniqueID = 1;
                        alert("This ID is already busy!!");
                        newStudent.id = prompt("Enter student's ID:") / 1;
                        for (let student in students) {
                            if (students[student].id == newStudent.id) {
                                uniqueID = -1
                            }
                            if (student / 1 + 1 == students.length && uniqueID != -1) {
                                var uniqueID = true;
                            }
                        }
                    }
                }
                students.push(newStudent);
                console.log("New list of students:")
                for (let student in students) {
                    console.log(students[student])
                }
            }
            this.addStudent();
        }
        else if (choice == "delete") {
            //ASK QUESTION ABOUT CHECKING ALL THE INSTANCES OF CERTAION CONSTRUCTOR
            this.deleteStudent = () => {
                const idToDelete = prompt("Enter the ID of the student which you want to delete:");
                for (let student in students) {
                    if (students[student].id == idToDelete) {
                        students[student] = null;
                        delete students[student]
                    }
                }
                console.log("New list of students:")
                for (let student in students) {
                    console.log(students[student])
                }
            }
            this.deleteStudent();
        }
        else if (choice == "no") {
            return 0;
        }
        else {
            alert("Invalid Operation")
        }
        var repeatOrNot = prompt("Do you want to  repeat or not if yes enter  \"yes\" else enter \"no\" ").toLowerCase();
        if (repeatOrNot == "yes") {
            this.addOrDeleteSelection();
        }
        else if (repeatOrNot == "no") {
            return 0;
        }
        else {
            alert("Invalid Operation");
        }
    }
}

var students = [
    new Student("Kamil", "Salimli", 18, 1234567890, 1),
    new Student("Limak", "Ilmilas", 81, 9087654321, 2),
    new Student("Malik", "Milasil", 821, 9087545321, 3)
];

const teacher = new Teacher("Jamil", "Alisgenderov", 21, ["azi", "CA"], ["Teacher", "Frontend Developer"])

const p406 = new Class("P406", "Titan", teacher, students, 120, "weekend", 340, 1558159300000, 5);

p406.getStudentsList()

p406.getStudentPhoneNumber("Kamil")

p406.getWholeCourseDuration();

p406.getEducationEndDate();

p406.addOrDeleteSelection();


