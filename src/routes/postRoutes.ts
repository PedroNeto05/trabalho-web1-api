import { Router } from 'express';
import {
  createPostController,
  deletePostController,
  getAllPostsController,
  updatePostController,
} from '..';

export const postRoutes = Router();

postRoutes.post('/', (req, res) => {
  createPostController.handle(req, res);
});

postRoutes.get('/', (req, res) => {
  getAllPostsController.handle(req, res);
});

postRoutes.put('/:id', (req, res) => {
  updatePostController.handle(req, res);
});

postRoutes.delete('/:id', (req, res) => {
  deletePostController.handle(req, res);
});
