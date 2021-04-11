import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const multiPredictions = (list) => {
    return list.map((metric) => {
        return {
            type: "spline",
            name: metric.predictionName,
            showInLegend: true,
            dataPoints: calculateDataPoints(metric)
        }
    })
}

const calculateDataPoints = (metric) => {
    return metric.predictionValues.map((pointValue, index) => {
        return {
            x: metric.predictionTimes[index],
            y: pointValue
        }
    })
}

const Chart = ({ list }) => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: {
            text: "Line graph"
        },
        axisY: {
            title: "Value",
        },
        axisX: {
            title: "Time",
        },
        data: multiPredictions(list)
    }

    return <CanvasJSChart options={options} />;
}

export default Chart;