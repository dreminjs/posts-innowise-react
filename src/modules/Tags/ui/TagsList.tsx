import { useGetTagsQuery } from "../api/queries";
import { ITag } from "../model/tags.interface";
import styles from "./Tags.module.css";
import { TagsItem } from "./TagsItem";

export const TagsList = () => {
  const { data, isLoading } = useGetTagsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>Ничего не найдено.</div>;
  }

  return (
    <ul className={styles.tagsList}>
      {data.map((tag: ITag) => (
        <TagsItem key={tag.slug} {...tag} />
      ))}
    </ul>
  );
};
