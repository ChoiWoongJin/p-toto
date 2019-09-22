import { GraphQLServer } from 'graphql-yoga';
import resolvers from './db.Resolver';
// const { ApolloServer } = require('apollo-server');
// ApolloServer : GraphQL 서버 인스턴스 생성자

const server = new GraphQLServer({
    typeDefs: "./schema.graphql",
    resolvers
});

server.start(() => console.log("[GraphQL Server] Server is Running for Project YJ."));