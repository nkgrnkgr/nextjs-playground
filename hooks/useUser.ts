import useSWR from "swr";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export const useUsers = () => {
  const { data, error } = useSWR("/api/users", fetcher);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};
