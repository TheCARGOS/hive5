const step1 = document.getElementById("step-1")
const step2 = document.getElementById("step-2")
const step3 = document.getElementById("step-3")
const step4 = document.getElementById("step-4")
const step5 = document.getElementById("step-5")

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button31 = document.getElementById("button31")
const button41 = document.getElementById("button41")
const button51 = document.getElementById("button51")


const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
let result = 0
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const resultDOM = document.getElementById("result")


// step1.style.display = "none"
step2.style.display = "none"
step3.style.display = "none"
step4.style.display = "none"
step5.style.display = "none"

const goToStep = (_stepNumber) => {
  const arraysOfSteps = [step1, step2, step3, step4, step5]
  
  step1.style.display = "none"
  step2.style.display = "none"
  step3.style.display = "none"
  step4.style.display = "none"
  step5.style.display = "none"

  arraysOfSteps[_stepNumber - 1].style.display = "flex"
  
}

button1.addEventListener("click", () => goToStep(2))
button2.addEventListener("click", () => goToStep(3))
button3.addEventListener("click", () => {
  goToStep(4)
  const n1 = parseInt( input1.value )
  const n2 = parseInt( input2.value )
  result = n1 + n2

  number1.innerHTML = n1
  number2.innerHTML = n2
  number2.innerHTML = n2

  resultDOM.innerHTML = result
})

button31.addEventListener("click", () => goToStep(2))

button4.addEventListener("click", () => goToStep(5))

button41.addEventListener("click", () => {
  goToStep(3)
  console.log( input1 )
  const n1 = parseInt( input1.value )
  const n2 = parseInt( input2.value )
  result = n1 + n2

  number1.innerHTML = n1
  number2.innerHTML = n2
  number2.innerHTML = n2

  resultDOM.innerHTML = result
})

button51.addEventListener("click", () => goToStep(4))