// for change of icon on task view hover
const hoverTask = (element) => {
    element.setAttribute('src', './assets/node_modules/bootstrap-icons/icons/view-stacked.svg');
};
const unhoverTask = (element) => {
    element.setAttribute('src', './assets/node_modules/bootstrap-icons/icons/view-list.svg');
};


// for displaying date and time
const displayDateTime = () => {
    const time = new Date().toLocaleString([], {timeStyle: 'short'});
    document.getElementById('time').textContent = time;

    const date = new Date().toLocaleDateString([], {year: 'numeric', month: 'numeric', day: 'numeric'});
    document.getElementById('date').textContent = date;

    setTimeout(displayDateTime, 1000);
};
window.onload = displayDateTime;


//for open and close start menu
const startIcon = document.getElementById('startIcon');
const startModal = document.getElementById('startModal');

startIcon.addEventListener('click', () => {
    if (startModal.style.display === 'none') {
        startModal.style.display = 'flex';
    } else {
        startModal.style.display = 'none';
    }
});


// for open and close firefox
const firefoxIcon = document.getElementById('firefoxIcon');
const closeFirefox = document.getElementById('closeFirefox');
const firefoxModal = document.getElementById('firefoxModal');
const firefoxPage = document.getElementById('firefoxPage');
const firefoxOriginalPage = firefoxPage.innerHTML;
const firefoxInput = document.getElementById('firefoxInput');

firefoxIcon.addEventListener('click', () => {
    firefoxModal.style.display = 'flex';
});
closeFirefox.addEventListener('click', () => {
    firefoxModal.style.display = 'none';
    firefoxPage.innerHTML = firefoxOriginalPage;
    firefoxInput.value = '';
});

// for searching in firefox
firefoxInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        firefoxPage.innerHTML = "";

        const inputValue = firefoxInput.value;

        if (inputValue.trim() === "bird") {
            const newPage = document.createElement("img");
            newPage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-W8uey-kbTFE%2FUrluLx3VlrI%2FAAAAAAAAAL4%2Ft5Jt9WqaSUk%2Fs1600%2FWestern%2BParotia.jpg&f=1&nofb=1&ipt=c57dfb616fdab526a98998f98ca2b739cd9cf83e8ce8fd81674881361f4a8867&ipo=images"
            
            firefoxPage.appendChild(newPage);
        } else {
            const newPage = document.createElement("h1");
            newPage.textContent = "Hmm. We're having trouble finding that site."

            firefoxPage.appendChild(newPage);
        }
    }
});


// for open and close photos
const photosIcon = document.getElementById('photosIcon');
const closePhotos = document.getElementById('closePhotos');
const photosModal = document.getElementById('photosModal');

photosIcon.addEventListener('click', () => {
    photosModal.style.display = 'flex';
});
closePhotos.addEventListener('click', () => {
    photosModal.style.display = 'none';
});

// for selecting photos
const thumbnails = document.querySelectorAll('.photos__modal__thumbnail');
// const containers = document.querySelectorAll('.photos__modal__container');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // containers.forEach((c) => c.classList.remove('photos__modal__container--selected'));
        const imagePath = thumbnail.getAttribute('src');
        // const parent = thumbnail.parentNode;
        // parent.classList.add('.photos__modal__container--selected');
        displayImage(imagePath);
    });
});

const displayImage = (imagePath) => {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = imagePath;
};


// for open and close notepad
const notepadIcon = document.getElementById('notepadIcon');
const closeNotepad = document.getElementById('closeNotepad');
const notepadModal = document.getElementById('notepadModal');
const notepadInput = document.getElementById('notepadInput');

notepadIcon.addEventListener('click', () => {
    notepadModal.style.display = 'flex';
});
closeNotepad.addEventListener('click', () => {
    notepadModal.style.display = 'none';

    if (saveClicked === false) {
        notepadInput.value = '';
    }
});


// for save text in notepad
const saveButton = document.getElementById('saveNotepad');
let saveClicked = false;

saveButton.addEventListener('click', () => {
    saveClicked = true;
});

// for delete text in notepad
const deleteButton = document.getElementById('deleteNotepad');

deleteButton.addEventListener('click', () => {
    notepadInput.value = '';
});