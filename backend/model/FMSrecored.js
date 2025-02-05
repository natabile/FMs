import mongoose from "mongoose";
const FmsrecordSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  discription: {
    type: String,
    required: true

  },
  amount: {
    type: Number,
    required: true

  },

  catagoriy: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  }
})
const FMSrecoredmodel = mongoose.model("FMSrecored", FmsrecordSchema)
export default FMSrecoredmodel