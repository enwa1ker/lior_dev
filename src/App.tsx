import React, { FC } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;