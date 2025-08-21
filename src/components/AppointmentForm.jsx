import { useState } from "react";

function AppointmentForm({ onAddAppointment }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación mínima: no aceptar fechas pasadas
    const today = new Date().toISOString().split("T")[0];
    if (formData.date < today) {
      alert("La fecha no puede ser anterior a hoy");
      return;
    }

    // Pasamos la cita al padre
    onAddAppointment({ id: Date.now(), ...formData });

    // Reiniciamos el formulario
    setFormData({ name: "", phone: "", date: "", time: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Nueva Cita</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre del paciente"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <button type="submit">Agendar Cita</button>
    </form>
  );
}

export default AppointmentForm;
