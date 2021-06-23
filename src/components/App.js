import Display from './Display';
import ButtonPanel from './ButtonPanel';
// Disabling linters on the calculate import because calculate() isn't being used yet.
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';
/* eslint-enable no-unused-vars */

const App = () => (
  <>
    <Display result="0" />
    <ButtonPanel />
  </>
);

export default App;
