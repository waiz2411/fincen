import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import PatnerDashboard from './Components/patnerDashboard'
import Report from './Components/report'
import Companies from './Components/companies'
import Billings from './Components/billings'
import MyCompanies from './Components/MyCompanies'
import Mycompanyemployee from './Components/mycompanyemployee'
import Mycompanyemployee2 from './Components/mycompanyemployee2'
import AddCompany from './Components/AddCompany'
import MyInfo from './Components/MyInfo.js'
import MyFillings from './Components/MyFillings.js'
import Dashboard from './Components/dashboard.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner-dashboard" element={<PatnerDashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/billings" element={<Billings />} />
        <Route path="/MyCompanies" element={<MyCompanies />} />
        <Route path="/mycompany-employee" element={<Mycompanyemployee />} />
        <Route path="/mycompany-employee-members" element={<Mycompanyemployee2 />} />
        <Route path="/addcompany" element={<AddCompany />} />
        <Route path="/my-info" element={<MyInfo />} />
        <Route path="/my-fillings" element={<MyFillings />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
