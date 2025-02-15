import { tm } from '@/utils/tw-merge';
import Header from './components/header';
import Book from './components/book';
import SearchForm from './components/search-form';
import { useState } from 'react';
import { getQueryParam } from '../utils/query-param';

const getQueryState = () => getQueryParam() ?? '';

function Millie() {
  const [query, setQuery] = useState(getQueryState);

  return (
    <div className={tm('bg-white p-6 rounded-lg flex flex-col gap-4')}>
      <Header />
      <hr className="border-gray-300 " />
      <SearchForm query={query} setQuery={setQuery} />
      <p>책이 바뀌었다.</p>
      <Book />
    </div>
  );
}

export default Millie;
