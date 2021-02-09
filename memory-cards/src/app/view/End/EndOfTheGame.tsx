import React from 'react';
import {Link} from 'react-router-dom';

export const EndOfTheGame: React.SFC = () => (
	<div>
		<button>
			<Link to='/'>Новая игра</Link>
		</button>
	</div>
);