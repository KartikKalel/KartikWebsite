// Function to animate the progress bar for each slide
const progressBars = ['#progressBar1', '#progressBar2', '#progressBar3'];
const progressBarTime = 5000; // Time for each slide (5 seconds)

let progressAnimation;

// Initialize progress bar animation for the first slide
document.querySelector(progressBars[0]).style.width = '100%';

// Listen for slide change events to reset and animate progress bar
document.querySelector('#carouselExampleIndicators').addEventListener('slide.bs.carousel', function (e) {
    // Reset all progress bars
    progressBars.forEach(function (bar) {
        document.querySelector(bar).style.width = '0%';
    });

    // Animate the current slide's progress bar
    clearTimeout(progressAnimation); // Clear any previous animations
    const activeIndex = e.to;
    setTimeout(function() {
        document.querySelector(progressBars[activeIndex]).style.width = '100%';
    }, 100); // Delay to ensure smooth transition
});