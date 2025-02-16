window.onload = function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const progressElement = bar.querySelector('.progress');
        progressElement.style.width = progress + '%';
    });
};
