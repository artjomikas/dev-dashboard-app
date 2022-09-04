import { Header, Articles, AddArticle, Main } from "./";
import { AuthContextProvider } from "./context/AuthContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default App;
