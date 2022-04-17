import React, { Component } from 'react';
import './App.css';

  const Item = ({ user }) => (
    <div className="userInfo">
      <h1>{user.name}</h1>
      <p>Informacje o użytkowniku</p>
      <p>Wiek użytkownika: <strong>{user.age}</strong></p>
      <p>Płeć użytkownika: {user.sex}</p>
    </div>
  )
  class ListItems extends Component {
    state = {
      select: "all",
    }
  
    handleUsersFilter(option) {
      this.setState({
        select: option
      })
  
    }
  
    usersList = () => {
      let users = this.props.data.users;
      switch (this.state.select) {
        case "all":
          return users.map(user => <Item user={user} key={user.id} />)
        case "female":
          users = users.filter(user => user.sex === "female");
          return users.map(user => <Item user={user} key={user.id} />)
        case "male":
          users = users.filter(user => user.sex === "male");
          return users.map(user => <Item user={user} key={user.id} />)
        default:
          return "coś się zepsuło"
  
      }
    }
    render() {
      return (
        <div>
          <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
          <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
          <button onClick={this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
          {this.usersList()}
          <hr/>
        </div>
      )
    }
  }
  
export default ListItems;
