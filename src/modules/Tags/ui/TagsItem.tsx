import { FC } from "react";
import { ITag } from "../model/tags.interface";
import styles from "./Tags.module.css";
type TTagsItemProps = ITag;

export const TagsItem: FC<TTagsItemProps> = ({ name, slug }) => {
  return (
    <li className={styles.tagListItem}>
      <button>
        <span>{name}</span>
      </button>
    </li>
  );
};
