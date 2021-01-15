import logo from './logo.svg';
import DatePickerContainer from './modules/MAIN/date-picker.container.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import HeroSection from "./modules/CORE/hero-section.view";
import FooterSection from "./modules/CORE/footer-section.view";
import './App.css';

function App() {
  return (
    <div>
      <ReactNotification />
      <HeroSection />
      <DatePickerContainer />  
      <FooterSection />
    </div>
  );
}

export default App;
