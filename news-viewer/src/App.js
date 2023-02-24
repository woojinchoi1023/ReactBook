import React, { useState } from 'react';
import axios from '../node_modules/axios/index';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <div>
      <NewsList />
    </div>
  );
};

export default App;
