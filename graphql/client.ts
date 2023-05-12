import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: "https://parseapi.back4app.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "X-Parse-Application-Id": "...",
    "X-Parse-Master-Key": "...",
    "X-Parse-Client-Key": "...",
  },
});

export default Client;
