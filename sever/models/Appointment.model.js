// models/Appointment.model.js
import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  nic: String,
  phone: Number,
  city: String,
  date: Date,
  appointmentType: String,
  ccnumber: Number,
  ccexp: String,
  cccvv: Number,
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;
