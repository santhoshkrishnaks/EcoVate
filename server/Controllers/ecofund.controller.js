import { EcoConnect, EcoFund } from "../config/database.js";

export const createPayment = async(req,res) => {
    try {
        const payment = await new EcoFund(req.body);
        payment.save();
        res.status(200).json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getPayment = async(req,res) => {
    try{
        const {username}=req.params;
        const funduser=await EcoFund.findbyuser(username);
        console.log(req.body);
        if (!funduser ) {
      return res.status(404).json("user not found");
    }
    res.status(200).json(funduser);
    }
    catch(error){
        console.log(error.message);
    res.status(500).json({ message: error.message });
    }
}

export const getAllFund = async (req, res) => {
  try {
    const fund = await EcoFund.find({})
      .populate({
        path: "post_id",
        select: "title",
        model: EcoConnect,
      })
      .exec();
    res.status(200).json(fund);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTotalPayments = async (req, res) => {
  try {
    console.log("Starting aggregation...");
    const result = await EcoFund.aggregate([
      { $group: { _id: "$username", totalAmount: { $sum: "$amount" } } },
    ]);

    console.log("Aggregation result:", result);

    if (result.length > 0) {
      const totalAmount = result[0].totalAmount;
      res.status(200).json({ totalAmount });
    } else {
      res.status(200).json({ totalAmount: 0 });
    }
  } catch (error) {
    console.error("Error in getTotalPayments:", error.message);
    res.status(500).json({ error: error.message });
  }
};
