import mongoose, { Schema, Document } from 'mongoose';

export interface ISubject extends Document {
  title: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name or image path
  order: number;
}

const SubjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'Book' },
  order: { type: Number, default: 0 },
});

export default mongoose.models.Subject || mongoose.model<ISubject>('Subject', SubjectSchema);
