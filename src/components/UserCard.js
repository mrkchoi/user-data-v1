import React, { Component } from "react";
import { Item } from "semantic-ui-react";

class UserCard extends Component {
  componentDidMount = () => {
    // console.log(this.props.user.picture.thumbnail);
  };
  render() {
    const { user } = this.props;
    return (
      <Item>
        <Item.Image size="tiny" src={user.picture.large} />
        <Item.Content>
          <Item.Header>
            {user.name.first} {user.name.last}
          </Item.Header>
          <Item.Meta>
            <span className="email">{user.email}</span>
          </Item.Meta>
          <Item.Meta>
            <span className="userName">@{user.login.username}</span>
          </Item.Meta>
          <Item.Meta>
            <span className="age">{user.dob.age} years old</span>
          </Item.Meta>
          <Item.Description />
        </Item.Content>
      </Item>
    );
  }
}

export default UserCard;
