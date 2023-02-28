const connectButton = document.getElementById('connect');
let port;

connectButton.addEventListener('click', function () {
    if (port) {
        port.close();
        port = undefined;

        connectButton.innerText = '🔌 Connect';
        document.querySelector('figure').classList.replace('bounceIn', 'fadeOut');
    }
    else {
        getReader();
    }
});

connectButton.disabled = false;