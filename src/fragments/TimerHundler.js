
let myFunc;
export function timer(homeBtnLogic) {

  myFunc = window.setTimeout(() => {
    homeBtnLogic();
  }, 300000);
}
export function removeTimer() {

  window.clearTimeout(myFunc);
}