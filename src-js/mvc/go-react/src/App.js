import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./App/screens/mainScreen/HomeScreen";
import ContactsScreen from "./App/screens/contactsScreen/ContactsScreen";
import ContractScreen from "./App/screens/contractScreen/ContractScreen";
import PaymentScreen from "./App/screens/paymentScreen/PaymentScreen";
import ChargingScreen from "./App/screens/chargingScreen/ChargingScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contract" element={<ContractScreen/>}/>
        <Route path="/contacts" element={<ContactsScreen/>}/>
        <Route path="/payment" element={<PaymentScreen/>}/>
        <Route path="/charging" element={<ChargingScreen/>}/>
        <Route path="/" element={<HomeScreen/>}/>
      </Routes>
    </Router>

  );
}

export default App;
