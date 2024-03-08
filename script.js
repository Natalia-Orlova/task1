"use strict";

const tools_images = document.querySelectorAll('.tools__img');
tools_images.forEach(image => {
    image.addEventListener('click', function () {
        tools_images.forEach(el => {
            el.classList.remove('active');
        })
        image.classList.add('active');
    });
});
