export const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "you getAll the products" });
};

export const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "you getAll the testing product!" });
};
