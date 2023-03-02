import React, { useEffect, useState } from "react"
import axiosInstance from "../Axios/axiosInstance"
import { Link } from "react-router-dom"

const HomePage = () => {
  const [from, setFrom] = useState(null)
  const [end, setEnd] = useState(null)
  const [products, setProducts] = useState([])
  const [value, setValue] = useState("");
  console.log(value)
  const [count, setCount] = useState(1)


  const onChange = (event) => {
    setValue(event.target.value);
    data()
  };
  const data_filter = async () => {
    try {
      const response = await axiosInstance.post(`/admin/payment_details`, {
        from:from,
        end:end,
        

      })
      console.log(response.data,"322")
      
      if (response.data[0] == null){
        setFrom(null)
        setEnd(null)
       
      }
      
      setProducts(response.data.results)
  
      
      
    } catch (err) {
      console.log(err)
    }
  }
  const data = async () => {
    try {
      const response = await axiosInstance.get(`products?page=${count}&search=${value}`, {})
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
      <div className="relative overflow-x-auto mx-6 mt-20">
        <div className="flex justify-between mb-4">
          <h1 className="text-4xl font-bold ">PRODUCTS LIST</h1>
          <Link to="/add">
            <button
              type="button"
              className="text-white bg-gray-800 rounded px-4 py-2"
            >
              ADD
            </button>
          </Link>
        </div>
        <div date-rangepicker className="flex justify-end  mb-4  ">
          <div className="relative">
            <input
               onChange={(evt) => {setFrom(evt.target.value)}}
              name="start"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  px-4 py-2"
              placeholder="Select date start"
            />
          </div>
          <span className="mx-4 mt-1 text-gray-500">to</span>
          <div className="relative">
            <input
              name="end"
              type="date"
              onChange={(evt) => { setEnd(evt.target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  px-4 py-2"
              placeholder="Select date end"
            />
          </div>
          <button
            type="button"
            onClick={data_filter}
            className="py-2.5 px-2 ml-4 mr-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none bg-black rounded-lg border border-gray-200 "
          >
            SEARCH
          </button>
        </div>
        <div className=" flex justify-end items-center mb-4">
          <div className="relative border rounded-md">
            <input
              type="text"
              name="search"
              value={value}
              onChange={onChange}

              className="h-10 w-72 pr-8 pl-5 rounded z-0 shadow focus:outline-none text-sm font-normal"
              placeholder="Search Product"
            />

            <div className="absolute top-3 right-3 btn">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search </span>
            </div>
          </div>
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
            {products?.map((product, index) => (
              <tr className="bg-gray-200">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{product.product_name}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.colour}</td>
                <td className="px-6 py-4">
                  {product.expiration_date.split("-").reverse().join("-")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-4">
          {count>1?
        <button
            type="button"
            onClick={()=>{setCount(count-1)
            data()}}
            className="py-2.5 px-2 ml-4 mr-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none bg-black rounded-lg border border-gray-200 "
          >
            PREV
          </button>:<button
            type="button"
            disabled
            className="py-2.5 px-2 ml-4 mr-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none bg-black rounded-lg border border-gray-200 "
          >
            PREV
          </button>
          }
          <button
            type="button"
            onClick={()=>{setCount(count+1);
            data();}}
            className="py-2.5 px-2 ml-4 mr-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none bg-black rounded-lg border border-gray-200 "
          >
            NEXT
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default HomePage
