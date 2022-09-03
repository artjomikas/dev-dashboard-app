import { Header, Articles, AddArticle, Main } from "./";
import { AuthContextProvider } from "./context/AuthContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <Header />
          <Main />
        </AuthContextProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
