import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import UserList from "./UserList";
import rug from "../api/rug";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount = async () => {
    const response = await rug.get("api", {
      params: {
        results: 1000
      }
    });
    console.log(response.data.results);
    this.setState({ users: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <Menu>
          <Menu.Item>
            <strong>Infinite Scroll of Random Users</strong>
          </Menu.Item>
        </Menu>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
