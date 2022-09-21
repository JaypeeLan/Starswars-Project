import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Table from "../components/Table";
import useFetch from "../shared/hooks/useFetch";
import { peopleColumn } from "../shared/Data";
import { useLogin } from "../shared/hooks/useLogin";

function People() {
  const [rowData, setRowData] = useState([]);
  const { data, error, isLoading } = useFetch("https://swapi.dev/api/people");
  const { loggedIn } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (data) {
      const filtered = data?.results.map((item, index) => {
        const { birth_year, gender, height, name, created, hair_color } = item;
        return {
          id: index + 1,
          birth_year,
          gender,
          height,
          name,
          created,
          hair_color,
        };
      });
      setRowData(filtered);
    }
  }, [data]);

  if (!loggedIn)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return (
    <AppLayout>
      {!!error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table
          tableTitle="People"
          {...{
            columns: peopleColumn,
            rows: rowData,
          }}
          rowOnClick={(row) => navigate(`/people/${row.id}`)}
        />
      )}
    </AppLayout>
  );
}

export default People;
