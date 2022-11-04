import './App.css';
import Footer from './components/footer';
import { useState } from "react";
import ContactPage from './components/contact';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';

function App() {

  const [formData, setFormData] = useState([])

  const addForm = (newInput) => {
    setFormData([...formData, newInput])
  }

  return (
    <div className="container">
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/contact' element={<ContactPage handleAdd = {addForm} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
