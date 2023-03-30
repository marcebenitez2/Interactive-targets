const numberCard = document.querySelector(".number");
const nameCard = document.querySelector(".name");
const mmCard = document.querySelector(".month");
const yyCard = document.querySelector(".year");
const cvcCard = document.querySelector(".cvc");

const inpNumber = document.querySelector(".inp-number");
const inpName = document.querySelector(".inp-name");
const inpmm = document.querySelector(".mm");
const inpyy = document.querySelector(".yy");
const inpcvc = document.querySelector(".inp-cvc");

const btnConfirm = document.querySelector(".confirm");

const form = document.querySelector(".form");

const error = document.querySelector(".error");

inpNumber.addEventListener("input", () => {
  number = inpNumber.value;
  const number4 = number.match(/.{1,4}/g);
  const numberC = number4.join(" ");
  numberCard.textContent = numberC;
});

inpName.addEventListener("input", () => {
  let names = inpName.value;
  names = names.toUpperCase();
  nameCard.textContent = names;
});

inpmm.addEventListener("input", () => {
  let mm = inpmm.value;
  mmCard.textContent = mm;
});

inpyy.addEventListener("input", () => {
  let yy = inpyy.value;
  yyCard.textContent = yy;
});

inpcvc.addEventListener("input", () => {
  let cvc = inpcvc.value;
  cvcCard.textContent = cvc;
});

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault(); // evita que se envíe el formulario y se recargue la página
  let newContent = `
    <div class="container-confirm">
      <div class="circle">✓</div>
      <h1>THANK YOU</h1>
      <h4>We've added your card details</h4>
      <button class="exit">CONTINUE</button>
    </div>
   `;

  if (inpNumber.value.length === 16 && inpName.value.length >= 3) {
    if (inpcvc.value.length === 3) {
      if (inpmm.value.length === 2 && inpyy.value.length === 2) {
        form.innerHTML = newContent;
        const backBtn = document.querySelector(".exit");
        backBtn.addEventListener("click", function () {
          window.location.reload();
        });
      } else {
        error.classList.add('error-active') 
      };
    } else {
      error.classList.add('error-active') 
    };
  } else {
    error.classList.add('error-active') 
  };
});
