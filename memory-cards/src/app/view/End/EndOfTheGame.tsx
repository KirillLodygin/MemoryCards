import React from 'react';
import {Link} from 'react-router-dom';
import {EndOfTheGameProps} from '../../../types';

export const EndOfTheGame: React.FC<EndOfTheGameProps> = ({clearGameField}) => {
	const onClickAction = () => {
		clearGameField([], []);
	};

	return(
		<div>
			<button onClick={onClickAction}>
				<Link to='/'>Новая игра</Link>
			</button>
		</div>
	)
};