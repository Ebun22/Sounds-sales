let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let backBtn = document.querySelector('.back')
let seeMoreBtn = document.querySelectorAll('.seemore')
let carousel = document.querySelector('.carousel')
let listHTML = document.querySelector('.carousel .list')
let InfinitSlider;

nextBtn.onclick = () => {
    clearInterval(InfinitSlider);
    showSlider('next')
    resumeAutoSlider()
}
prevBtn.onclick = () => {
    clearInterval(InfinitSlider);
    showSlider('prev')
    resumeAutoSlider()
}

let unAcceptClick;
let clicked;
const showSlider = (type) => {
    nextBtn.style.pointerEvents = "none";
    prevBtn.style.pointerEvents = "none";

    carousel.classList.remove('prev', 'next')
    let items = document.querySelectorAll(".carousel .list .item")
    if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next')
    } else {
        const lastChild = items.length - 1
        listHTML.prepend(items[lastChild]);
        carousel.classList.add('prev')
    }
    if (unAcceptClick) {
        clearTimeout(unAcceptClick);
    }
    unAcceptClick = setTimeout(() => {
        nextBtn.style.pointerEvents = "auto";
        prevBtn.style.pointerEvents = "auto";
    }, 1800)
}

InfinitSlider = setInterval(() => {
    showSlider('next');
}, 3000);

const resumeAutoSlider = () => {
    InfinitSlider = setInterval(() => {
        showSlider('next');
    }, 3000);
}

seeMoreBtn.forEach((more) => {
    more.addEventListener("mouseenter", () => {
        clearInterval(InfinitSlider);
    })
    more.onclick = () => {
        clicked = true
        clearInterval(InfinitSlider);
        console.log("Details was clicked")
        carousel.classList.add('details')
    }
    more.addEventListener("mouseleave", () => {
        if (!clicked) {
            console.log("This is clicked: ", clicked)
            return resumeAutoSlider()

        }
    })
});

backBtn.onclick = () => {
    carousel.classList.remove('details')
    resumeAutoSlider()
}