import { useState } from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = (newAppointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  return (
    <div className="container">
      <h1>Consultorio Dental</h1>
      <div className="content-wrapper">
        <AppointmentForm onAddAppointment={handleAddAppointment} />
        <AppointmentList appointments={appointments} />
      </div>
    </div>
  );
}

export default App;
