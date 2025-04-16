import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.profileAbout}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileUserName}>{name}</p>
        <p className={css.profileUserTag}>@{tag}</p>
        <p className={css.profileUserLoc}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
