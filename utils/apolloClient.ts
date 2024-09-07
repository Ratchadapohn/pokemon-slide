import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://graphql-pokemon2.vercel.app/", // GraphQL API URL
  headers: {
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
