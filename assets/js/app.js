"use strict"

AOS.init({
	offset: 180,
	delay: 0,
	duration: 800,
	easing: "ease",
	once: true,
	mirror: false,
	disable: "mobile",
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

// chart start
{
	const ctx = document.getElementById("tokenChart")
	const myChart = new Chart(ctx, {
		type: "doughnut",
		data: {
			labels: ["TOKEN SALES", "AIRBRICK TEAM", "LIQUIDITY", "MARKETING & ADVISORS"],
			datasets: [
				{
					label: "# of Votes",
					data: [65, 20, 5, 10],
					backgroundColor: ["#045A7C", "#848494", "#1C4861", "#357C9C"],
					borderWidth: 0,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			layout: {
				padding: 100,
			},
			responsive: true,
			maintainAspectRatio: true,
			legend: {
				display: false,
			},
			pieceLabel: {
				render: function (d) {
					return d.percentage + "% " + d.label
				},
				fontColor: "#3D3C3C",
				fontSize: 14,
				fontFamily: "Poppins",
				fontStyle: "bold",
				position: "outside",
				segment: true,
				segmentColor: "#F6CD9D",
			},
		},
	})
}

// chart 2
{
	const ctx = document.getElementById("profitChart")

	const myChart = new Chart(ctx, {
		type: "doughnut",
		data: {
			labels: ["AIRBRICK TREASURE", "INVESTORS", "AIRBRICK FINANCE"],
			datasets: [
				{
					label: "# of Votes",
					data: [20, 40, 40],
					backgroundColor: ["#0CA8DB", "#1C4861", "#2E3C4C"],
					borderWidth: 0,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
			layout: {
				padding: 100,
			},
			responsive: true,
			maintainAspectRatio: true,
			legend: {
				display: false,
			},
			pieceLabel: {
				render: function (d) {
					return d.percentage + "% " + d.label
				},
				fontColor: "#3D3C3C",
				fontSize: 14,
				fontFamily: "Poppins",
				fontStyle: "bold",
				position: "outside",
				segment: true,
				segmentColor: "#F6CD9D",
			},
		},
	})
}
// chart end

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

var blogCard = new Swiper(".blog-card__slider", {
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 20,
	// centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loopFillGroupWithBlank: true,
})
