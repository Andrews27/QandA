import * as mongoose from 'mongoose';

export interface Comment extends mongoose.Document {
  cDate;
  answerId;
  aContent;
  userId;
  likeCount;
}

let commentSchema = new mongoose.Schema ({
  cDate: {
    type: String,
    required: true
  },
  answerId: {
    type: String,
    required: true
  },
  aContent: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  likeCount: {
    type: Number
  }
});

export default mongoose.model<Comment>('Comment', commentSchema);
