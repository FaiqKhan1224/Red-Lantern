import mongoose from 'mongoose';
import { Reservation } from '../models/index.js';

// Cached across invocations so serverless functions (Vercel) reuse one connection.
let cached = globalThis.__rlMongo || (globalThis.__rlMongo = { conn: null, promise: null });

export async function connectDB() {
  if (cached.conn) return cached.conn;
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/red_lantern';
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, { serverSelectionTimeoutMS: 8000, bufferCommands: false, maxPoolSize: 5 })
      .then(async (m) => {
        console.log('MongoDB connected');
        // Older versions used the status "approved"; it is now "confirmed"
        await Reservation.updateMany({ status: 'approved' }, { status: 'confirmed' }).catch(() => {});
        return m;
      })
      .catch((err) => {
        cached.promise = null;
        console.error('Could not connect to MongoDB. Check MONGO_URI.', err.message);
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
