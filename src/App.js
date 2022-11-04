import './App.css';
import Footer from './components/footer';

import ContactPage from './components/contact';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
