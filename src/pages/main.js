import { Routes, Route } from 'react-router-dom';
import NavDrawer from '../components/nav_drawer';
import Models from '../components/models';
import ModelDetails from '../components/model_details';
import Reserve from '../components/reserve';
import MyOperations from '../components/my_operations';
import AddMotorcycle from '../components/add_motorcycle';
import DeleteMotorcycle from '../components/delete_motorcycle';

const Main = () => (
  <>
    <NavDrawer />
    <main>
      <Routes>
        <Route path="/models" element={<Models />} />
        <Route path="/models/:id" element={<ModelDetails />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/my-operations" element={<MyOperations />} />
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
      </Routes>
    </main>
  </>
);

export default Main;
