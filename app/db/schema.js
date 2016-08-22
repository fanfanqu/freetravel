import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
});

const User = mongoose.model('User', userSchema);

export {
    User
};
