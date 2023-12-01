import { useState } from "react";
import { ButtonComp } from "./ButtonComp";

export function FormSplitBill({ onSplitbill, friend }) {
  const [billvalue, setBillvalue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const paidByFriend = billvalue ? billvalue - yourExpense : "";
  const [paidBY, setPaidBY] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!billvalue || !yourExpense) return;
    onSplitbill(paidBY === "user" ? paidByFriend : -yourExpense);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-split-bill">
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        value={billvalue}
        onChange={(e) => setBillvalue(e.target.value)}
        type="number"
      ></input>
      <label>🧍‍♀️ Your expense</label>
      <input
        type="number"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
      ></input>
      <label>👫 {friend.name}'s expense</label>
      <input value={paidByFriend} disabled type="number"></input>
      <label>🤑 Who is paying the bill</label>
      <select value={paidBY} onChange={(e) => setPaidBY(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <ButtonComp>Split Bill</ButtonComp>
    </form>
  );
}
