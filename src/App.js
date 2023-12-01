import { useState } from "react";
import { ButtonComp } from "./components/ButtonComp";
import { AddFriendForm } from "./components/AddFriendForm";
import { FormSplitBill } from "./components/FormSplitBill";
import { FriendsList } from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Bhanu",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Ankit",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Aditya",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [toggle, setToggle] = useState(false);
  const [selectedFriend, setFriend] = useState(null);

  function handleBillSPlit(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setFriend(null);
  }
  function handleSelect(friend) {
    setFriend((curr) => (curr?.id === friend.id ? null : friend));
  }

  function handdleToggle() {
    setToggle(!toggle);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setToggle(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          selectedFriend={selectedFriend}
          onSelect={handleSelect}
          friend={friends}
        />
        {toggle && <AddFriendForm onAddfriend={handleAddFriend} />}
        <ButtonComp onClick={handdleToggle}>
          {toggle ? "Close" : "Add friend"}
        </ButtonComp>
      </div>
      {selectedFriend && (
        <FormSplitBill onSplitbill={handleBillSPlit} friend={selectedFriend} />
      )}
    </div>
  );
}
