import client from "../providers/client";

export const listPets = () => client.get("pets/0lnu62q");

export const listPosts = (data) => client.post("pets/0lnu62q", data);
