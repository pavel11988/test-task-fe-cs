export interface ILoginUser {
  email: string;
  id: number;
}

export interface ILoginRes {
  accessToken: string;
  user: ILoginUser;
}
