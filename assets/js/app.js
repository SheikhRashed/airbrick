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
	start: 30,
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

var tokenOption = {
	colors: ["#848494", "#1C4861", "#357C9C", "#045A7C"],
	series: [20, 65, 10, 5],
	labels: ["AIRBRICK", "TOKEN SALES", "MARKETING & ADVISORS", "LIQUIDITY"],
	toolbar: false,
	fill: {
		colors: ["#848494", "#1C4861", "#357C9C", "#045A7C"],
	},

	legend: {
		formatter: function(val, opts) {
		  return val + " - " + opts.w.globals.series[opts.seriesIndex]
		},
		horizontalAlign: 'center', 
		floating: false,
		position: 'top',
	},


	chart: {
		type: "donut",
	},
}

var profitOption = {
	colors: ["#2E3C4C", "#0CA8DB", "#1C4861"],
	series: [40, 12, 40],
	labels: ["AIRBRICK FINANCE", "AIRBRICK TREASURE", "INVESTORS"],
	toolbar: false,
	fill: {
		colors: ["#2E3C4C", "#0CA8DB", "#1C4861"],
	},

	legend: {
		formatter: function(val, opts) {
		  return val + " - " + opts.w.globals.series[opts.seriesIndex]
		},
		horizontalAlign: 'center', 
		floating: false,
		position: 'top',
	},

	chart: {
		type: "donut",
	},
}

var tokenChart = new ApexCharts(document.querySelector("#tokenChart"), tokenOption)
var profitChart = new ApexCharts(document.querySelector("#profitChart"), profitOption)

tokenChart.render()
profitChart.render()

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
