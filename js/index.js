let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let reset = document.getElementById("reload");
let sec0 = document.getElementById("sec0");

add.addEventListener(
  "click",
  () => {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let sum = Number(n1) + Number(n2);
    console.log(sum);
    let sec0 = document.getElementById("sec0");
    sec0.style.display = "block";
    let cal2 = document.getElementById("cal2");
    cal2.textContent = `The Calculated value is ${sum}`;
  },
  false
);
reset.addEventListener("click", () => {
  //   sec0.style.display = "none";
  location.reload();
});
sub.addEventListener(
  "click",
  () => {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let sum = Number(n1) - Number(n2);
    console.log(sum);
    let sec0 = document.getElementById("sec0");
    sec0.style.display = "block";
    let cal2 = document.getElementById("cal2");
    cal2.textContent = `The Calculated value is ${sum}`;
  },
  false
);
div.addEventListener(
  "click",
  () => {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let sum = Number(n1) / Number(n2);
    let sum2 = Number(n1) % Number(n2);
    console.log(sum);
    let sec0 = document.getElementById("sec0");
    sec0.style.display = "block";
    let cal2 = document.getElementById("cal2");
    cal2.textContent = `The Calculated value is Divide value ${sum} And Remainder is ${sum2}`;
  },
  false
);
mul.addEventListener(
  "click",
  () => {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let sum = Number(n1) * Number(n2);
    console.log(sum);
    let sec0 = document.getElementById("sec0");
    sec0.style.display = "block";
    let cal2 = document.getElementById("cal2");
    cal2.textContent = `The Calcualted value is ${sum}`;
  },
  false
);
