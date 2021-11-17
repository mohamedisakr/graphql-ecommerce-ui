import {BrowserRouter, Routes, Route} from "react-router-dom"
import CategoryAdd from "./admin/CategoryAdd"
import CategoryList from "./admin/CategoryList"

const App = () => {
  return (
    <div className="App">
      <h4>Welcome to E-Commerce</h4>
      <BrowserRouter>
        <Routes>
          <Route strict exact path="/categories" element={CategoryList} />
          <Route strict exact path="/categories/create" element={CategoryAdd} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
