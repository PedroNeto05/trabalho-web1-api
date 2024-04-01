import { CreatePostController } from './controllers/postsControllers/CreatePostController/CreatePostController';
import { DeletePostController } from './controllers/postsControllers/DeletePostController/DeletePostController';
import { GetAllPostsController } from './controllers/postsControllers/GetAllPostsController/GetAllPostsController';
import { UpdatePostController } from './controllers/postsControllers/UpdatePostController/UpdatePostController';
import { Post } from './entities/Post';
import { InMemoryCreatePostRepository } from './repositories/postsRepository/CreatePostRepository/InMemoryCreatePostRepository';
import { InMemoryDeletePostRepository } from './repositories/postsRepository/DeletePostRepository/InMemoryDeletePostRepository';
import { InMemoryGetAllPostsRepository } from './repositories/postsRepository/GetAllPostsRepository/InMemoryGetAllPostsRepository';
import { InMemoryGetPostByIdRepository } from './repositories/postsRepository/GetPostByIdRepository/InMemoryGetPostByIdRepository';
import { InMemoryGetPostByTitleRepository } from './repositories/postsRepository/GetPostByTitleRepository/InMemoryGetPostByTitleRepository';
import { InMemoryUpdatePostRepository } from './repositories/postsRepository/UpdatePostRepository/InMemoryUpdatePostRepository';
import { CreatePostUseCase } from './useCase/postsUseCase/CreatePostUseCase/CreatePostUseCase';
import { DeletePostUseCase } from './useCase/postsUseCase/DeletePostUseCase/DeletePostUseCase';
import { GetAllPostsUseCase } from './useCase/postsUseCase/GetAllPostsUseCase/GetAllPostsUseCase';
import { UpdatePostUseCase } from './useCase/postsUseCase/UpdatePostUseCase/UpdatePostUseCase';

const inMemoryDataBase: Post[] = [];

const inMemoryGetPostByIdRepository = new InMemoryGetPostByIdRepository(
  inMemoryDataBase,
);
const inMemoryDeletePostRepository = new InMemoryDeletePostRepository(
  inMemoryDataBase,
);
const deletePostUseCase = new DeletePostUseCase(
  inMemoryDeletePostRepository,
  inMemoryGetPostByIdRepository,
);
export const deletePostController = new DeletePostController(deletePostUseCase);

const inMemoryUpdatePostRepository = new InMemoryUpdatePostRepository(
  inMemoryDataBase,
);
const updatePostUseCase = new UpdatePostUseCase(
  inMemoryUpdatePostRepository,
  inMemoryGetPostByIdRepository,
);
export const updatePostController = new UpdatePostController(updatePostUseCase);

const inMemoryGetAllPostsRepository = new InMemoryGetAllPostsRepository(
  inMemoryDataBase,
);
const getAllPostsUseCase = new GetAllPostsUseCase(
  inMemoryGetAllPostsRepository,
);
export const getAllPostsController = new GetAllPostsController(
  getAllPostsUseCase,
);

const inMemoryGetPostByTitleRepository = new InMemoryGetPostByTitleRepository(
  inMemoryDataBase,
);
const inMemoryCreatePostRepository = new InMemoryCreatePostRepository(
  inMemoryDataBase,
);
const createPostUseCase = new CreatePostUseCase(
  inMemoryCreatePostRepository,
  inMemoryGetPostByTitleRepository,
);
export const createPostController = new CreatePostController(createPostUseCase);
