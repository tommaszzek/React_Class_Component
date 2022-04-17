import React from 'react';
const UsersList =props => {
  console.log(props.users);

  const users = props.users.map(user => (
    <div key={user.login.uuid}>
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
      <img src={user.picture.thumbnail} alt=" dane z bazy"/>
    </div>
  ))
  return (
    <ul>
      {users}
    </ul>
  );
}

export default UsersList;