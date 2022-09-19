import { useEffect, useState } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";

//firebase
import { app } from "./firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ref = collection(app, "events");
    const unsub = onSnapshot(ref, (info) => {
      let arr = [];
      info.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      setData(arr);
    });

    return () => unsub();
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
