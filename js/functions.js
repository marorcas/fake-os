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