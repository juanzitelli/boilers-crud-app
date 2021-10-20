import { NextApiHandler } from "next";
import { Boiler } from "../../../entities/Boiler";
import boilers from "./../../../mocks/boilers.json";

const SingleBoiler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      const { boilerId } = req.query;

      const boiler = boilers.find(({ id }: Boiler) => id === boilerId);

      if (boiler) {
        return res.send({
          status: "ok",
          payload: {
            item: boiler,
          },
        });
      }

      return res.send({
        status: "error",
        msg: `No item found with ID: ${boilerId}`,
      });
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
};

export default SingleBoiler;
