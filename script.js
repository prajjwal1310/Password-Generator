let btn = document.querySelector("button");
let img = document.querySelector("#qr-code");
let input = document.querySelector("#text");
let container = document.querySelector(".img");

btn.addEventListener("click", () => {
  if (input.value != "") {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    container.style.height = 30 + "vh";
  }
  else{
    input.classList.add("shake");
    setTimeout(()=>{
        input.classList.remove("shake");
    },1000)
  }
});