import { Routes, Route } from 'react-router-dom';
import NavDrawer from '../components/store/nav_drawer';
import Models from '../components/store/models';
import ModelDetails from '../components/store/model_details';
import Reserve from '../components/store/reserve';
import MyOperations from '../components/store/my_operations';
import AddMotorcycle from '../components/store/add_motorcycle';
import DeleteMotorcycle from '../components/store/delete_motorcycle';

const Main = () => (
  <>
    <NavDrawer />
    <main>
      <Routes>
        <Route path="/" element={<Models />} />
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
