import React from 'react';
import { Link } from 'react-router-dom';
import { EndOfTheGameProps } from '../../../types';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export const EndOfTheGame: React.FC<EndOfTheGameProps> = ({
  clearGameField,
}) => {
  const onClickAction = () => {
    clearGameField([], []);
  };

  const { width, height } = useWindowSize();

  return (
    <div className="frame-box">
      <Confetti width={width} height={height} />
      <button className="new-game-btn" onClick={onClickAction}>
        <Link className="new-game" to="/">
          Новая игра
        </Link>
      </button>
    </div>
  );
};
