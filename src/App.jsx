import { Header } from "./";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    </div>
  );
}

export default App;
