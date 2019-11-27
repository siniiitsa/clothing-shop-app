const Accessories = require("../models/Accessories");
const Man = require("../models/Man");
const Woman = require("../models/Woman");

exports.getCategory = async (req, res) => {
  const { category, collection, subCategory, age } = req.query;
  try {
    if (category.length !== 0 && collection.length !== 0) {
      if (collection === "man") {
        const manAggregate = await Man.aggregate([
          {
            $match: {
              category: category.charAt(0).toUpperCase() + category.slice(1)
            }
          }
        ]);
        return res.status(200).json({ manAggregate });
      } else if (collection === "accessories" && subCategory.length !== 0) {
        const accessoriesAggregate = await Accessories.aggregate([
          {
            $match: {
              subCategory:
                subCategory.charAt(0).toUpperCase() + subCategory.slice(1)
            }
          },
          {
            $match: {
              category: category.charAt(0).toUpperCase() + category.slice(1)
            }
          }
        ]);
        return res.status(200).json({ accessoriesAggregate });
      } else if (collection === "women") {
        const womenAggregate = await Woman.aggregate([
          {
            $match: {
              category: category.charAt(0).toUpperCase() + category.slice(1)
            }
          }
        ]);
        return res.status(200).json({ womenAggregate });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.sortByNewCollections = async (req, res) => {
  const { collection } = req.query;
  try {
    if (collection === "man") {
      const manAggregate = await Man.aggregate([{ $match: { new: true } }]);
      return res.status(200).json({ manAggregate });
    } else if (collection === "women") {
      const womenAggregate = await Woman.aggregate([{ $match: { new: true } }]);
      return res.status(200).json({ womenAggregate });
    } else if (collection === "accessories") {
      const accessoriesAggregate = await Accessories.aggregate([
        { $match: { new: true } }
      ]);
      return res.status(200).json({ accessoriesAggregate });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server Error." });
  }
};
