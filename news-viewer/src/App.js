import React, { useCallback, useState } from 'react';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => {
//     setCategory(category);
//   }, []);

//   return (
//     <div>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </div>
//   );
// };

const App = () => {
  //:category? --> ?는 optional하다는 의미
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
