import { useUsers } from "../hooks/useUser";

export type User = {
  id: number;
};

export default function Index({ users }: { users: User[] }) {
  const { users: fetchedUsers, isError } = useUsers();

  if (isError) {
    return "error";
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
}

export async function getStaticProps() {
  const users = [{ id: 1 }, { id: 2 }, { id: 1 }];

  return {
    props: {
      users,
    },
  };
}
