import { ConfirmDeletionModal } from "../ui/ConfirmDeletion/ConfirmDeletionModal";
import { Posts } from "../ui/PostsPage/Posts";

export default () => {
  return (
    <>
      <Posts />
      <ConfirmDeletionModal />
    </>
  );
};
