const ADC0 = new Chart(document.getElementById('ADC0'), {
    options: {
        scales: {
            x: { type: 'realtime', realtime: { duration: 20000, delay: 1000, pause: false, ttl: undefined, frameRate: 60 } },
            y: { min: 0, max: 4096, }
        },
        layout: { padding: 0 },
        datasets: { line: { pointRadius: 0 } },
        elements: { line: { tension: 1, borderWidth: 2 } },
    },
    type: 'line', data: { datasets: [{ label: 'ADC0', data: [], borderColor: '#FF6384', backgroundColor: '#FFB1C1', }] }
});

const ADC1 = new Chart(document.getElementById('ADC1'), {
    options: {
        scales: {
            x: { type: 'realtime', realtime: { duration: 20000, delay: 1000, pause: false, ttl: undefined, frameRate: 60 } },
            y: { min: 0, max: 4096, }
        },
        layout: { padding: 0 },
        datasets: { line: { pointRadius: 0 } },
        elements: { line: { tension: 1, borderWidth: 2 } },
    },
    type: 'line', data: { datasets: [{ label: 'ADC1', data: [], borderColor: '#36A2EB', backgroundColor: '#9BD0F5', }] }
});

const ADC2 = new Chart(document.getElementById('ADC2'), {
    options: {
        scales: {
            x: { type: 'realtime', realtime: { duration: 20000, delay: 1000, pause: false, ttl: undefined, frameRate: 60 } },
            y: { min: 0, max: 4096, }
        },
        layout: { padding: 0 },
        datasets: { line: { pointRadius: 0 } },
        elements: { line: { tension: 1, borderWidth: 2 } },
    },
    type: 'line', data: { datasets: [{ label: 'ADC2', data: [], borderColor: '#36A2EB', backgroundColor: '#9BD0F5', }] }
});