import fs from "fs";
import { NextApiHandler } from "next";
import boilers from "./../../../../mocks/boilers.json";

const UpdateBoiler: NextApiHandler = ({ body, query, method }, res) => {
  switch (method) {
    case "PUT": {
      const { boilerId } = query;
      const { boiler } = JSON.parse(body);

      const foundBoiler = boilers.find((boiler) => boiler?.id === boilerId);

      if (foundBoiler) {
        const updatedBoiler = { ...foundBoiler, ...boiler };

        const updatedBoilers = [
          ...boilers.filter((boiler) => boiler?.id !== boilerId),
          updatedBoiler,
        ];

        fs.writeFileSync(
          `${process.cwd()}/mocks/boilers.json`,
          JSON.stringify(updatedBoilers)
        );

        return res.status(200).send({
          status: "ok",
          payload: {
            item: foundBoiler,
          },
        });
      }

      return res.status(404).send({
        status: "error",
        msg: `No item found with ID: ${boilerId}`,
      });
    }
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
};

export default UpdateBoiler;
