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
      <p>
        To test the CORS route, open the console in a new tab on a different
        domain and make a POST / GET / OPTIONS request to <b>/api/cors</b>.
        Using a different method from those mentioned will be blocked by CORS
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {fetchedUsers.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return {
    props: {
      users,
    },
  };
}
