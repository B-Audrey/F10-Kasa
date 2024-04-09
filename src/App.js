import './styles/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home';
import Accomodation from  './pages/Accomodation';
import About from './pages/About';
import WrongPage from './pages/WrongPage';
import Footer from './components/Footer/index';
import SmallerPage from './components/SmallerPage/index';

const App = () => {
  return (
    <>
    <SmallerPage />
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/accomodation/:refNumber' element={<Accomodation />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/error' element={<WrongPage />}/>
        <Route path='*' element={<WrongPage />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
