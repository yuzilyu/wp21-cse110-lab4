let student = {
    name: "Sarah",
    major: "Computer Science",
    "Grad Year": "2002",
    greeting: function() {
        console.log("hello!");
    },
    "Favorite Teacher": {
        name: "Thomas Powell",
        course: "CSE 110"
    },
    courseLoad:["CSE110", "CSE134", "Vis40"]
};

console.log(student.courseLoad[0]);