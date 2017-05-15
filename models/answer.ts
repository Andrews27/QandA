import * as mongoose from 'mongoose';

interface Answer extends mongoose.Document{
  aDate;
  questionId;
  aContent;
  userId;
  usefulCount;
  bestAnswer;
}

let answerSchema = new mongoose.Schema({
  aDate: {
    type: String,
    required: true
  },
  questionId: {
    type: String,
    required: true
  },
  aContent: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required:true
  },
  usefulCount: Number,
  bestAnswer: Boolean
});

export default mongoose.model<Answer>('Answer', answerSchema);
