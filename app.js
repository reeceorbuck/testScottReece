let testName = "Reece and Scott coding together";
console.log("name: ", testName);

let node = document.getElementById("one");

node.innerHTML = "Click anywhere on this page";

let numberTest = 0;

document.onclick = () => {
  numberTest = numberTest + 1;
  node.innerHTML = `Clicked ${numberTest} times`;
};
