import { CreatePostController } from './controllers/postsControllers/CreatePostController/CreatePostController';
import { DeletePostController } from './controllers/postsControllers/DeletePostController/DeletePostController';
import { GetAllPostsController } from './controllers/postsControllers/GetAllPostsController/GetAllPostsController';
import { UpdatePostController } from './controllers/postsControllers/UpdatePostController/UpdatePostController';
import { CreatePostUseCase } from './useCase/postsUseCase/CreatePostUseCase/CreatePostUseCase';
import { DeletePostUseCase } from './useCase/postsUseCase/DeletePostUseCase/DeletePostUseCase';
import { GetAllPostsUseCase } from './useCase/postsUseCase/GetAllPostsUseCase/GetAllPostsUseCase';
import { UpdatePostUseCase } from './useCase/postsUseCase/UpdatePostUseCase/UpdatePostUseCase';

const deletePostUseCase = new DeletePostUseCase();
export const deletePostController = new DeletePostController(deletePostUseCase);

const updatePostUseCase = new UpdatePostUseCase();
export const updatePostController = new UpdatePostController(updatePostUseCase);

const getAllPostsUseCase = new GetAllPostsUseCase();
export const getAllPostsController = new GetAllPostsController(
  getAllPostsUseCase,
);

const createPostUseCase = new CreatePostUseCase();
export const createPostController = new CreatePostController(createPostUseCase);
