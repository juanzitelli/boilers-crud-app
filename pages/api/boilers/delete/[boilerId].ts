import fs from "fs";
import { NextApiHandler } from "next";
import { Boiler } from "../../../../entities/Boiler";
import boilers from "../../../../mocks/boilers.json";

const DeleteBoiler: NextApiHandler = ({ query, method }, res) => {
  switch (method) {
    case "DELETE": {
      const { boilerId } = query;

      const boiler = boilers.find((boiler: Boiler) => boiler?.id === boilerId);

      if (boiler) {
        const updatedBoilers = boilers.filter(
          (boiler: Boiler) => boiler?.id !== boilerId
        );

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

export default DeleteBoiler;
