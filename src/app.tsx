import { ErrorBoundary } from 'react-error-boundary';
import Homework5 from './homework5';

function App() {
  return (
    <ErrorBoundary fallback={<p>Oops... 오류 발생! 😥</p>}>
      <Homework5 />
    </ErrorBoundary>
  );
}

export default App;
