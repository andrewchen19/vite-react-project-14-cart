// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import Loading from "./Loading";

import { useGlobalContext } from "./content";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
