import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import WhatsAppPage from './components/WhatsAppPage';
import FormPage from './components/FormPage';
import TransactionsPage from './components/TransactionsPage';
import Login from './components/Login';
import FAQPage from './components/FaqPage';
import DonationPage from './components/DonationPage';
import Rewards from './components/Rewards';
import FeedbackPage from './components/FeedBack';
import LearningModules from './components/LearningModule';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<TransactionsPage />} />
          <Route path="/share" element={<WhatsAppPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/donationpage" element={<DonationPage />} />
          <Route path="/rewards" element={<Rewards/>} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/learningmodules" element={<LearningModules/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
