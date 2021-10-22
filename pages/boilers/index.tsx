import useSWR from "swr";
import { BoilersList } from "../../components/boilers/BoilersList";
import { fetcher } from "../../utilities/fetcher";

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
