import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmailHistory from './pages/EmailHistory';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<EmailHistory />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
