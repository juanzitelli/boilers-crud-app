import { useRouter } from "next/router";
import useSwr from "swr";
import { EditBoilerForm } from "../../../components/boilers/forms/EditBoilerForm";
import { fetcher } from "../../../utilities/fetcher";

export default function EditBoiler() {
  const {
    query: { boilerId },
  } = useRouter();
  const { data, error } = useSwr(`/api/boilers/${boilerId}`, fetcher);

  if (error) {
    return <>{error}</>;
  }

  if (!data) {
    return <>Loading...</>;
  }

  const {
    payload: { item: boiler },
  } = data;

  return (
    <>
      <h1>Edit boiler</h1>
      {boiler && <EditBoilerForm boiler={boiler}></EditBoilerForm>}
    </>
  );
}
