import { useState } from "react";
import { useGetCommentsByPostIdQuery } from "../../api/queries";

export const useGetCommentsByPostId = (postId: number) => {
  const limit = 5;

  const { data, isLoading, isError } = useGetCommentsByPostIdQuery(postId);

  const [skip, setSkip] = useState(0);

  const handleChangePage = (page: number) => {
    setSkip(page * limit);
  };

  return {
    data,
    isLoading,
    isError,
    skip,
    onChangePage: handleChangePage,
    total: data?.total,
    limit,
  };
};
