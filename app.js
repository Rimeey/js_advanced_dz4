'use strict'

const div = document.querySelector('div');
const p = div.querySelectorAll('p');

div.addEventListener('click', (e)=>{
    if(e.ctrlKey) {
        e.target.classList.toggle('orange');
    } else if(e.shiftKey) {
        let s = div.getElementsByClassName('orange');
        
        for(let i = s[0].id; i <= e.target.id; i++) {
            p[i].classList.add('orange');
        }
    } else if(e.target.matches('p')) {
        p.forEach(element => {element.classList.remove('orange')});
        e.target.classList.add('orange');
    }
});