export interface CreateUserDto {
  username: string;
  password: string;
}

export interface UpdateUserDto {
  id: string;
  password?: string;
  enable?: boolean;
  token?: string | null;
}
