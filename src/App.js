import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/contact";
import Development from "./components/development";
import Appointment from "./components/appointment";
import Notification from "./components/notification";
import { Row, Col } from "antd";

const App = () => {
  const [contact, setContact] = useState(false);
  const [development, setDevelopment] = useState(false);
  const [appointment, SetAppointment] = useState(false);
  const [userData, setUserData] = useState({});

  const getContactData = (data) => {
    setContact(true);
    setUserData(data);
  };

  const getDevelopmentData = (data) => {
    setDevelopment(true);
    const step2 = Object.assign(userData, data);
    setUserData(step2);
  };

  const getAppointmentData = (data) => {
    SetAppointment(true);
    const step3 = Object.assign(userData, data);
    setUserData(step3);
    console.log(userData);
  };

  let content;
  if (contact === false) {
    content = <Contact handleSubmit={getContactData} />;
  } else if (development === false) {
    content = <Development handleSubmit={getDevelopmentData} />;
  } else if (appointment === false) {
    content = <Appointment handleSubmit={getAppointmentData} />;
  } else {
    content = <Notification />;
  }

  return (
    <div className="container mt-5">
      <div className="col-12 col-md-8 offset-md-2">{content}</div>
    </div>
  );
};

export default App;
