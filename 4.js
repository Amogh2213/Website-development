// 1. CHECK DATA TYPES using typeof
const sampleText = "Hello World";
const sampleNumber = 42;
const isFixed = true;

console.log("--- 1. Check Data Types ---");
console.log(sampleText, "is a", typeof sampleText);
console.log(sampleNumber, "is a", typeof sampleNumber);
console.log(isFixed, "is a", typeof isFixed);

// 2. CONVERT VALUES (Number to String & String to Number)
const numToString = String(sampleNumber);
const stringToNum = Number("100");

console.log("\n--- 2. Convert Values ---");
console.log("Number to String:", numToString, "| New Type:", typeof numToString);
console.log("String to Number:", stringToNum, "| New Type:", typeof stringToNum);

// 3. REPLACE WORDS IN A SENTENCE using .replace()
const originalSentence = "JavaScript is hard and confusing.";
const fixedSentence = originalSentence.replace("hard and confusing", "fun and powerful");

console.log("\n--- 3. Replace Words ---");
console.log("Before:", originalSentence);
console.log("After:", fixedSentence);

// 4. SAFELY HANDLE AN ERROR using try...catch
console.log("\n--- 4. Safe Error Handling ---");
try {
  nonExistentFixerFunction();
} catch (err) {
  console.log("Error Caught Safely:", err.message);
}
