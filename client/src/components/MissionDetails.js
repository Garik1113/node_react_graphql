import React from "react";
import "./styles/bootstrap.min.css";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_MISSION_DETAILS = gql`
  query RootQuery($mission_Id: String) {
    mission(mission_Id: $mission_Id) {
      mission_name
      description
      website
    }
  }
`;

class MissionDetails extends React.Component {
  render() {
    const { mission_id } = this.props.match.params;

    return (
      <div className='container'>
        <Query
          query={GET_MISSION_DETAILS}
          variables={{ mission_Id: mission_id }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (error) {
              return <p>Error...</p>;
            }

            return (
              <div className='jumbotron'>
                <h4>{data.mission.mission_name}</h4>
                <hr className='my-4' />
                <p className='lead'>{data.mission.description}</p>
                <p className='lead'>
                  <a
                    className='btn btn-primary btn-lg'
                    href={data.mission.website}
                    target='_blank'
                    role='button'
                  >
                    Go to Website
                  </a>
                </p>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default MissionDetails;
