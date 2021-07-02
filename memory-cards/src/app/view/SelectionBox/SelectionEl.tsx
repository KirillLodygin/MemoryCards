import React from 'react';
import { SelectionElProps } from '../../../types';

export const SelectionEl: React.FC<SelectionElProps> = ({
  name,
  fieldSize,
  createCardSet,
}) => {
  const onClickAction = () => {
    createCardSet(fieldSize);
  };

  return (
    <button className="selection-btn" onClick={onClickAction}>
      {name}
    </button>
  );
};
