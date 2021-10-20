import { NextApiHandler } from "next";
import boilers from "./../../../mocks/boilers.json";
const Boilers: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      return res.send({
        status: "ok",
        payload: {
          list: boilers,
        },
      });
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
};

export default Boilers;
