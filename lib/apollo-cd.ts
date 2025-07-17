import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CIN_DIRECT_API_ENDPOINT}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
