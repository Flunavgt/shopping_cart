import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Authentification from './pages/authentification';

const App = () => (
  <>
    <Routes>
      <Route path="/login/*" element={<Authentification />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  </>
);

export default App;
