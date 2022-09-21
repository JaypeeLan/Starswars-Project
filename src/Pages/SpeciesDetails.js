import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import profileImg from "../Images/species.png";
import useFetch from "../shared/hooks/useFetch";
import { useLogin } from "../shared/hooks/useLogin";
import { ImageProfile } from "./Styles";

const SpeciesDetails = () => {
  const location = useLocation();
  const { data, error, isLoading } = useFetch(
    `https://swapi.dev/api${location.pathname}`
  );
  console.log(data);
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
        <ImageProfile className="d-flex">
          <img src={profileImg} alt="profileImg" />
          <div>
            <h3>{data?.name}</h3>{" "}
            <p className="text-capitalize">Destination: {data?.designation}</p>
            <p className="text-capitalize">Language: {data?.language}</p>
            <p className="text-capitalize">Eye colors: {data?.eye_colors}</p>
            <p className="text-capitalize">
              Average Lifespan: {data?.average_lifespan}
            </p>
          </div>
        </ImageProfile>
      )}
    </AppLayout>
  );
};
export default SpeciesDetails;