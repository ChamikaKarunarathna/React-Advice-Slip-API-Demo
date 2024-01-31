import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdviceChooser from './components/advice-chooser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/React-Advice-Slip-API-Demo' element={<AdviceChooser />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
