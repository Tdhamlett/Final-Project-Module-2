//template_vod159n
//public key- N29IlFRHAmCv4YxBZ
//service ID - service_4rje6w9
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }

}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme")
    }
    else { 
        document.body.classList.remove("dark-theme")
    }

}

const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
function contact(event) {
    event.preventDefault();

    loading.classList.add("modal__overlay--visible");

    console.log("loading", loading, "Success", success);
    emailjs
        .sendForm(
            'service_4rje6w9',
            'template_vod159n',
            event.target,
            'N29IlFRHAmCv4YxBZ')

        .then(() => {
            console.log('success!!')
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please try again shortly."
            );
        })
}

/*function moveBackground() {
console.log('Just moving background');
}*/

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
        return;
    }

    isModalOpen = true;
    document.body.classList.add("modal--open");

}