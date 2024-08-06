import React, { useState } from 'react';

const DonateForms = () => {
  const [step, setStep] = useState(1);
  const [paymentType, setPaymentType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState('');
  const [cardType, setCardType] = useState('debit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [upiId, setUpiId] = useState('');
  const [netBankingDetails, setNetBankingDetails] = useState('');
  const [errors, setErrors] = useState({
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentOption: ''
  });

  const amountsOneTime = [1000, 5000, 1500, 2000];
  const amountsMonthly = [25, 50, 100, 250, 500];

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
    setSelectedAmount('');
    setCustomAmount('');
    setErrors((prevErrors) => ({ ...prevErrors, amount: '' }));
  };

  const handleAmountChange = (amount) => {
    setSelectedAmount(prevAmount => prevAmount === amount ? '' : amount);
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
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
    setNetBankingDetails('');
    setErrors((prevErrors) => ({ ...prevErrors, paymentOption: '' }));
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleNetBankingDetailsChange = (e) => {
    setNetBankingDetails(e.target.value);
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

  const handleNextStep = () => {
    if (step === 1) {
      if (!selectedAmount && !customAmount) {
        setErrors((prevErrors) => ({ ...prevErrors, amount: 'Please select or enter an amount' }));
        return;
      }
      setErrors((prevErrors) => ({ ...prevErrors, amount: '' }));
      setStep(2);
    } else if (step === 2) {
      if (validateCardDetails()) {
        setStep(3);
      }
    }
  };

  return (
    <div className="bg-green-100">
    <div className="lg:max-w-md mb-[50px] lg:mx-20 p-6 bg-slate-100 shadow-lg rounded-lg mt-[50px]">
      {/* Step Navigation */}
      <div className="flex items-center mb-6">
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
              </div>
            )}
            <input
              type="number"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          {errors.amount && <p className="text-red-500 mb-4">{errors.amount}</p>}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={showNote}
              onChange={() => setShowNote(!showNote)}
              id="note-checkbox"
              className="mr-2"
            />
            <label htmlFor="note-checkbox" className="text-gray-800">Add a note</label>
          </div>
          {showNote && (
            <textarea
              placeholder="Your note"
              value={note}
              onChange={handleNoteChange}
              className="border border-gray-300 p-2 rounded w-full mt-2"
            />
          )}
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Card Details</h1>
          <div className="mb-4">
            <div className="flex mb-4">
              <button
                onClick={() => handleCardTypeChange('debit')}
                className={`flex-1 px-4 py-2 rounded ${cardType === 'debit' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Debit Card
              </button>
              <button
                onClick={() => handleCardTypeChange('credit')}
                className={`flex-1 px-4 py-2 rounded ${cardType === 'credit' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Credit Card
              </button>
            </div>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number (16 digits)"
              value={cardNumber}
              onChange={handleCardDetailsChange}
              className={`border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full mb-2`}
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={handleCardDetailsChange}
              className={`border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full mb-2`}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV (3 digits)"
              value={cvv}
              onChange={handleCardDetailsChange}
              className={`border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full mb-2`}
            />
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => handlePaymentOptionChange('upi')}
                className={`flex-1 px-4 py-2 rounded ${paymentOption === 'upi' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                UPI ID
              </button>
              <button
                onClick={() => handlePaymentOptionChange('netbanking')}
                className={`flex-1 px-4 py-2 rounded ${paymentOption === 'netbanking' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Net Banking
              </button>
            </div>
            {paymentOption === 'upi' && (
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={handleUpiIdChange}
                className="border border-gray-300 p-2 rounded w-full mt-4"
              />
            )}
            {paymentOption === 'netbanking' && (
              <input
                type="text"
                placeholder="Enter Net Banking Details"
                value={netBankingDetails}
                onChange={handleNetBankingDetailsChange}
                className="border border-gray-300 p-2 rounded w-full mt-4"
              />
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1 className="text-2xl font-bold mb-4 text-slate-800">Payment Confirmation</h1>
          {/* <h1 className='text-center text-green-700 font-bold mb-3 text-1xl'>Your donation fuels Ecovate's mission</h1> */}
          <div className="mb-4">
            <p className="font-semibold">Amount:</p>
            <p className=' text-green-700 font-bold'>${selectedAmount || customAmount}</p>
          </div>
          {showNote && (
            <div className="mb-4">
              <p className="font-semibold">Note:</p>
              <p className=' text-green-700 font-bold'>{note}</p>
            </div>
          )}
          <div className="mb-4">
            <p className="font-semibold">Card Type:</p>
            <p className=' text-green-700 font-bold'> {cardType.charAt(0).toUpperCase() + cardType.slice(1)} Card</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Card Number:</p>
            <p className=' text-green-700 font-bold' >{cardNumber}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Expiry Date:</p>
            <p className=' text-green-700 font-bold'  >{expiryDate}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">CVV:</p>
            <p className=' text-green-700 font-bold'  >{cvv}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Payment Option:</p>
            <p className=' text-green-700 font-bold'>{paymentOption.charAt(0).toUpperCase() + paymentOption.replace('netbanking', 'Net Banking').replace('upi', 'UPI ID')}</p>
          </div>
          {paymentOption === 'upi' && (
            <div className="mb-4">
              <p className="font-semibold">UPI ID:</p>
              <p className=' text-green-700 font-bold'>{upiId}</p>
            </div>
          )}
          {paymentOption === 'netbanking' && (
            <div className="mb-4">
              <p className="font-semibold">Net Banking Details:</p>
              <p className=' text-green-700 font-bold'>{netBankingDetails}</p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNextStep}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {step === 3 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>

    </div>
  );
};

export default DonateForms;
