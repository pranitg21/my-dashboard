import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiShoppingBag } from "react-icons/hi";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


const CreateProduct = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      phone,
      loanAmount: parseFloat(loanAmount),
      loanTerm: parseInt(loanTerm)
    }


    try {
      console.log("Submitting data:", formData);  // ✅ Log data before sending

      const response = await axios.post("http://localhost:8080/api/loans", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Response received:", response);  // ✅ Log response

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Response text:", response.data);  // ✅ Log response text

      alert("✅ Form submitted successfully!");  // Show success alert
      // navigate('/loans/all');  // Navigate to another route after successful submission
    } catch (error) {
      console.error("Error:", error.message);  // ✅ Log errors in console
      alert("❌ Failed to submit: " + error.message);
    }

  };



  return (
    <>
      <div>
        <Layout>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiShoppingBag}>Ecommerce</Breadcrumb.Item>
            <Breadcrumb.Item
              className="cursor-default"
              onClick={() => navigate("/product")}
            >
              Product
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="cursor-default"
              onClick={() => navigate("/product/create-product")}
            >
              Create
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="bg-white shadow dark:bg-gray-300 pt-1 pl-3 pb-4 mt-3 rounded-lg">
            {/* Title */}
            <p className="mt-5 mb-5 text-2xl font-medium mr-4">
              Create Loan
            </p>

            {/* Form */}
            <div>
              <form className="gap-4 pr-4 space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fullName} onChange={(e) => setFullName(e.target.value)} required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Full name..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email                  </label>
                  <input
                    type="text"
                    id="name"
                    value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email ..."
                  />
                </div>
                <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                  </div>
                  <input type="text"
                   id="phone-input"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"             
                   value={phone} onChange={(e) => setPhone(e.target.value)} required 
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Loan Amount                  </label>
                  <input
                    type="text"
                    id="name"
                    value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your loan amount..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Loan Term                  </label>
                  <input
                    type="text"
                    id="name"
                    value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your loan term..."
                  />
                </div>
                <div>
                  <div className="mt-5 mb-5">
                    <button
                      type="Submit"
                      class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default CreateProduct;
