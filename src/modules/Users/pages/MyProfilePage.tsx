import { useAppSelector } from "@app/store/hooks";
import { UserCard } from "../ui/UserCard/UserCard";
import { UserPosts, ConfirmDeletionModal } from "@modules/Posts";
import { CreatePostLink } from "../ui/MyProfilePage/CreatePostLink";

export default () => {
  const currentUser = useAppSelector((state) => state.users.currentUser);

  if (!currentUser) return <div>Вас не существует :(</div>;

  return (
    <div>
      <UserCard {...currentUser} id={currentUser?.id} />
      <CreatePostLink />
      <UserPosts userId={Number(currentUser?.id)} />
      <ConfirmDeletionModal />
    </div>
  );
};
