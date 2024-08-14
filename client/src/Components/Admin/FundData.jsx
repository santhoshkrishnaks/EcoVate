import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const FundPage = () => {
  const [payments, setPayments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const paymentsResponse = await axios.get(
          "http://localhost:5000/ecofund"
        );
        console.log("data",paymentsResponse.data); // Debugging line
        setPayments(paymentsResponse.data);

        const totalResponse = await axios.get(
          "http://localhost:5000/fundtotal"
        );
        setTotalAmount(totalResponse.data.totalAmount);

        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Separate payments based on whether they have a post_id or not
  const donationsToPosts = payments.filter((payment) => payment.post_id);
  const donationsToUs = payments.filter((payment) => !payment.post_id);
  const {user}=useUser();
  if (user.publicMetadata.role !== 'admin') {
    return <div>Access Denied</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-green-800 mb-6">
            Payments Overview
          </h1>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Total Amount: ${totalAmount || 0}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Donations to Posts
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Transaction ID
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Username
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">Amount</th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Payment Type
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Payment Method
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">Post</th>
                </tr>
              </thead>
              <tbody>
  {donationsToPosts.map((payment) => (
    <tr key={payment._id} className="border-b border-gray-200">
      <td className="py-3 px-4">{payment.transactionId || 'N/A'}</td>
      <td className="py-3 px-4">{payment.username || 'Anonymous'}</td>
      <td className="py-3 px-4">${payment.amount || 0}</td>
      <td className="py-3 px-4">{payment.paymentType || 'Unknown'}</td>
      <td className="py-3 px-4">{payment.payment_method || 'Unknown'}</td>
      <td className="py-3 px-4">{payment.post_id ? payment.post_id.title : 'N/A'}</td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Donations to Us
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Transaction ID
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Username
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">Amount</th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Payment Type
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700">
                    Payment Method
                  </th>
                </tr>
              </thead>
              <tbody>
                {donationsToUs.map((payment) => (
                  <tr key={payment._id} className="border-b border-gray-200">
                    <td className="py-3 px-4">{payment.transactionId || 'N/A'}</td>
                    <td className="py-3 px-4">{payment.username || 'Anonymous'}</td>
                    <td className="py-3 px-4">${payment.amount || 0}</td>
                    <td className="py-3 px-4">{payment.paymentType || 'Unknown'}</td>
                    <td className="py-3 px-4">{payment.payment_method || 'Unknown'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundPage;
