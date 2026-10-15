import { useEffect } from "react";
import CountView from "./components/CountView";
import NameView from "./components/NameView";
import UsersList from "./components/UsersList";
import useMyStore from "./store";

const App = () => {
  const count = useMyStore((state) => state.count);
  const increase = useMyStore((state) => state.increase);
  const showCount = useMyStore((state) => state.showCount);
  const toggleName = useMyStore((state) => state.toggleName);
  const fetchUsers = useMyStore((state) => state.fetchUsers);

  useEffect(()=>{
    console.log("me render hua");
  })

  return (
    <div>
      <h1>Zustand selector example</h1>
      <h3>{count}</h3>
      <button onClick={showCount}>Show count</button>
      <button onClick={increase}>Increase</button>
      <button onClick={toggleName}>Change name</button>
      <button onClick={fetchUsers}>Load users</button>

      <CountView />
      <NameView />
      <UsersList />
    </div>
  );
};

export default App;
