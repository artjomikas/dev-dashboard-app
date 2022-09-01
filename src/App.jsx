import { Header, Articles } from "./";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Articles />
      </AuthContextProvider>
    </div>
  );
}

export default App;
