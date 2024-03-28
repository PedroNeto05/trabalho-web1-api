export interface IUpdatePostParams {
  title: string;
  body: string;
}

export interface IUpdatePostUseCase {
  execute(updatePostParams: IUpdatePostParams): Promise<void>;
}
