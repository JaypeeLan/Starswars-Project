import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import profileImg from "../Images/films.png";
import useFetch from "../shared/hooks/useFetch";
import { useLogin } from "../shared/hooks/useLogin";
import { ImageProfile } from "./Styles";

const FilmsDetails = () => {
  const location = useLocation();
  const { data, error, isLoading } = useFetch(
    `https://swapi.dev/api${location.pathname}`
  );
  const { loggedIn } = useLogin();

  if (!loggedIn)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return (
    <AppLayout>
      {!!error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <ImageProfile>
          <img src={profileImg} alt="profileImg" />
          <div>
            <h3>{data?.title}</h3> <p>Director: {data?.director}</p>
            <p>Producer: {data?.producer}</p>
            <p>Release Date: {data?.release_date}</p>
          </div>
        </ImageProfile>
      )}
    </AppLayout>
  );
};
export default FilmsDetails;
