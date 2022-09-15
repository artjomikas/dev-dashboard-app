import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Pages } from './'


const client = new ApolloClient({
  uri: "https://dev-graphql-server-artjomikas.vercel.app/graphql",
  cache: new InMemoryCache(),
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
