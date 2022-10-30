import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './views/main';
import AboutPage from './views/about';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Router>
          <h1>Hello World</h1>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
