import React, { useState } from "react";
import Card from "./components/UI/Card";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <Card>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Card>
  );
}

export default App;
