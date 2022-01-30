import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

import './styles/global.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route index element={<Landing />}/> 
          <Route path="app" element={<OrphanagesMap />}/>
          <Route path="orphanages/create" element={<CreateOrphanage />}/>
          <Route path="orphanages/:id" element={<Orphanage />}/>
        </Routes>
      </Router>
  );
}

export default App;