import * as mongoose from 'mongoose';

export interface Comments extends mongoose.Document {
  cDate;
  answerId;
  cContent;
  userId;
  likeCount;
}

let commentsSchema = new mongoose.Schema ({
  cDate: {
    type: String,
    required: true
  },
  answerId: {
    type: String,
    required: true
  },
  cContent: {
    type: String,
    required: true
  },
  userId: {
    type: String
  },
  likeCount: {
    type: Number
  }
});

export default mongoose.model<Comments>('Comments', commentsSchema);
