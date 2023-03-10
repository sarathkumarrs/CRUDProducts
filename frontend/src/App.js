import HomePage from "./Pages/HomePage"
import AddProductPage from "./Pages/AddProductPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
