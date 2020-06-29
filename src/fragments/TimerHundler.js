
let myFunc;
export function timer(homeBtnLogic) {

  myFunc = window.setInterval(() => {
    homeBtnLogic();
  }, 300000);
}
export function removeTimer() {

  window.clearInterval(myFunc);
}