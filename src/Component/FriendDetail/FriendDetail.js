import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <div>
      <h1> here is friend detail: {friendId} </h1>
      <p>{friend.name}</p>
      <p>{friend.email}</p>
    </div>
  );
};

export default FriendDetail;
