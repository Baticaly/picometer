Chart.defaults.backgroundColor = '#111111';
Chart.defaults.borderColor = '#efefef';
Chart.defaults.color = '#f9f9f9';

const ADC0 = new Chart(document.getElementById('ADC0'), {
    options: {
        scales: {
            x: { type: 'realtime', realtime: { duration: 20000, delay: 1000, pause: false, ttl: undefined, frameRate: 60 } },
            y: { min: 0, max: 4096, }
        },
        layout: { padding: 0 },
        datasets: { line: { pointRadius: 0 } },
        elements: { line: { tension: 1, borderWidth: 3 } },
    },
    type: 'line', data: { datasets: [{ label: 'ADC0', data: [], borderColor: '#dd442a', backgroundColor: '#dd442a', }] }
});

const ADC1 = new Chart(document.getElementById('ADC1'), {
    options: {
        scales: {
            x: { type: 'realtime', realtime: { duration: 20000, delay: 1000, pause: false, ttl: undefined, frameRate: 60 } },
            y: { min: 0, max: 4096, }
        },
        layout: { padding: 0 },
        datasets: { line: { pointRadius: 0 } },
        elements: { line: { tension: 1, borderWidth: 3 } },
    },
    type: 'line', data: { datasets: [{ label: 'ADC1', data: [], borderColor: '#275950', backgroundColor: '#275950', }] }
});

const ADC2 = new Chart(document.getElementById('ADC2'), {
    options: {
        scales: {
            x: { type: 'realtime', realtime: { duration: 20000, delay: 1000, pause: false, ttl: undefined, frameRate: 60 } },
            y: { min: 0, max: 4096, }
        },
        layout: { padding: 0 },
        datasets: { line: { pointRadius: 0 } },
        elements: { line: { tension: 1, borderWidth: 3 } },
    },
    type: 'line', data: { datasets: [{ label: 'ADC2', data: [], borderColor: '#18367e', backgroundColor: '#18367e', }] }
});