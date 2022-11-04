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
          {appRoutes.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </>
    );
  }
}

export default App;
