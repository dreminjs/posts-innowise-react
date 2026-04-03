export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface IUsersStore {
  isLoading: boolean;
  isError: boolean;
  currentUser: IUser | null;
}
