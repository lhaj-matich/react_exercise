import axios from "axios";
import { useEffect, useState } from "react";
import { Grid, Spinner } from "@chakra-ui/react";

import UserCard from "./UserCard";
import PageButton from "./PageButton";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
  username: string;
  university: string;
  bloodGroup: string;
}

const UsersList = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const pageLimit = 6;

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  if (users && users.length === 0)
    return <Spinner boxSize={150} color="#fff" marginTop={250} />
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {users
          .slice(pageLimit * page - pageLimit, pageLimit * page)
          .map((item, index) => {
            return <UserCard key={index} user={item} />;
          })}
      </Grid>
      <PageButton
        page={page}
        onSetPage={(page) => setPage(page)}
        max={users.length}
      />
    </>
  );
};

export default UsersList;
