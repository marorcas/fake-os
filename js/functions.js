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
        
        const newPage = document.createElement("h1");
        newPage.textContent = "Hmm. We're having trouble finding that site."

        firefoxPage.appendChild(newPage);
    }
});