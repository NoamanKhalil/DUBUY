import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);
const addlisting = (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (listing.location) data.append("location", JSON.stringify(listi.location));

  return client.post(endpoint);
};

export default {
  addlisting,
  getListings,
};
