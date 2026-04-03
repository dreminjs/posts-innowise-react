import { useGetMeQuery } from "@modules/Users";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export const ProtectedRoutesProvider = () => {
  const navigate = useNavigate();
  const { data } = useGetMeQuery();

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data]);

  return (
    <>
      <Outlet />
    </>
  );
};
