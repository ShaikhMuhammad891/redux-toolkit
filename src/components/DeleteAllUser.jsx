import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../store/slices/UserSlice";
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteAllUsers());
  };
  return (
    <div>
      <button onClick={deleteAll}>Delete All</button>
    </div>
  );
};
