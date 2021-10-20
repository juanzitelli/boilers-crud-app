import { AddBoilerForm } from "../../components/boilers/forms/AddBoilerForm";

interface Props {}

export default function AddBoiler(props: Props) {
  return (
    <>
      <h1>New boiler</h1>
      <AddBoilerForm />
    </>
  );
}
