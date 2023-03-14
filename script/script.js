let modal = document.querySelector('.modal'),
    openModalbBtn = document.querySelector(".btn_start_trial"),
    closeModalBtn = document.querySelector('.close_modal');

openModalbBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.classList.add('modal');
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.classList.remove = 'modal';
    document.body.style.overflow = "";
})

let applicationSent = document.querySelector('.applicationSent '),
    send = document.querySelector('.send '),
    close__modal_application = document.querySelector('.close__modal_application ');


send.addEventListener('click', () => {
    applicationSent.style.display = 'block';
    applicationSent.classList.add('applicationSent');
    document.body.style.overflow = 'hidden';
});

close__modal_application.addEventListener('click', () => {
    applicationSent.style.display = 'none';
    applicationSent.classList.remove('applicationSent');
    document.body.style.overflow = '';
})

close__modal_application.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.classList.remove('modal');
    document.body.style.overflow = '';
})


/* button open mobil menu */

let mobilMenu = document.querySelector('.mobil-menu'),
    openMobalMenu = document.querySelector('.mobil_img'),
    closeModalMenu = document.querySelector('.close__mobil_menu');

openMobalMenu.addEventListener('click', () => {
    mobilMenu.style.display = 'block';
    mobilMenu.classList.add = ('mobil-menu')
    document.body.style.overflow = 'hidden';
})

closeModalBtn.addEventListener('click', () => {
    mobilMenu.style.display = 'none';
    mobilMenu.classList.remove = ('mobil-menu')
    document.body.style.overflow = "";
}) 




