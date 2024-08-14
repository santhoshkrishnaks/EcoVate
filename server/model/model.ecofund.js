import mongoose from "mongoose";

const ecofundSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    post_id: {
      type: String,
      required: false,
    },
    paymentType: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ecofundSchema.statics.findbyuser = function (name) {
  return this.where({ username: new RegExp(name, "i") });
};
export default ecofundSchema;
