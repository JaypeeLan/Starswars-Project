import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import AppLayout from "../components/AppLayout";
import Card from "../components/CardWidget";
import Table from "../components/Table";
import useFetch from "../shared/hooks/useFetch";
import { cardInfo, filmsColumn } from "../shared/Data";
import { useLogin } from "../shared/hooks/useLogin";

const Dashboard = () => {
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetch("https://swapi.dev/api/films");
  const { loggedIn } = useLogin();
  const location = useLocation();

  useEffect(() => {
    if (data) {
      const filtered = data?.results.map((item, index) => {
        const {
          title,
          release_date,
          director,
          producer,
          episode_id,
          characters,
        } = item;
        return {
          id: index + 1,
          title,
          release_date,
          director,
          producer,
          episode_id,
          characters,
        };
      });
      setRowData(filtered);
    }
  }, [data]);

  if (!loggedIn)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return (
    <AppLayout>
      <div className="row">
        {cardInfo.map((item) => (
          <div key={item} className="col-md-6 col-lg-3 mb-5">
            <Card
              cardTitle={item.title}
              fill={item.fill}
              number={item.number}
              desc={item.desc}
            />
          </div>
        ))}
      </div>

      {!!error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table
          {...{
            columns: filmsColumn,
            rows: rowData,
            tableTitle: "Films",
            rowOnClick: (row) => navigate(`/films/${row.id}`),
          }}
        />
      )}
    </AppLayout>
  );
};
export default Dashboard;
