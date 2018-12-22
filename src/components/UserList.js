import React from "react";
import "./UserList.css";
import { Header, Item } from "semantic-ui-react";
import UserCard from "./UserCard";

const UserList = props => {
  const users = props.users.map(user => {
    return <UserCard user={user} key={user.login.uuid} />;
  });
  return (
    <React.Fragment>
      <Header as="h1" style={{ marginBottom: "3rem" }}>
        Current list of users
      </Header>

      <Item.Group className="user-grid">{users}</Item.Group>
    </React.Fragment>
  );
};

export default UserList;
