// começo slid section1
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);

setInterval(nextSlide, 3000);

// começo slid section2


// começo slid section3 clientes

const carousel = document.querySelector('.carousel2');
const carouselItems = document.querySelectorAll('.carousel-item2');
const nextButton = document.querySelector('.carousel-button2.next');
const prevButton = document.querySelector('.carousel-button2.prev');
const intervalTime = 2000;
let currentIndexx = 0;
let autoSlide = setInterval(nextSlidee, intervalTime);

function nextSlidee() {
    carousel.style.transition = 'transform 1s ease';
    currentIndexx = (currentIndexx + 1) % carouselItems.length;
    carousel.style.transform = `translateX(-${100 / carouselItems.length * currentIndexx}%)`;
}

function prevSlidee() {
    carousel.style.transition = 'transform 1s ease';
    currentIndexx = (currentIndexx - 1 + carouselItems.length) % carouselItems.length;
    carousel.style.transform = `translateX(-${100 / carouselItems.length * currentIndexx}%)`;
}

nextButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlidee();
    autoSlide = setInterval(nextSlidee, intervalTime);
});

prevButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    prevSlidee();
    autoSlide = setInterval(nextSlidee, intervalTime);
});

// final slid section3 clientes

// começon observar hidden
const observador = new IntersectionObserver((observar) => {
    observar.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('show')
        } else {
            entrada.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => observador.observe(element));




// final observar hidden

// começon menu hamburguer
function toggleMenu() {
    const nav = document.getElementById('navigation').querySelector('ul');
    if (nav.style.display === 'flex' || nav.style.display === '') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column'; // Garantir que o menu apareça verticalmente
    }
}

// final menu hamburguer

// começon scroll diminuir header
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// final scroll diminuir header

// começo scroll diminuir logo
window.addEventListener('scroll', function () {
    var logo = document.querySelector('.logo img');
    if (window.scrollY > 50) {
        logo.classList.add('scrolledd');
    } else {
        logo.classList.remove('scrolledd');
    }
});
//final scroll diminuir logo

const projectItem = document.querySelectorAll(".object")
const divFlex4 = document.querySelector('.section4')
const objectBefore = document.querySelector('.object:before')
const detail = document.querySelectorAll('.detail')
const button1 = document.querySelector('.button-item1')
const item1 = document.querySelector('.item1')
const exitButton = document.querySelector('.exit')
const video = document.querySelector('video')
const details = document.querySelector('.details')


function openModal() {
    document.querySelector('.box').classList.remove('hidden2'); // Exibe o modal
    video.play()
}

// Função para fechar o modal
function closeModal() {
    document.querySelector('.box').classList.add('hidden2'); // Oculta o modal
    document.body.classList.remove('no-scroll'); // Reativa o scroll
    video.pause()
}

// Adicione eventos de clique para abrir e fechar o modal
document.querySelector('.button-item1 a').addEventListener('click', openModal);
document.querySelector('.exit').addEventListener('click', closeModal);

projectItem.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        item.classList.toggle('show1')
        item.classList.toggle('algo')
        detail[index].classList.add('show1')
    })
})

projectItem.forEach((item, index) => {
    item.addEventListener('mouseout', () => {
        item.classList.toggle('show1')
        item.classList.toggle('algo')
        detail[index].classList.remove('show1')
    })
})

