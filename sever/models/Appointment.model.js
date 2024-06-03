import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    nic: String,
    phone: String,
    city: String,
    date: Date,
    appointmentType: String,
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  });

  const Appointment = mongoose.model('Appointment', appointmentSchema);

  export default Appointment;