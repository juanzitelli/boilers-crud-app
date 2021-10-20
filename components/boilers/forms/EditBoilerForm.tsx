import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Boiler } from "../../../entities/Boiler";
import { BaseBoilerForm, SubmitButton } from "./BaseBoilerForm";

interface Props {
  boiler: Boiler;
}

type FormStatus = "Success" | "Error" | null;

export const EditBoilerForm = ({ boiler }: Props) => {
  const [status, setStatus] = useState<FormStatus>(() => null);
  const onEditBoilerHandler: SubmitHandler<Omit<Boiler, "id">> = async (
    data
  ) => {
    const response = await fetch(
      `/api/boilers/edit/${boiler.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          boiler: {
            ...data,
          },
        }),
      }
    );

    const { status } = await response.json();

    const statusMapper: Record<string, FormStatus> = {
      ok: "Success",
      error: "Error",
    };

    setStatus(statusMapper[status]);
  };

  const { id, ...data } = boiler;

  return (
    <BaseBoilerForm defaultValues={data} onSubmit={onEditBoilerHandler}>
      <SubmitButton>Edit boiler</SubmitButton>
      {status}
    </BaseBoilerForm>
  );
};
