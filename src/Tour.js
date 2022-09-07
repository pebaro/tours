import React, { useState } from 'react';
import { setReadMoreLength } from './utils';

const Tour = ({ id, image, info, price, name, removeTour }) => {

	const [readMore, setReadMore] = useState(false);

	const toggleReadMore = () => setReadMore(!readMore);

	return (
		<article className='single-tour'>
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className='tour-price'>${price}</h4>
				</div>
				<p>
					{
						readMore ? info : setReadMoreLength(info, 200) + '...'
					}
					<button onClick={toggleReadMore}>
						{
							!readMore ? 'show more' : 'show less'
						}
					</button>
				</p>
				<button
					className='delete-btn'
					onClick={() => removeTour(id)}
				>not interested</button>
			</footer>
		</article>
	)
};

export default Tour;
