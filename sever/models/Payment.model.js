import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    ccnumber: String,
    ccexp: String,
    cccvv: String,
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;