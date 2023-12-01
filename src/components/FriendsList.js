import { Friends } from "./Friends";

export function FriendsList({ selectedFriend, friend, onSelect }) {
  return (
    <ul>
      {friend.map((friend) => (
        <Friends
          selectedFriend={selectedFriend}
          key={friend.id}
          onSelect={onSelect}
          friend={friend}
        />
      ))}
    </ul>
  );
}
