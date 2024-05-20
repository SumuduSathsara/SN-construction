
import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  mobile: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
