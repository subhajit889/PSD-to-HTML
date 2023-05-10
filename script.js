const mountain1Btn = document.querySelector('.mountain-btn:nth-of-type(1)');
const mountain2Btn = document.querySelector('.mountain-btn:nth-of-type(2)');
const historyBtn = document.querySelector('.history');
const teamBtn = document.querySelector('.Team');


const mountainDetails1 = document.getElementById('mountain-details1');
const mountainDetails2 = document.getElementById('mountain-details2');
const historySec = document.querySelector('#history-sec');
const climbSec = document.querySelector('#climb');



mountain1Btn.addEventListener('click', () => {
    mountainDetails1.style.display = 'block';
    mountainDetails2.style.display = 'none';
});

mountain2Btn.addEventListener('click', () => {
    mountainDetails1.style.display = 'none';
    mountainDetails2.style.display = 'block';
});

historyBtn.addEventListener('click', () => {
    historySec.scrollIntoView({ behavior: 'smooth' });
});

teamBtn.addEventListener('click', () => {
    climbSec.scrollIntoView({ behavior: 'smooth' });
});
