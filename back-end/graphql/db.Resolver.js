import { getDbPeople, getDbPeople2 } from "./db.Connect";

const resolvers = {
    Query: {
        getDbPeople: () => getDbPeople(),
        getDbPeople2: () => getDbPeople2()
    }
};

export default resolvers;