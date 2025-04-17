import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.friendItem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
