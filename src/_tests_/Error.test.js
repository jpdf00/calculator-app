import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Error from '../components/Error';

describe('Error Component', () => {
  test('It should render', () => {
    const error = renderer.create(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    ).toJSON();
    expect(error).toMatchSnapshot();
  });
});
