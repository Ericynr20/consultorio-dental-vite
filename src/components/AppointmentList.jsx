function AppointmentList({ appointments }) {
  return (
    <div>
      <h2>Citas Registradas</h2>
      {appointments.length === 0 ? (
        <p>No hay citas agendadas aún.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <strong>Paciente:</strong> {appointment.name} <br />
              <strong>Teléfono:</strong> {appointment.phone} <br />
              <strong>Fecha:</strong> {appointment.date} a las {appointment.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentList;
