const connectButton = document.getElementById('connect');
let port;

connectButton.addEventListener('click', function () {
    if (port) {
        port.close();
        port = undefined;
    }
    else {
        getReader();
    }
});

let lineBuffer = '';
let latestValue = 0;
async function getReader() {
    // Raspberry Pi Pico vendor & product id
    const filters = [{ usbVendorId: 11914, usbProductId: 10 }];

    port = await navigator.serial.requestPort({ filters });
    await port.open({ baudRate: 11520 });

    const appendStream = new WritableStream({
        write(chunk) {
            lineBuffer += chunk;
            let lines = lineBuffer.split('\n');

            if (lines.length > 1) {
                lineBuffer = lines.pop();
                latestValue = parseInt(lines.pop().trim());

                console.log(latestValue)
                ADC0.data.datasets[0].data.push({ x: Date.now(), y: latestValue });
            }
        }
    });

    port.readable
        .pipeThrough(new TextDecoderStream())
        .pipeTo(appendStream);
}