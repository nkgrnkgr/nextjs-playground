import { usePokeApi } from "../../../hooks/usePokeApi";

type Props = {
  //
};
const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const Component: React.FC<Props> = () => {
  //   //   const [data, setData] = useState<any | null>(null);
  //   const { data } = useSWR("/api/users", fetcher);
  //   console.log(data);

  //   useEffect(() => {
  //     const fun = async () => {
  //       //   const api = new PokemonClient();
  //       //   const response = await api.getPokemonByName("luxray");
  //       //   console.log(response);
  //       //   setData(response.name);
  //     };

  //     fun();
  //   }, []);
  const { users } = usePokeApi();
  console.log(users);

  return (
    <div>
      <p>data is </p>
    </div>
  );
};

export const PokeApi = Component;
