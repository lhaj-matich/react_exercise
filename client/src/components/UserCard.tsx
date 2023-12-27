import {
  Card,
  CardBody,
  Text,
  Avatar,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { User } from "./UsersList";

interface UserCardProps {
  user: User;
}

const UserCard = ({user}: UserCardProps) => {
  return (
    <Card bgColor="#d1d1d1" width="380px" height="320px" display="flex" alignItems="center" margin={5}>
      <HStack>
        <Avatar
          bgColor="#c1c1c1"
          name={`${user.firstName} ${user.lastName}`}
          src={user.image}
          marginTop={5}
          width="120px"
          height="120px"
        />
        <VStack alignItems="flex-start" gap={0}>
          <Heading fontSize={24} marginY={3}>
          {`${user.firstName} ${user.lastName}`}
          </Heading>
          <Text fontSize={18} color="#292F36">
            @{user.username}
          </Text>
        </VStack>
      </HStack>
      <CardBody textAlign="left">
        <Text>Gender: {user.gender}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>University: {user.university}</Text>
        <Text>Bloodgroup: {user.bloodGroup}</Text>
      </CardBody>
    </Card>
  );
};

export default UserCard;
