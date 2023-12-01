import { useState } from "react";
import { ButtonComp } from "./ButtonComp";

export function AddFriendForm({ onAddfriend }) {
  const [name, setNAme] = useState("");
  const [image, setImage] = useState("");
  const id = crypto.randomUUID();
  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || image === "") return;
    let newFriend = {
      name,
      id,
      image: `https://i.pravatar.cc/48?u=${id}`,
      balance: 0,
    };
    onAddfriend(newFriend);
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="form-add-friend">
        <label>🤦‍♂️Friend Name</label>
        <input
          onChange={(e) => setNAme(e.target.value)}
          value={name}
          type="text"
        ></input>
        <label>🌄image Url</label>
        <input onChange={(e) => setImage(e.target.value)} value={image}></input>
        <ButtonComp>Add</ButtonComp>
      </form>
    </>
  );
}
