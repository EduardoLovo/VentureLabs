import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ListClient } from './pages/ClientList/ClientList';
import { ClientView } from './pages/ClientView/ClientView';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/client/list" element={<ListClient />} />
        <Route path="/client/view/:id" element={<ClientView />} />
      </Routes>
    </div>
  );
}

export default App;
