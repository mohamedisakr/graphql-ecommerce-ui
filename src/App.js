import {BrowserRouter, Routes, Route} from "react-router-dom"
import CategoryAdd from "./admin/CategoryAdd"
import CategoryList from "./admin/CategoryList"
import ProductList from "./components/ProductList"

const App = () => {
  return (
    <div className="App">
      <h4>Welcome to E-Commerce</h4>
      <BrowserRouter>
        <Routes>
          <Route strict exact path="/categories" element={<CategoryList />} />
          <Route
            strict
            exact
            path="/categories/create"
            element={<CategoryAdd />}
          />
          <Route strict exact path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
