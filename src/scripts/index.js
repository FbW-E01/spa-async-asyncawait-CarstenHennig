import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");

let promiseOfModal = () => {
  return new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve(modal);
    }, 1000 * 1);
  });
};

let getModal = async () => {
  let result = await promiseOfModal();
  result.style.display = "block";
};
getModal();

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

const button = document.getElementById("continue");
button.addEventListener("mouseover", () => {
  animationComplete();
});

async function animationComplete() {
  const btnAnimationEnd = await animationStart(button);
  btnAnimationEnd.classList.add("btn-info");
  alert("Continue to subscription");
}
function animationStart(e) {
  return new Promise((resolve) => {
    e.addEventListener("animationend", () => {
      resolve(e);
    });
  });
}

// const continueButton = document.getElementById("continue");
// continueButton.addEventListener("mouseover", () => {
//   onAnimationComplete();
// });
// async function onAnimationComplete() {
//   const buttonAnimationEnd = await onAnimationStart(continueButton);
//   buttonAnimationEnd.classList.add("btn-info");
//   alert("Continue to subscription!");
// }
// function onAnimationStart(elem) {
//   return new Promise((resolve) => {
//     elem.addEventListener("animationend", () => {
//       resolve(elem);
//     });
//   });
// }

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

// modal.addEventListener("click", (e) => {
//     switch(e.target.className) {
//         case "close":
//         case "modal":
//         modal.style.display = "none"
//         break;
//     }
// })
