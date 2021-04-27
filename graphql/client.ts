import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: "https://parseapi.back4app.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "X-Parse-Application-Id": "xGaPMFg4RajOwOZMbtfi8FNdZgSI4zXpTCfZka02",
    "X-Parse-Master-Key": "ywKLuyMDVmDrXs159G9gjdV1sKFbLOxXeoZSaMcl",
    "X-Parse-Client-Key": "jUemrHF3RoYV56IZ6WtWP4RNmBt32wFRZSXBDZH1",
  },
});

export default Client;
