export interface IUpdatePostParams {
  id: string;
  title: string;
  body: string;
}

export interface IUpdatePostUseCase {
  execute(updatePostParams: IUpdatePostParams): Promise<void>;
}
