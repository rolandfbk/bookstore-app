import './App.css';
import Header from './components/Header';
import BookContainer from './components/BookContainer';
import Form from './components/Form';
import CheckStatus from './components/CheckStatus';
import { Route, Routes } from "react-router-dom"

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<div><BookContainer /> <Form /></div>} />
      <Route path="/Categories" element={<CheckStatus />} />
    </Routes>
  </>
);

export default App;
