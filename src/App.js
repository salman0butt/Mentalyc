import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Same Component is added on Both Routes For Easy testing */}
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
