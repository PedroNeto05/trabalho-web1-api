export interface ICreatePostParams {
  title: string;
  body: string;
}

export interface ICreatePostUseCase {
  execute(createPostParams: ICreatePostParams): Promise<void>;
}
