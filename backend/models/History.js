const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  userHistory: Array,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
const History = mongoose.model("History", HistorySchema);
module.exports = History;
module.exports.CreatHistory = (userHistory, callback) => {
  userHistory.save(callback);
};
