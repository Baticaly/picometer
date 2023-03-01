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
            let values = lineBuffer.split('\n');

            if (values.length > 1) {
                lineBuffer = values.pop();

                let channels = values.pop().trim().split('-')
                ADC0.data.datasets[0].data.push({ x: Date.now(), y: channels[0] });
                ADC1.data.datasets[0].data.push({ x: Date.now(), y: channels[1] });
                ADC2.data.datasets[0].data.push({ x: Date.now(), y: channels[2] });
            }
        }
    });

    port.readable
        .pipeThrough(new TextDecoderStream())
        .pipeTo(appendStream);
}