import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainScreen from "./App/mainScreen/MainScreen";
import ContactsScreen from "./App/contactsScreen/ContactsScreen";
import ContractScreen from "./App/contractScreen/ContractScreen";
import ChargingScreen from "./App/chargingScreen/ChargingScreen";
import MainOverload from "./components/overload-page/MainOverload";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Layout from "./components/layout/Layout";
import BackToStation from "./components/backToStation/BackToStation";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/contract" element={<ContractScreen />} />
            <Route path="/contacts" element={<ContactsScreen />} />
            <Route path="/charging/:id" element={<ChargingScreen />} />
            <Route path="/overload/:id" element={<MainOverload />} />
            <Route
              path="/:id"
              element={
                <PrivateRoute>
                  <MainScreen />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<BackToStation />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
