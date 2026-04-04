import { FC } from "react";
import { IComment } from "../model/comments.interface";
import styles from "./Comments.module.css";
import { Link } from "react-router";

type TCommentsItemProps = IComment;

export const CommentsItem: FC<TCommentsItemProps> = ({ user, body, likes }) => {
  const initials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={styles.card}>
      <Link to={`/user/${user.id}`} className={styles.header}>
        <div className={styles.avatar}>{initials}</div>
        <div>
          <p className={styles.fullName}>{user.fullName}</p>
          <p className={styles.username}>@{user.username}</p>
        </div>
      </Link>
      <p className={styles.body}>{body}</p>
      <div className={styles.footer}>
        <span className={styles.likes}>♥ {likes}</span>
      </div>
    </div>
  );
};
