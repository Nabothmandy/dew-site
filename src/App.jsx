import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home.jsx';
import MainLayout from './layout/mainlayout.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/lodgings" element={<Lodgings />} />
        <Route path="/book" element={<Book />} /> */}
      </Route>
    </Routes>
  );
}