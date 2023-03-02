import React, { useEffect, useState } from "react"
import axiosInstance from "../Axios/axiosInstance"
import { Link } from "react-router-dom"


const HomePage = () => {
  const [products, setProducts] = useState([])
  
  const data = async () => {
    try {
      const response = await axiosInstance.get(`products/`, {})
      setProducts(response.data.results)
      console.log("rec321", response.data.results)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])

  return (
    <div>
      
      <div className="relative overflow-x-auto mx-16 mt-20">
      
        <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold ">PRODUCTS LIST</h1>
        <Link to="/add"><button type="button" className="text-white bg-gray-800 rounded px-4 py-2">ADD</button></Link>
        </div>
        
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Expiration Date
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product,index) => (
              <tr className="bg-gray-200">
                <td className="px-6 py-4">{index+1}</td>
                <td className="px-6 py-4">{product.product_name}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.colour}</td>
                <td className="px-6 py-4">{product.expiration_date.split("-").reverse().join("-")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomePage
