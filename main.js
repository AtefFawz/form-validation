let inputs = document.querySelectorAll("input");
inputs.forEach(function (inp) {
  inp.addEventListener("click", function () {
    inputs.forEach(function (remove) {
      remove.classList.remove("active");
    });
    this.classList.add("active");
  });
});
//==========

let message = document.getElementById("message");
message.addEventListener("click", function (e) {
  if (message.contains(e.target)) {
    message.classList.add("active");
  } else {
    message.classList.remove("active");
  }
});
// Cheek Box
document.addEventListener("DOMContentLoaded", function () {
  let cheek = document.querySelectorAll(".cheek");
  cheek.forEach(function (inp) {
    inp.addEventListener("click", function () {
      let chek = this.getAttribute("data-radio");
      let atr = document.getElementById(chek);
      if (atr) {
        atr.checked = true;
      }
      cheek.forEach(function (remove) {
        remove.classList.remove("Active");
      });
      this.classList.add("Active");
    });
  });
});
// =================================
let first = document.getElementById("first");

document.querySelector("form").addEventListener("submit", function (e) {
  let first1 = first.nextElementSibling;
  if (first.value === "") {
    first1.style.display = "block";
    first.style.borderColor = "red";
    e.preventDefault();
  } else {
    first1.style.display = "none";
    first.style.borderColor = "#aaa";
  }
  //=========
  let last = document.getElementById("last");
  if (last.value === "") {
    last.nextElementSibling.style.display = "block";
    last.style.borderColor = "red";
    e.preventDefault();
  } else {
    last.nextElementSibling.style.display = "none";
    last.style.borderColor = "#aaa";
  }
  // EmailAdrasses Valedtion
  let email = document.getElementById("emi");
  if (email.value === "") {
    e.preventDefault();
    email.nextElementSibling.style.display = "block";
    email.style.borderColor = "red";
  }
  let validtion = email.value;
  let patern = /(\w+)+@(\w+)+\.+\w+/gi;
  if (patern.test(validtion) !== true) {
    email.nextElementSibling.style.display = "block";

    e.preventDefault();
  } else {
    email.style.borderColor = "#aaa";
    email.nextElementSibling.style.display = "none";
  }
  //=========================== Cheeck Box
  let pragrph = document.querySelector(".childParent").nextElementSibling;
  let radio = document.querySelector("#radio1");
  let radio2 = document.querySelector("#radio2");

  if (!(radio2.checked || radio.checked)) {
    pragrph.style.display = "block";
    e.preventDefault();
  } else {
    pragrph.style.display = "none";
  }
  //============================ Message
  let message = document.querySelector("#message");
  if (message.value === "") {
    message.nextElementSibling.style.display = "block";
    message.style.borderColor = "red";
    e.preventDefault();
  } else {
    message.nextElementSibling.style.display = "none";
    message.style.borderColor = "#aaa";
  }
  //================== Check Box =========
  let Chek = document.querySelector("#Chek");
  let pargraf = document.querySelector(".parent-Cheek").nextElementSibling;
  if (!Chek.checked) {
    pargraf.style.display = "block";
    e.preventDefault();
  } else {
    pargraf.style.display = "none";
  }
});
