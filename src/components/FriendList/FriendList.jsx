import clsx from "clsx";
import css from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.friendItem}>
            <div>
              <img
                className={css.friendImg}
                src={avatar}
                alt="Avatar"
                width="48"
              />
              <p className={css.friendName}>{name}</p>
              <p
                className={clsx(
                  css.friendStatus,
                  isOnline ? css.online : css.offline
                )}
              >
                {isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
