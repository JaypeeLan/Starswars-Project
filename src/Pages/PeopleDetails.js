import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import profileImg from "../Images/people.png";
import useFetch from "../shared/hooks/useFetch";
import { useLogin } from "../shared/hooks/useLogin";
import { ImageProfile } from "./Styles";

const PeopeleDetails = () => {
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
            <h3>{data?.name}</h3>
            <p className="text-capitalize">Gender: {data?.gender}</p>
            <p className="text-capitalize">Year of Birth: {data?.birth_year}</p>
            <p className="text-capitalize">Skin color: {data?.skin_color}</p>
            <p className="text-capitalize">Height: {data?.height}</p>
          </div>
        </ImageProfile>
      )}
    </AppLayout>
  );
};
export default PeopeleDetails;