import { ButtonComp } from "./ButtonComp";

export function Friends({ selectedFriend, onSelect, friend }) {
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      <p className="green">
        {" "}
        {friend.balance > 0 && `${friend.name} owes you ${friend.balance}$`}
      </p>
      <p className="red">
        {" "}
        {friend.balance < 0 &&
          `you owes ${friend.name} ${Math.abs(friend.balance)}$`}
      </p>
      <p>{friend.balance === 0 && `you and ${friend.name} are even.`}</p>
      <ButtonComp onClick={(e) => onSelect(friend)}>
        {selectedFriend?.id !== friend.id ? "Select" : "close"}
      </ButtonComp>
    </li>
  );
}
