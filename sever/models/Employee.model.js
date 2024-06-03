
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    joinDate: Date,
    role: String,
    phoneNumber: String,
    address: String,
  });
  
  const Employee = mongoose.model('Employee', employeeSchema);

  export default Employee;