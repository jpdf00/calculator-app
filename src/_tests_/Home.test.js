import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Home Component', () => {
  test('It should render', () => {
    const home = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});
