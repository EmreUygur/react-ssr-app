import React from 'react';
import { Routes, Route } from 'react-router-dom';
import appRoutes from './router';
import Navbar from './components/Navbar';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          {appRoutes.map((route, idx) => (
            <Route path={route.path} element={<route.component />} key={idx} />
          ))}
        </Routes>
      </>
    );
  }
}

export default App;
