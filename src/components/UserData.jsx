import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import { fakeDate } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../store/slices/UserSlice";

const UserData = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.name;
  });

  // add user
  const addData = (name) => {
    console.log("add data", name);
    dispatch(addUser(name));
  };

  // delete user
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <>
      <h1>Data of the User!</h1>
      <button onClick={() => addData(fakeDate())}>Add new user</button>
      <ul>
        {data.map((user, id) => {
          return (
            <li key={id} style={{ listStyle: "none" }}>
              {user} <button onClick={() => handleDelete(id)}> Delete</button>
            </li>
          );
        })}
      </ul>
      <hr />

      <DeleteAllUser />
    </>
  );
};

export default UserData;
