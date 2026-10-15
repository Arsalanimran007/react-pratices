import useMyStore from "../store";

const UsersList = () => {
  const users = useMyStore((state) => state.users);
  const loading = useMyStore((state) => state.loading);
  const error = useMyStore((state) => state.error);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (users.length === 0) {
    return <p>Click "Load users" to fetch data.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
