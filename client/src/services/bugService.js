import API from "./api";

export const getBugs = async () => {
  const res = await API.get("/bugs");
  return res.data;
};

export const addBug = async (bug) => {
  const res = await API.post("/bugs", bug);
  return res.data;
};

export const deleteBug = async (id) => {
  const res = await API.delete(`/bugs/${id}`);
  return res.data;
};
