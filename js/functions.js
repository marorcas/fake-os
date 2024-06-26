// for change of image on task view hover
function hoverTask(element) {
    element.setAttribute('src', './assets/node_modules/bootstrap-icons/icons/view-stacked.svg');
}
function unhoverTask(element) {
    element.setAttribute('src', './assets/node_modules/bootstrap-icons/icons/view-list.svg');
}


// for displaying date and time
window.onload = displayDateTime();
function displayDateTime() {
    const time = new Date().toLocaleString([], {timeStyle: 'short'});
    document.getElementById('time').textContent = time;

    const date = new Date().toLocaleDateString([], {year: 'numeric', month: 'numeric', day: 'numeric'});
    document.getElementById('date').textContent = date;

    setTimeout(displayDateTime, 1000);
};