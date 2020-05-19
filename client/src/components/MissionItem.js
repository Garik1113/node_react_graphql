import React from "react";

const MissionItem = ({ mission_name, mission_id }) => (
  <div className='jumbotron'>
    <h4>{mission_name}</h4>
    <hr className='my-4' />
    <p className='lead'>
      <a
        className='btn btn-primary btn-lg'
        href={`/missions/${mission_id}`}
        role='button'
      >
        Learn more
      </a>
    </p>
  </div>
);

export default MissionItem;
