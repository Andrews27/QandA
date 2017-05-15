import * as mongoose from 'mongoose';

export interface Question extends mongoose.Document {
  qTitle;
  qContent;
  qDate;
  userID;
  lessonID;
  clickCount;
}

let questionSchema = new mongoose.Schema ({
  qTitle: {
    type: String,
    required: true
  },
  qContent: {
    type: String,
    required: true
  },
  qDate: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  lessonID: {
    type: String,
    required: true
  },
  clickCount: {
    type: Number,
    required: true
  },
});

export default mongoose.model<Question>('Question', questionSchema);
