import * as express from 'express';
import Comment from '../models/comment';

let router = express.Router();

router.post('/', (req, res) => {
  let newComment = new Comment();
  newComment.cDate = req.body.cDate;
  newComment.answerId = req.body.answerId;
  newComment.aContent = req.body.aContent;
  newComment.userId = req.body.userId;
  newComment.likeCount = req.body.likeCount;
  newComment.save().then((createdComment) => res.json(createdComment));
});

router.post('/:id', (req, res) => {
  Comment.findById(req.params.id).then((foundComment) => {
    foundComment.cDate = req.body.cDate;
    foundComment.answerId = req.body.answerId;
    foundComment.aContent = req.body.aContent;
    foundComment.userId = req.body.userId;
    foundComment.likeCount = req.body.likeCount;
    foundComment.save().then((savedComment) => res.json(savedComment));
  });
});

router.delete('/:id', (req, res) => {
  Comment.remove({_id: req.params.id})
  .then((deletedComment) => res.json(deletedComment))
  .catch((err) => res.json(err));
});

export default router;
