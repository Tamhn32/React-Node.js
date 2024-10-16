import axios from "./ultil/axios.customize";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log("Check res: ", res);
    };
    fetchHelloWorld();
  });
  return <>Hello</>;
}

export default App;
