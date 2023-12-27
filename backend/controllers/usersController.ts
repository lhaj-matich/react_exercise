import { NextFunction, Request, Response } from "express";
import apiClient from "../utils/apiClient";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const search = req.query.search as string;
  try {
    const usersClient = new apiClient<any>("/users");
    const response = await usersClient.getData();
    const users: User[] = response.data.users;
    const filteredUsers: User[] =
      (search && search.length > 0)
        ? users.filter((user) => user.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        : users;
    res.status(200).json({
      count: filteredUsers.length,
      users: filteredUsers,
    });
  } catch (e: any) {
    res.status(200).json({
      status: "failure",
      message: e.message,
    });
  }
};
