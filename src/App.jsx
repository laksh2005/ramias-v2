import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Courses from './components/Courses';
import Landing from './components/Landing';

function App() {
  return (
  <>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Body />} >
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
