import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Authentification from './pages/authentification';
import CrelosaMainPage from './pages/crelosa_main_page';

const App = () => (
  <>
    <Routes>
      <Route path="/login/*" element={<Authentification />} />
      <Route path="/main/*" element={<Main />} />
      <Route path="/*" element={<CrelosaMainPage />} />
    </Routes>
  </>
);

export default App;
