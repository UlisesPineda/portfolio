'use strict';

/*---------- Background Animado ----------*/
const animatedBackground = () => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const followMouse = () => {
        const cursorBuble = document.querySelector('.interactive');
        currentX += (targetX - currentX) / 15;
        currentY += (targetY - currentY) / 15;
        cursorBuble.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;
        requestAnimationFrame(() => {
            followMouse();
        });
    };

    const mouseCoordinates = () => {
        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        });
    };

    mouseCoordinates();
    followMouse();

};

document.addEventListener('DOMContentLoaded', () => {
    animatedBackground();
});