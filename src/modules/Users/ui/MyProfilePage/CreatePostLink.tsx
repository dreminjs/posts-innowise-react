import { Link } from "react-router";
import styles from "./CreatePostLink.module.css";

export const CreatePostLink = () => {
  return (
    <Link to="/posts/create" className={styles.createPostLink}>
      Create Post
    </Link>
  );
};
