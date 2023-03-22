'use strict'

const entities = [
    {
        img: 'Pics1.svg',
        links: '<li class="link_list_item">Rostov-on-Don, Admiral</li>',
        dots: '<rect class="round" x="70.9528" y="1.4563" width="9.56667" height="9.56667" rx="4.78333"/>'
        
    },
    {
        img: 'Pics2.svg',
        links: '<li class="link_list_item">Sochi Thieves</li>',
        dots:'<rect class="round" x="98.0583" y="1.45654" width="9.56667" height="9.56667" rx="4.78333"/>'
    },

    {
        img: 'Pics3.svg',
        links: '<li class="link_list_item">Rostov-on-Don Patriotic</li>',
        dots: ' <rect class="round" x="125.164" y="1.45654" width="9.56667" height="9.56667" rx="4.78333"/>'
    }
];

const img = document.querySelector('.pics_CP');
const links = document.querySelectorAll('.link_list_item');
const dots = document.querySelectorAll('.round');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');


const setEntity = (index) =>{
    
    img.style.backgroundImage = `url(${entities[index].img})`;
    let link;
    let dot;
    for(link of links){
        link.classList.remove('active');
    }
        links[index].classList.add('active');
    
    for(dot of dots){
        dot.classList.remove('active');
    }
        dots[index].classList.add('active');

}


let currentIndex = 0;

const moveNextSlide = () => {

    if(currentIndex >= entities.length){
        currentIndex = 0;

    } else{  
        setEntity(currentIndex);
        currentIndex += 1; 
    }

}

const movePrevSlide = () => {
    
    if(currentIndex === 0){
        currentIndex = entities.length;
    } else{
    setEntity(currentIndex - 1);
         currentIndex -= 1;
    }
}


next.addEventListener('click', moveNextSlide)
prev.addEventListener('click', movePrevSlide)

