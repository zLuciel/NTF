
import { connect, connection } from "mongoose";
import createDefaultTags from "./CreateTags";

const conn = {
  isConnected: false,
};


export async function dbConnect() {
  if (conn.isConnected) return;
  //const db = await connect(process.env.MONGODB_URL);
  const db = await connect(process.env.REACT_APP_MONGODB_URL);
  conn.isConnected = db.connections[0].readyState;
  createDefaultTags()
}

connection.on("connected", () => {
  console.log("Mongodb is connected");
});

connection.on("error", (err) => {
  console.log(err);
});
