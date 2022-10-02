import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Pages } from "./";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getAllPosts: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        getAllBookmarks: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  // uri: "https://dev-server-v1.herokuapp.com/graphql",
  // uri: "https://dev-graphql-server-artjomikas.vercel.app/graphql",
  uri: "http://localhost:3000/graphql",
  cache
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default App;
