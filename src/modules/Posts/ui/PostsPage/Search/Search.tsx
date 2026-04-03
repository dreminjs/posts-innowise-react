import { TagsList } from "@modules/Tags";

export const Search = () => {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <TagsList />
    </div>
  );
};
