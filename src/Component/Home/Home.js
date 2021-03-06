import React from "react";
import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h1> this is murad friend: {friends.length} </h1>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Home;
