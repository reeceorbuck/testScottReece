let testName = "Reece and Scott coding together";
console.log("name: ", testName);

let node = document.getElementById("one");

node.innerHTML = "Click anywhere and watch the console logs";

let numberTest = 2;
numberTest = numberTest + 1;

document.onclick = () => {
  numberTest = numberTest + 1;
  console.log("numberTest: ", numberTest);
};
