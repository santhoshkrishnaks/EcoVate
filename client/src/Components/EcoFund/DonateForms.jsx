import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'; 
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';


const DonateForms = (postid) => {
  console.log(postid.postid==="");
  console.log(postid.postid);
  const { user } = useUser();
  const [step, setStep] = useState(1);
  const [paymentType, setPaymentType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [note, setNote] = useState('');
  const [cardType, setCardType] = useState('debit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [upiId, setUpiId] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('Savings');
  const [ifscCode, setIfscCode] = useState('');
  const [branch, setBranch] = useState('');
  const [errors, setErrors] = useState({
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentOption: '',
    accountHolderName: '',
    accountNumber: '',
    accountType: '',
    ifscCode: ''
  });
  const [transactionId, setTransactionId] = useState('');

  const amountsOneTime = [1000, 5000, 1500, 2000];
  const amountsMonthly = [25, 50, 100, 250, 500];
    
    

  const generateTransactionId =async () => {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let transactionId = '';

    // Generate 5 random alphabets
    for (let i = 0; i < 5; i++) {
      transactionId += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }

    // Generate 10 random numbers
    for (let i = 0; i < 10; i++) {
      transactionId += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    console.log(transactionId);
    
    

 

    return transactionId;
  };
  
 

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
    setSelectedAmount('');
    setCustomAmount('');
    setErrors((prevErrors) => ({ ...prevErrors, amount: '' }));

    // Clear other payment options
    if (type === 'card') {
      setPaymentOption('');
      setUpiId('');
      setAccountHolderName('');
      setAccountNumber('');
      setAccountType('Savings');
      setIfscCode('');
      setBranch('');
    }
  };

  const handleAmountChange = (amount) => {
    setSelectedAmount(prevAmount => prevAmount === amount ? '' : amount);
    if (amount) setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    if (e.target.value) setSelectedAmount('');
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') setCardNumber(value);
    if (name === 'expiryDate') setExpiryDate(value);
    if (name === 'cvv') setCvv(value);
  };

  const handleCardTypeChange = (type) => {
    setCardType(type);
  };

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
    setUpiId('');
    setAccountHolderName('');
    setAccountNumber('');
    setAccountType('Savings');
    setIfscCode('');
    setBranch('');
    setErrors((prevErrors) => ({ ...prevErrors, paymentOption: '' }));
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleNetBankingDetailsChange = (e) => {
    const { name, value } = e.target;
    if (name === 'accountHolderName') setAccountHolderName(value);
    if (name === 'accountNumber') setAccountNumber(value);
    if (name === 'accountType') setAccountType(value);
    if (name === 'ifscCode') setIfscCode(value);
    if (name === 'branch') setBranch(value);
  };

  const validateCardDetails = () => {
    const errors = {
      cardNumber: cardNumber.length !== 16 ? 'Card number must be 16 digits' : '',
      expiryDate: !expiryDate ? 'Expiry date is required' : '',
      cvv: cvv.length !== 3 ? 'CVV must be 3 digits' : ''
    };
    setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
    return !errors.cardNumber && !errors.expiryDate && !errors.cvv;
  };

  const validateStep2 = () => {
    let valid = true;
    const newErrors = {
      amount: selectedAmount || customAmount ? '' : 'Please select or enter an amount',
      paymentOption: paymentOption ? '' : 'Please select a payment option'
    };

    if (paymentOption === 'card') {
      if (!cardNumber || !expiryDate || !cvv) {
        valid = false;
        newErrors.cardNumber = cardNumber ? '' : 'Card number is required';
        newErrors.expiryDate = expiryDate ? '' : 'Expiry date is required';
        newErrors.cvv = cvv ? '' : 'CVV is required';
      } else if (!validateCardDetails()) {
        valid = false;
      }
    } else if (paymentOption === 'upi' && !upiId) {
      valid = false;
      newErrors.upiId = 'UPI ID is required';
    } else if (paymentOption === 'netbanking') {
      if (!accountHolderName || !accountNumber || !accountType || !ifscCode) {
        valid = false;
        newErrors.accountHolderName = accountHolderName ? '' : 'Account Holder Name is required';
        newErrors.accountNumber = accountNumber ? '' : 'Account Number is required';
        newErrors.accountType = accountType ? '' : 'Account Type is required';
        newErrors.ifscCode = ifscCode ? '' : 'IFSC Code is required';
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    return valid;
  };

  const handleNextStep =async () => {
    if (step === 1) {
      if (!selectedAmount && !customAmount) {
        setErrors((prevErrors) => ({ ...prevErrors, amount: 'Please select or enter an amount' }));
        return;
      }
      setErrors((prevErrors) => ({ ...prevErrors, amount: '' }));
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        const id=await generateTransactionId();
        setTransactionId(id);
        console.log(id);
         
         const getPaymentDataForPost = () => {
           const amount = selectedAmount || customAmount;
           
           const paymentdata= {
             username: user.username,
             paymentType,
             amount,
             payment_method: paymentOption,
             transactionId:id,
             
           };

           if(postid.postid!="")
           {
            paymentdata.post_id=postid.postid;
           }
           return paymentdata;
          
         };

        setTimeout(async() => {
          setStep(3);
          //post
            const data=getPaymentDataForPost();
        console.log(data);
        try{
          const response=await axios.post("https://ecovate-nqq4.onrender.com/ecofund",{...data});
          console.log("Posted successfully",response);
        }
        catch(error){
          console.error('Error posting data:', error);
        }

        }, 1000);
      }
    }
  };

  const handlePrint = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 850]);
      const { width, height } = page.getSize();
      const fontSize = 12;
  
      // Embed fonts
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
      // Add company logo and details
      page.drawText('EcoFund', { x: 50, y: height - 50, size: 24, font: fontBold, color: rgb(0, 0.5, 0) });
      page.drawText('123 Eco Lane, Green City, GC 12345', { x: 50, y: height - 70, size: fontSize, font: fontRegular });
      page.drawText('Phone: (123) 456-7890', { x: 50, y: height - 85, size: fontSize, font: fontRegular });
      page.drawText('Email: contact@ecofund.org', { x: 50, y: height - 100, size: fontSize, font: fontRegular });
      page.drawText('Website: www.ecofund.org', { x: 50, y: height - 115, size: fontSize, font: fontRegular });
  
      // Add transaction details
      page.drawText('Transaction ID: ' + transactionId, { x: 50, y: height - 150, size: fontSize, font: fontRegular });
      page.drawText('Amount: ' + (selectedAmount || customAmount), { x: 50, y: height - 165, size: fontSize, font: fontRegular });
      page.drawText('Payment Method: ' + paymentOption, { x: 50, y: height - 180, size: fontSize, font: fontRegular });
  
      // Add additional details based on payment option
      if (paymentOption === 'card') {
        page.drawText('Card Type: ' + cardType, { x: 50, y: height - 195, size: fontSize, font: fontRegular });
        page.drawText('Card Number: ' + cardNumber, { x: 50, y: height - 210, size: fontSize, font: fontRegular });
        page.drawText('Expiry Date: ' + expiryDate, { x: 50, y: height - 225, size: fontSize, font: fontRegular });
        page.drawText('CVV: ' + cvv, { x: 50, y: height - 240, size: fontSize, font: fontRegular });
      } else if (paymentOption === 'upi') {
        page.drawText('UPI ID: ' + upiId, { x: 50, y: height - 195, size: fontSize, font: fontRegular });
      } else if (paymentOption === 'netbanking') {
        page.drawText('Account Holder Name: ' + accountHolderName, { x: 50, y: height - 195, size: fontSize, font: fontRegular });
        page.drawText('Account Number: ' + accountNumber, { x: 50, y: height - 210, size: fontSize, font: fontRegular });
        page.drawText('Account Type: ' + accountType, { x: 50, y: height - 225, size: fontSize, font: fontRegular });
        page.drawText('IFSC Code: ' + ifscCode, { x: 50, y: height - 240, size: fontSize, font: fontRegular });
      }
  
      // Add donor note
      if (note) {
        page.drawText('Note: ' + note, { x: 50, y: height - 270, size: fontSize, font: fontRegular });
      }
  
      const pdfBytes = await pdfDoc.save();
  
      // Create a blob and download the PDF
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'transaction_receipt.pdf';
      document.body.appendChild(link); // Append the link to the body
      link.click();
      document.body.removeChild(link); // Remove the link from the body
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  return (
    <div className="p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-4">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>1</div>
          <div className={`flex-1 h-0.5 ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>2</div>
          <div className={`flex-1 h-0.5 ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step === 3 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>3</div>
        </div>

        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Choose Amount</h1>
            <div className="flex mb-4 space-x-2">
              <button
                onClick={() => handlePaymentTypeChange('one-time')}
                className={`flex-1 px-4 py-2 rounded ${paymentType === 'one-time' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                One-Time Payment
              </button>
              <button
                onClick={() => handlePaymentTypeChange('monthly')}
                className={`flex-1 px-4 py-2 rounded ${paymentType === 'monthly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Monthly Payment
              </button>
            </div>
            <div className="mb-4">
              {paymentType === 'monthly' && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {amountsMonthly.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountChange(amount)}
                      className={`px-4 py-2 rounded ${selectedAmount === amount ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              )}
              {paymentType === 'one-time' && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {amountsOneTime.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountChange(amount)}
                      className={`px-4 py-2 rounded ${selectedAmount === amount ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                      ${amount}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </div>
              )}
              {errors.amount && <p className="text-red-500">{errors.amount}</p>}
            </div>
            <button
              onClick={handleNextStep}
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Enter Payment Details</h1>
            <div className="mb-4">
              <button
                onClick={() => handlePaymentOptionChange('card')}
                className={`px-4 py-2 rounded ${paymentOption === 'card' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Card Payment
              </button>
              <button
                onClick={() => handlePaymentOptionChange('upi')}
                className={`px-4 py-2 rounded ${paymentOption === 'upi' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                UPI Payment
              </button>
              <button
                onClick={() => handlePaymentOptionChange('netbanking')}
                className={`px-4 py-2 rounded ${paymentOption === 'netbanking' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Net Banking
              </button>
            </div>
            {errors.paymentOption && <p className="text-red-500 mb-4">{errors.paymentOption}</p>}
            {paymentOption === 'card' && (
              <div>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={handleCardDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                {errors.cardNumber && <p className="text-red-500 mb-4">{errors.cardNumber}</p>}
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Expiry Date (MM/YY)"
                  value={expiryDate}
                  onChange={handleCardDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                {errors.expiryDate && <p className="text-red-500 mb-4">{errors.expiryDate}</p>}
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={cvv}
                  onChange={handleCardDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                {errors.cvv && <p className="text-red-500 mb-4">{errors.cvv}</p>}
              </div>
            )}
            {paymentOption === 'upi' && (
              <input
                type="text"
                placeholder="UPI ID"
                value={upiId}
                onChange={handleUpiIdChange}
                className="border border-gray-300 p-2 rounded w-full mb-4"
              />
            )}
            {errors.upiId && <p className="text-red-500 mb-4">{errors.upiId}</p>}
            {paymentOption === 'netbanking' && (
              <div>
                <input
                  type="text"
                  name="accountHolderName"
                  placeholder="Account Holder Name"
                  value={accountHolderName}
                  onChange={handleNetBankingDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                {errors.accountHolderName && <p className="text-red-500 mb-4">{errors.accountHolderName}</p>}
                <input
                  type="text"
                  name="accountNumber"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={handleNetBankingDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                {errors.accountNumber && <p className="text-red-500 mb-4">{errors.accountNumber}</p>}
                <select
                  name="accountType"
                  value={accountType}
                  onChange={handleNetBankingDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                >
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                  <option value="NRI">NRI</option>
                </select>
                {errors.accountType && <p className="text-red-500 mb-4">{errors.accountType}</p>}
                <input
                  type="text"
                  name="ifscCode"
                  placeholder="IFSC Code"
                  value={ifscCode}
                  onChange={handleNetBankingDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                  required
                />
                {errors.ifscCode && <p className="text-red-500 mb-4">{errors.ifscCode}</p>}
                <input
                  type="text"
                  name="branch"
                  placeholder="Branch (optional)"
                  value={branch}
                  onChange={handleNetBankingDetailsChange}
                  className="border border-gray-300 p-2 rounded w-full mb-4"
                />
              </div>
            )}
            <button
              onClick={handleNextStep}
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              Confirm Payment
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl mr-2" />
              <h1 className="text-2xl font-bold">Payment Successful</h1>
            </div>
            <p className='text-2xl font-bold text-green-700' >Thank you for your donation! Your payment was successful.</p>
            <p className='text-1xl font-bold'>Transaction ID:  
               <span className='text-slate-800'>{transactionId}</span></p>
            <button
              onClick={handlePrint}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Print Receipt
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateForms;
