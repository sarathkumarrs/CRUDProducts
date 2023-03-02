import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axiosInstance from '../Axios/axiosInstance'

const AddProductPage = () => {
    const navigate = useNavigate()
    const [product_name, addProductName] = useState("")
    const [stock, addStock] = useState("")
    const [colour, addColour] = useState("")
    const [price, addPrice] = useState("")
    const [expiration_date, addExpirationDate] = useState("")
    console.log(product_name)

    const onSubmit = async (e) => {
        e.preventDefault()
    
        const post = {
          product_name: product_name,
          stock: stock,
          price: price,
          colour: colour,
          
          expiration_date: expiration_date,
        }
    
        try {
          const res = await axiosInstance.post("add/product/", post)
          console.log(res.status)
          if (res.status == 201) {
            addProductName("")
            addStock("")
            addPrice("")
            addColour("")
            addExpirationDate("")
            alert("Added Successfully")
            navigate('/');
          }
        } catch (e) {
          alert(e)
        }
      }
  return (
    <div>
       <div>
      <div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4 ">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div className="w-full p-6 m-auto bg-white border rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-2xl font-bold text-center text-black ">
                 ADD PRODUCT
                </h1>
                <form className="mt-6" onSubmit={onSubmit}>
                  <div className="mb-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      PRODUCT NAME
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        addProductName(event.target.value)
                      }}
                      value={product_name}
                    />
                  </div>
                  <div className="number">
                    <label className="block text-sm font-semibold text-gray-800">
                     STOCK
                    </label>
                    <input
                      type="number"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        addStock(event.target.value)
                      }}
                      value={stock}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      PRICE
                    </label>
                    <input
                      type="number"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        addPrice(event.target.value)
                      }}
                      value={price}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      Color
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        addColour(event.target.value)
                      }}
                      value={colour}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      EXPIRY DATE
                    </label>
                    <input
                      type="date"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        addExpirationDate(event.target.value)
                      }}
                      value={expiration_date}
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md "
                    >
                      SUBMIT
                    </button>
                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddProductPage