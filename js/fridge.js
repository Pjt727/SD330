// options which format the time when interacting with js's time api
const timeOptions = {
    timeZone: 'America/New_York',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
const clockElement = document.getElementById("clock");
function updateTime() {
    // getting the current time wiht options from the js api
    const currentTimeEST = new Date().toLocaleString('en-US', timeOptions);
    clockElement.innerText = currentTimeEST;
}
updateTime();
setInterval(updateTime, 1000);

let isOn = true;
const toggleElement = document.getElementById("onOff");
const tempElement = document.getElementById("temperature");
const browserElement = document.getElementById("browser");

function togglePower() {
    isOn = !isOn;
    if (isOn) {
        toggleElement.innerText = "Turn Off";
        toggleElement.style.borderColor = "firebrick";
        browserElement.style.display = "block";
        tempElement.style.display = "block";
    } else {
        toggleElement.innerText = "Turn On";
        toggleElement.style.borderColor = "green";
        browserElement.style.display = "none";
        tempElement.style.display = "none";
    }
}

let isFridgeClosed = true;
const openedFridge = document.getElementById("openedFridge");

function toggleFridge() {
    isFridgeClosed = !isFridgeClosed;
    if (isFridgeClosed) {
        openedFridge.style.display = "block";
    } else {
        openedFridge.style.display = "none";
    }
}
