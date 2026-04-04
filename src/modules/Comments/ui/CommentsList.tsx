import { FC } from "react";
import { IComment } from "../model/comments.interface";
import { CommentsItem } from "./CommentsItem";

interface ICommentsListProps {
  comments: IComment[];
}

export const CommentsList: FC<ICommentsListProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentsItem key={comment.id} {...comment} />
      ))}
    </ul>
  );
};
