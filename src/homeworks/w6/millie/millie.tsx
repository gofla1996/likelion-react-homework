import { tm } from '@/utils/tw-merge';
import Header from './components/header';

function Millie() {
  return (
    <div className={tm('bg-white p-6 rounded-lg')}>
      <Header />
      <h1>Millie</h1>
      <p>책이 바뀌었다.</p>
    </div>
  );
}

export default Millie;
