import Header from "./components/header/Header";
import Body from "./components/body/Body";
import DataContext from "./context/DataContext";
import { useContext } from "react";

function App() {
  const { data, isLoading } = useContext(DataContext);
  return (
    <>
      {isLoading ? (
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <Header data={data} />
          <Body data={data} />
        </>
      )}
    </>
  );
}

export default App;
