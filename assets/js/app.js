"use strict"

// Import

$(".count").countUp()

var inAmount = document.getElementById("inamount")
var inLength = document.getElementById("inLength")
var inPercent = document.getElementById("inPercent")
let inAmountOutput = document.querySelector(".output span")
let inLengthOutput = document.querySelector(".output-length span")
let inPercentOutput = document.querySelector(".output-percent span")

noUiSlider.create(inAmount, {
	start: [0, 0],
	connect: true,
	range: {
		min: 0,
		max: 50000,
	},
})

noUiSlider.create(inLength, {
	start: [0, 0],
	connect: true,
	range: {
		min: 1,
		max: 60,
	},
})

noUiSlider.create(inPercent, {
	start: [0, 0],
	connect: true,
	range: {
		min: 1,
		max: 100,
	},
})

inAmount.noUiSlider.on("update", function (values, handle) {
	inAmountOutput.innerHTML = Math.floor(values[handle])
})

inLength.noUiSlider.on("update", function (values, handle) {
	inLengthOutput.innerHTML = Math.floor(values[handle])
})

inPercent.noUiSlider.on("update", function (values, handle) {
	inPercentOutput.innerHTML = Math.floor(values[handle])
})
