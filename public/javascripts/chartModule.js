import { Chart } from 'chart.js';
import 'chartjs-adapter-luxon';
import ChartStreaming from 'chartjs-plugin-streaming';

Chart.register(ChartStreaming);