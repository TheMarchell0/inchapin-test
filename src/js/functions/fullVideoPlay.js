export function fullVideoPlay() {
    const videoBlock = document.querySelector('.js-video-wrapper'),
        video = videoBlock.querySelector('.js-video'),
        button = document.querySelector('.js-video-trigger'),
        closeButton = document.querySelector('.js-video-close');

    let inactivityTimeout;

    button.addEventListener('click', () => {
        videoBlock.classList.add('active');

        video.play();

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    function handleFullscreenChange() {
        if (!document.fullscreenElement) {
            videoBlock.classList.remove('active');
            video.pause();
            video.currentTime = 0;
        }
    }

    closeButton.addEventListener('click', () => {
        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        videoBlock.classList.remove('active');
        video.pause();
        video.currentTime = 0;
    });

    videoBlock.addEventListener('mouseover', () => {
        closeButton.classList.add('active');
        resetInactivityTimer();
    });

    videoBlock.addEventListener('mouseout', () => {
        resetInactivityTimer();
    });

    videoBlock.addEventListener('mousemove', () => {
        closeButton.classList.add('active');
        resetInactivityTimer();
    });

    function resetInactivityTimer() {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(() => {
            closeButton.classList.remove('active');
        }, 2500);
    }
}
