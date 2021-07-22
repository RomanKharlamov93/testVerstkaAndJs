"use strict";

window.onload = function () {
    let startBtn = document.getElementById('start-btn');
    let mainContent = document.querySelector('.main__content');
    let body = document.querySelector('body');
    let backToStartBtn = document.getElementById('back-to-start');
    let contentItems = document.querySelectorAll('.content__item');

    startBtn.onclick = function (event) {
        let target = event.target;

        target.classList.add('active');
        mainContent.classList.remove('hidden');
        body.classList.add('image');
        backToStartBtn.classList.remove('hidden');
    };

    backToStartBtn.onclick = function (event) {
        let target = event.target;

        target.classList.add('hidden');
        startBtn.classList.remove('active');
        mainContent.classList.add('hidden');
        body.classList.remove('image');
        backToStartBtn.classList.add('hidden');
    };

    addEventListener('click', function (event) {
        contentItems.forEach((item) => {
            if (event.target.id === item.id) {
                let currentItem = item;
                let childs = currentItem.childNodes;
                if (currentItem.classList.contains('active')) {
                    currentItem.classList.remove('active');
                    childs[3].classList.remove('active');
                    childs[1].classList.remove('hidden');
                } else {
                    currentItem.classList.add('active');
                    childs[1].classList.add('hidden');
                    childs[3].classList.add('active');
                }
            }
        })
    })
};

