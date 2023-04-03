import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.jsx';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
