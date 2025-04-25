import { Suspense } from "react";
import "./App.css";
import Bottles from "./component/bottles/Bottles";

const bottlesPromise = fetch("./bottles.json").then((res) => res.json());
function App() {
  return (
    <>
      <h1>Buy awesome water bottles</h1>
      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
