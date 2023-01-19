import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Custom_Home from './screen/Custom_home/Custom_Home.jsx';
import Index from './screen/Index';
import Home_contruction_picture from './screen/Main_top/Home_contruction_picture.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
