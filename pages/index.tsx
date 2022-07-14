import { Index } from "../components/pages";

export type User = {
  id: number;
};

export default function IndexPage({ users }: { users: User[] }) {
  return <Index users={users} />;
}

export async function getStaticProps() {
  const users = [{ id: 1 }, { id: 2 }, { id: 1 }];

  return {
    props: {
      users,
    },
  };
}
