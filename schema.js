const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

const MissionType = new GraphQLObjectType({
  name: "MissionType",
  fields: {
    mission_name: { type: GraphQLString },
    mission_id: { type: GraphQLString },
    description: { type: GraphQLString },
    website: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    missions: {
      type: new GraphQLList(MissionType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/missions")
          .then((res) => res.data);
      },
    },
    mission: {
      type: MissionType,
      args: { mission_Id: { type: GraphQLString } },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/missions/${args.mission_Id}`)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
