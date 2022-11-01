import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import MainPage from './views/main';
import AboutPage from './views/about';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
