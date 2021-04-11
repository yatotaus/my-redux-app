import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from './redux/actions/data';
import Home from './components/Home';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const { data, error, loading, success } = useSelector(state => state.data);

	useEffect(() => {
		dispatch(getData());
	}, []);

	return (
		<div className="App">
			{success && <Home />}
			{data.loading && <p>Loading...</p>}
			{data.length === 0 && !loading && <p>No data available!</p>}
			{error && !loading && <p>{error}</p>}
		</div>
	);
}

export default App;
