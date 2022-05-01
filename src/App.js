import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ListClient } from './pages/ClientList/ClientList';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/client/list" element={<ListClient />} />
      </Routes>
    </div>
  );
}

export default App;
