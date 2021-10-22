import fs from "fs";
import { NextApiHandler } from "next";
import boilers from "./../../../mocks/boilers.json";

const AddBoiler: NextApiHandler = ({ body, method }, res) => {
  switch (method) {
    case "POST":
      const { boiler } = JSON.parse(body);

      const updatedBoilers = [...boilers, boiler];

      fs.writeFileSync(
        `${process.cwd()}/mocks/boilers.json`,
        JSON.stringify(updatedBoilers)
      );

      return res.status(200).send({
        status: "ok",
        payload: {
          item: boiler,
        },
      });

    default:
      return res.status(405).end(); //Method Not Allowed
  }
};

export default AddBoiler;
