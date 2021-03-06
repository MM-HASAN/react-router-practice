import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  //console.log(props);
  const FriendStyle = {
    border: "2px solid red",
    borderRadius: "25px",
    backgroundColor: "blue",
    padding: "20px 50px",
    margin: "20px",
  };
  return (
    <div style={FriendStyle}>
      <p style={{ color: "red", fontSize: "25px" }}> name: {name}</p>
      <p style={{ color: "black", fontSize: "20px" }}> email: {email}</p>
      <b style={{ color: "red" }}>
        <Link to={`/friend/${id}`}>
          {" "}
          <Button>This is user: {id}</Button>
        </Link>
      </b>
    </div>
  );
};

export default Friend;
