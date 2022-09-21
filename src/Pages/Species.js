import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Table from "../components/Table";
import useFetch from "../shared/hooks/useFetch";
import { speciesColumn } from "../shared/Data";
import { useLogin } from "../shared/hooks/useLogin";

function Species() {
  const [rowData, setRowData] = useState([]);
  const { data, error, isLoading } = useFetch("https://swapi.dev/api/species");
  const { loggedIn } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (data) {
      const filtered = data?.results.map((item, index) => {
        const {
          classification,
          gender,
          eye_colors,
          average_height,
          name,
          created,
          hair_colors,
        } = item;
        return {
          id: index + 1,
          classification,
          gender,
          average_height,
          name,
          created,
          hair_colors,
          eye_colors,
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
          tableTitle="Species"
          {...{
            columns: speciesColumn,
            rows: rowData,
          }}
          rowOnClick={(row) => navigate(`/species/${row.id}`)}
        />
      )}
    </AppLayout>
  );
}

export default Species;
