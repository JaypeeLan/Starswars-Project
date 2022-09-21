import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Table from "../components/Table";
import useFetch from "../shared/hooks/useFetch";
import { starshipColumn } from "../shared/Data";

function StarShips() {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const { data, error, isLoading } = useFetch(
    "https://swapi.dev/api/starships"
  );

  useEffect(() => {
    if (data) {
      const filtered = data?.results.map((item, index) => {
        const { name, model, starship_class, passengers, length, films } = item;
        return {
          id: index + 1,
          name,
          model,
          starship_class,
          passengers,
          length,
          films,
        };
      });
      setRowData(filtered);
    }
  }, [data]);

  return (
    <AppLayout>
      {!!error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table
          tableTitle="Starships"
          {...{
            columns: starshipColumn,
            rows: rowData,
          }}
          rowOnClick={(row) => navigate(`/starships/${row.id}`)}
        />
      )}
    </AppLayout>
  );
}

export default StarShips;
