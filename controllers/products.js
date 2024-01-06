const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "you getAll the products" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "you getAll the testing product!" });
};
module.exports = { getAllProducts, getAllProductsTesting };
