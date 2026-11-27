var student = {
  name: "Aarav",
  age: 14,
  grade: "9th",
  hobby: "Coding"
};

console.log("Student Name:", student.name);
console.log("Student Grade:", student["grade"]);

var colours = ["Red", "Blue", "Green", "Yellow", ];

console.log("First colour (index 0):", );
console.log("Third colour (index 2):", );

console.log("All colours joined:", colours.join(""));

colours.pop();
console.log("After pop():", colours.join(", "));
