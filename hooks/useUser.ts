import useSWR from "swr";

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export const useUsers = () => {
  const { data, error } = useSWR("/api/users", fetcher);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};
