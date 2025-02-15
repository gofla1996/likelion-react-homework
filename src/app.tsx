import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Homework5 from './homeworks/w5/homework5';
import Homework6 from './homeworks/w6/homework6';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<p>Oops... 오류 발생! 😥</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homework5" element={<Homework5 />} />
          <Route path="/homework6" element={<Homework6 />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
