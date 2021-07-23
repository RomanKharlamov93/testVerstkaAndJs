"use strict";

window.onload = function () {
    let startBtn = document.getElementById('start-btn');
    let mainContent = document.querySelector('.main__content');
    let body = document.querySelector('body');
    let backToStartBtn = document.getElementById('back-to-start');
    let contentItems = document.querySelectorAll('.content__item');
    let newBlock = document.createElement('div');
    newBlock.setAttribute('id', 'selectedBlock');
    document.body.appendChild(newBlock);
    let $newBlock = document.querySelectorAll('.content__item');
    let $newBlockSelected = document.querySelector('#selectedBlock');
    $newBlockSelected.style.position = 'absolute';
    let size = {};
    let position = {};


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

    let openBlock = function (event) {
       let $this = event.currentTarget;
       position = $this.getBoundingClientRect();
       size = {
           width: window.getComputedStyle($this).width,
           height: window.getComputedStyle($this).height
       };

       $newBlockSelected.style.position = 'absolute';
       $newBlockSelected.style.top = position.top + 'px';
       $newBlockSelected.style.left = position.left + 'px';
       $newBlockSelected.style.height = size.height;
       $newBlockSelected.style.width = size.width;
       $newBlockSelected.style.margin = $this.style.margin;

        let childes = $newBlockSelected.childNodes;

        setTimeout(function () {
           $newBlockSelected.innerHTML = $this.innerHTML;
           let classes = $this.classList.value.split(' ');
           for (let i = 0; i < classes.length; i++) {
               $newBlockSelected.classList.add(classes[i]);
           }
           $newBlockSelected.classList.add('growing');
           $newBlockSelected.style.height = 'calc(100vh - 20px)';
           $newBlockSelected.style.width = 'calc(100vw - 20px)';
           $newBlockSelected.style.top = '10px';
           $newBlockSelected.style.left = '10px';
           $newBlockSelected.style.margin = '0';

       }, 1);

       setTimeout(function () {
           $newBlockSelected.classList.remove('growing');
           $newBlockSelected.classList.add('full-screen');
           if (childes && $newBlockSelected.classList.contains('full-screen')) {
               childes[3].classList.add('active');
               childes[1].classList.add('hidden');
           } else {
               childes[1].classList.remove('hidden');
               childes[3].classList.remove('active');
           }
       }, 2)
    };

    let closeBlock = function (event) {
        let $this = event.currentTarget;

        $this.style.height = size.height;
        $this.style.width = size.width;
        $this.style.top = position.top + 'px';
        $this.style.left = position.left + 'px';
        $this.style.margin = '0';
        $this.classList.remove('full-screen');
        $this.classList.add('shrinking');
        setTimeout(function () {
            while ($this.firstChild) $this.removeChild($this.firstChild);
            let classList = $this.classList;
            while (classList.length > 0) {
                classList.remove(classList.item(0));
            }
            $this.style = '';
        }, 4)
    }

    for (let i = 0; i < $newBlock.length; i++) {
        $newBlock[i].addEventListener('click', openBlock);
    }
    $newBlockSelected.addEventListener('click', closeBlock);
};

