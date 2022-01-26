import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

import './styles/global.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route index element={<Landing />}/> 
          <Route path="app" element={<OrphanagesMap />}/>
        </Routes>
      </Router>
  );
}

export default App;