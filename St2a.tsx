import React, { Component } from "react";

type Props = {};

type Users = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  users: Users[];
};

export default class St2a extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async getUsers() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=20"
    );
    const data = await response.json();
    this.setState({ users: data });
  }

  componentDidMount(): void {
    this.getUsers();
  }

  delUser(usn: string) {
    let filteredUsers = this.state.users.filter((user) => {
      if (user.title != usn) {
        return true;
      }
    });

    // const update = [...this.state.users, obj]
    this.setState({ users: filteredUsers });
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.users.map((user) => {
            return (
              <li>
                {user.title}
                <button
                  onClick={() => {
                    this.delUser(user.title);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
