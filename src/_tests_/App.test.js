import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

describe('App Component', () => {
  const btns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'AC', '+/-', '.', '+', '-', '×', '÷', '%', '='];

  test('It should render', () => {
    const app = renderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });

  btns.forEach((item) => {
    test(`should render the button ${item}`, () => {
      const { getByText } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
      const btnName = getByText(item);
      expect(btnName).toBeInTheDocument();
    });
  });
});
