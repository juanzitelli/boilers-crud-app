import useSWR from "swr";
import { BoilersList } from "../../components/boilers/BoilersList";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Boilers() {
  const { data, error } = useSWR("/api/boilers/", fetcher);

  if (error) {
    return <>{error}</>;
  }

  if (!data) {
    return <>Loading...</>;
  }

  const {
    payload: { list: boilers },
  } = data;

  return (
    <>
      <h1>Boilers</h1>
      <BoilersList boilers={boilers} />
    </>
  );
}
