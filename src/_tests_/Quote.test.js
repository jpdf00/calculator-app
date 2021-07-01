import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';

describe('Quote Component', () => {
  test('It should render', () => {
    const quote = renderer.create(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>,
    ).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
