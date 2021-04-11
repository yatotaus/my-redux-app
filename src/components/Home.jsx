import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Chart from './Chart';
import Table from './Table';

const Home = () => {
	const [chartMetric, setChartMetric] = useState([]);
	const { TK1 } = useSelector(state => state.data.data.current.data);

	const predictionNamesTK1 = TK1 ? Object.keys(TK1).filter(name => name.startsWith('TK1_')) : [];
	const dataTK1 = predictionNamesTK1.map(predictionName => {
		const predictionValues = TK1[predictionName].values;
		const predictionTimes = TK1[predictionName].times;
		return {
			predictionLastValue: predictionValues[predictionValues.length - 1],
			predictionName: predictionName,
			predictionTimes: predictionTimes,
			predictionValues: predictionValues,
		}
	});

	const setMultiMetrics = (metric) => {
		const metricInChart = chartMetric.some(arrVal => metric.predictionName === arrVal.predictionName);

		if (!metricInChart) {
			chartMetric.push(metric);
			setChartMetric([...chartMetric]);
		} else {
			const newMetrics = chartMetric.filter(arrVal => metric.predictionName !== arrVal.predictionName);
			setChartMetric(newMetrics);
		}
	};

	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<h3>TK1 Table</h3>
					<Table
						dataTK1={dataTK1}
						setChartMetric={setMultiMetrics}
					/>
				</div>
			</div>
			{chartMetric.length > 0 &&
				<div className='card'>
					<div className='card-body'>
						<Chart list={chartMetric} />
					</div>
				</div>
			}
			{chartMetric.length === 0 &&
				<h4 style={{marginLeft: '40px'}}>
					Select one or more metrics from the table to display the line graph.
				</h4>
			}
		</>
	)
}

export default Home;