import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const removeTour = id => {
		return setTours(tours.filter(
			tour => tour.id !== id
		));
	}

	const fetchTours = async () => {
		setIsLoading(true);

		try {
			const response = await fetch(url);
			const tours = await response.json();
	
			setIsLoading(false);
			setTours(tours);	
		}
		catch (error) {
			setIsLoading(false);
			console.log(error);			
		}
	}

	useEffect(() => {
		fetchTours();
	}, [])

	if (isLoading) {
		return (
			<main>
				<Loading/>
			</main>
		)
	}
	
	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>no tours to show</h2>
					<div className='underline'></div>
					<button className='btn-outline' onClick={fetchTours}>load tours</button>
				</div>
			</main>
		)
	}
	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App
