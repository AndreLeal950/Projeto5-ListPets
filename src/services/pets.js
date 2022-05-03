import client from "../providers/client";

export const listPets = () =>
  client.get("pets/0rp4knn");
