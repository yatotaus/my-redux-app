import React from 'react';
import './Table.scss'; 

const Table = ({ dataTK1, setChartMetric }) => (
    <table className="table-predictions">
        <caption>List of TK1 current predictions</caption>
        <thead>
            <tr>
                <th scope="col">Metric</th>
                <th scope="col">Value</th>
            </tr>
        </thead>
        <tbody>
            {dataTK1.map(metric => (
                <tr 
                    key={metric.predictionName} 
                    onClick={() => setChartMetric(metric)}
                    style={{ cursor: 'pointer' }} 
                >
                    <td>{metric.predictionName}</td>
                    <td>{metric.predictionLastValue}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;