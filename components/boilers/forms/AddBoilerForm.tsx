import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Boiler } from "../../../entities/Boiler";
import { BaseBoilerForm, SubmitButton } from "./BaseBoilerForm";

interface Props {}

type FormStatus = "Success" | "Error" | null;

export const AddBoilerForm = ({}: Props) => {
  const [status, setStatus] = useState<FormStatus>(null);
  const onAddBoilerHandler: SubmitHandler<Omit<Boiler, "id">> = async (
    boiler
  ) => {
    const response = await fetch("/api/boilers/new", {
      method: "POST",
      body: JSON.stringify({
        boiler: {
          ...boiler,
        },
      }),
    });

    const { status } = await response.json();

    const statusMapper: Record<string, FormStatus> = {
      ok: "Success",
      error: "Error",
    };

    setStatus(statusMapper[status]);
  };

  return (
    <BaseBoilerForm onSubmit={onAddBoilerHandler}>
      <SubmitButton>Add new boiler</SubmitButton>
      {status}
    </BaseBoilerForm>
  );
};
