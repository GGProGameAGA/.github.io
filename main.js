document.querySelector('.header__menu-icon').addEventListener('click', function () {
    var menuItems = document.querySelector('.header__menu_items');
    if (menuItems.style.display === 'none') {
        menuItems.style.display = 'flex';
        this.classList.add('rotated'); 
    } else {
        menuItems.style.display = 'none';
        this.classList.remove('rotated'); 
    }
});

document.querySelectorAll('.element3__accordion').forEach((el) => {
    el.addEventListener('click', () => {
        let contentt = el.nextElementSibling;
        if (contentt.style.maxHeight) {
            document.querySelectorAll('.element3__text3').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.element3__text3').forEach((el) => el.style.maxHeight = null)
            contentt.style.maxHeight = contentt.scrollHeight + 'px'
        }
    })
})

const tabsBtn = document.querySelectorAll(".element4__frame1");
const tabsItems = document.querySelectorAll(".element5__block1")

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function (item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});

const images = document.querySelectorAll('#ef1');
const controls = document.querySelectorAll('.controls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controls.forEach((control) => { 
    control.addEventListener('click', function (event) { 
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    });
});

show(imageIndex);



document.getElementById('open-modal-btn').addEventListener('click', function() {
    document.getElementById('my-modal').classList.add('open')
})
document.getElementById('close-my-modal-btn').addEventListener('click', function() {
    document.getElementById('my-modal').classList.remove('open')
})