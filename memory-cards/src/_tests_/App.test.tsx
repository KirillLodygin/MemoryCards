import React from 'react';
import { createBrowserHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from '../app/redux/configureStore';
import { App } from '../App';

describe('App', () => {
  const history = createBrowserHistory();
  const initialState: any = {};
  const store = configureStore(history, initialState);
  it('renders Home page', () => {
    const { container, getAllByRole } = render(
      <App store={store} history={history} />,
    );
    expect(getAllByRole('button').length === 3);
    expect(container.innerHTML).toMatch('Выберите размер игрового поля');
  });

  it('should navigate to Game_field page', () => {
    render(<App store={store} history={history} />);
    fireEvent.click(screen.getByText(/Размер поля 4 х 3/));
    screen.debug();
    expect(screen.getAllByTestId('memory-card').length === 12);
  });
});
