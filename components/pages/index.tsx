import { useUsers } from "../../hooks/useUser";
import { User } from "../../pages";

type Props = {
  users: User[];
};

const Component: React.FC<Props> = ({ users }) => {
  const { users: fetchedUsers, isError } = useUsers();

  if (isError) {
    return <>error</>;
  }
  if (!fetchedUsers) return <div>Loading...</div>;

  return (
    <div>
      <p>This is pre-fetched Props</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>
      <hr />
      <p>This is fetched Props</p>
      <ul>
        {fetchedUsers.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>
    </div>
  );
};
export const Index = Component;
