let add = document.getElementById("increment")
let remove = document.getElementById("decrement")
let count = document.getElementById("number")
let num = 0
let leftHandButton = document.getElementById("leftHand")

/* -------------------------------------------------------------------------- */
/*                                Click Events                                */
/* -------------------------------------------------------------------------- */

add.addEventListener("click", () => {
  //increment by 1
  num += 1
  count.innerHTML = num
})

remove.addEventListener("click", () => {
  //decrement by 1
  if (num > 0) {
  //check if num > 0 to prevent negative number
    num -= 1
    count.innerHTML = num
  }
})

/* -------------------------------------------------------------------------- */
/*                             Keyboard Shortcuts                             */
/* -------------------------------------------------------------------------- */

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp" || event.code == "KeyW" || event.code == 'NumpadAdd') {
    //increment by 1 when ↑/w/numpad+ keys are pressed
    event.preventDefault() //prevents the scrolling by keys
    num += 1
    count.innerHTML = num
  } else if (num > 0 && (event.code == "ArrowDown" || event.code == "KeyS" || event.code == 'NumpadSubtract')) {
    //decrement by 1 when ↓/s/numpad- keys are pressed
    event.preventDefault()
    num -= 1
    count.innerHTML = num
  } else if (event.code == "Escape") {
    //reset to zero on escape key press
    count.innerHTML = 0
    num = 0
  }
})

/* -------------------------------------------------------------------------- */
/*                                Button Switch                               */
/* -------------------------------------------------------------------------- */

leftHandButton.addEventListener("click", () => {
  //Check if the the leftHand button is on the right first for quicker response on click
  if (leftHandButton.style.marginLeft == "15vw") {
    //Switch to the left
    leftHandButton.style.marginLeft = "-45vw"
    document.querySelector("img").style.transform = "none"
    document.getElementById("increment").style.marginLeft = "15vw"
    document.getElementById("decrement").style.marginLeft = "0"
  } else {
    //Switch to the right
    leftHandButton.style.marginLeft = "15vw"
    document.getElementById("increment").style.marginLeft = "-45vw"
    document.getElementById("decrement").style.marginLeft = "-25vw"
    document.querySelector("img").style.transform = "scaleX(-1)"
  }
})