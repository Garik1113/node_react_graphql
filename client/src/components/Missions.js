import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import MissionItem from "./MissionItem";

const GET_MISSIONS = gql`
  query Missions {
    missions {
      mission_name
      mission_id
    }
  }
`;
const Missions = () => {
  const { loading, error, data } = useQuery(GET_MISSIONS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  return (
    <div className='container'>
      {data.missions.map(({ mission_name, mission_id }) => (
        <MissionItem
          mission_name={mission_name}
          mission_id={mission_id}
          key={mission_id}
        />
      ))}
    </div>
  );
};
export default Missions;
