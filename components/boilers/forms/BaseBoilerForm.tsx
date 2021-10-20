import { PropsWithChildren } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Boiler } from "../../../entities/Boiler";

type FormInputs = {
  model: string;
  status: string;
};

interface BaseBoilerProps {
  defaultValues?: FormInputs;
  onSubmit: SubmitHandler<Omit<Boiler, "id">>;
}

export const BaseBoilerForm = ({
  defaultValues,
  children,
  onSubmit,
}: PropsWithChildren<BaseBoilerProps>) => {
  const { register, handleSubmit } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: {
      ...defaultValues,
    },
    delayError: undefined,
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="model">Model</label>
      <input style={{ marginBottom: "1rem" }} {...register("model")} />
      <label htmlFor="status">Status</label>
      <select style={{ marginBottom: "1rem" }} {...register("status")}>
        <option value="Reserved">Reserved</option>
        <option value="Stock">Stock</option>
        <option value="Installed">Installed</option>
      </select>
      {children}
    </form>
  );
};

export const SubmitButton = ({ children }: PropsWithChildren<{}>) => {
  return <button type="submit">{children}</button>;
};
