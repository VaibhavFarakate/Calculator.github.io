let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("#Answer").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("#Answer").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("#Answer").value = string;
    }
  });
});
