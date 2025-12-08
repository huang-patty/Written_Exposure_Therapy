import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Prevents duplicate emails
    trim: true,
    lowercase: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent recompiling model if it already exists
export default mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);