"use strict"

AOS.init({
	offset: 180,
	delay: 0,
	duration: 800,
	easing: "ease",
	once: true,
	mirror: false,
	anchorPlacement: "top-bottom",
})

$(".count").countUp()

var inAmount = document.getElementById("inamount")
var inLength = document.getElementById("inLength")
var inPercent = document.getElementById("inPercent")
let inAmountOutput = document.querySelector(".output span")
let inLengthOutput = document.querySelector(".output-length span")
let inPercentOutput = document.querySelector(".output-percent span")

noUiSlider.create(inAmount, {
	start: 0,
	connect: "lower",
	// connect: true,
	range: {
		min: 0,
		max: 50000,
	},
})

noUiSlider.create(inLength, {
	start: 0,
	connect: "lower",
	// connect: true,
	range: {
		min: 1,
		max: 60,
	},
})

noUiSlider.create(inPercent, {
	start: 0,
	connect: "lower",
	// connect: true,

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

// Progress token
const progressSection = document.querySelector(".token")
const progressLine = document.querySelector(".progress-line")

function showProgress() {
	const value = progressLine.dataset.progress
	progressLine.style.width = `${value}%`
	progressLine.style.height = `${value}%`
}

function hideProgress() {
	progressLine.style.width = 0
}

window.addEventListener("scroll", () => {
	const sectionPosition = progressSection.getBoundingClientRect().top
	const screenPosition = window.innerHeight

	if (sectionPosition < screenPosition) {
		showProgress()
	} else {
		hideProgress()
	}
})

var options = {
	series: [30, 60, 41, 7, 10],
	toolbar: false,
	fill: {
		colors: ["#848494", "#1C4861", "#357C9C", "#045A7C"],
	},

	legend: false,
	chart: {
		type: "donut",
	},
	// responsive: [
	// 	{
	// 		breakpoint: 480,
	// 		options: {
	// 			chart: {
	// 				// width: 1,
	// 			},
	// 		},
	// 	},
	// ],
}

var chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render()

// Slider
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loopFillGroupWithBlank: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		575: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})
