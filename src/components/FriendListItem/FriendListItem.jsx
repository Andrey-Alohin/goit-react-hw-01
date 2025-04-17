import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, isOnline ? css.online : css.offline)}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
