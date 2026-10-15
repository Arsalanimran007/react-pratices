import useMyStore from "../store";

const CountView = () => {
  const count = useMyStore((state) => state.count);

  console.log("CountView rendered");

  return <h2>Count: {count}</h2>;
};

export default CountView;
