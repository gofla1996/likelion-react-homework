import { ErrorBoundary } from 'react-error-boundary';
// import Homework5 from './homeworks/w5/homework5';
import Homewwork6 from './homeworks/w6/homework6';

function App() {
  return (
    <ErrorBoundary fallback={<p>Oops... 오류 발생! 😥</p>}>
      {/* <Homework5 /> */}
      <Homewwork6 />
    </ErrorBoundary>
  );
}

export default App;
