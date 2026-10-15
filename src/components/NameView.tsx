import useMyStore from "../store";

const NameView = () => {
  const name = useMyStore((state) => state.name);

  console.log("NameView rendered");

  return <h2>Name: {name}</h2>;
};

export default NameView;
