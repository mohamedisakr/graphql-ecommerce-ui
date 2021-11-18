import React, {useState} from "react"
import {gql, useMutation} from "@apollo/client"
import {ToastContainer, toast, Zoom} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CREATE_NEW_CATEGORY = gql`
  mutation AddCategory($name: String!) {
    categoryAdd(name: $name) {
      id
      name
    }
  }
`
const CategoryAdd = () => {
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const [createCategory, {loading, data}] = useMutation(CREATE_NEW_CATEGORY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const handleChange = (e) => {
    setName(e.target.value)
  }

  // toast.success(`Category ${name} created successfully.`, {
  //   position: toast.POSITION.TOP_CENTER,
  //   autoClose: 2000,
  //   hideProgressBar: true,
  // })

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)
    // call api mutation function
    createCategory({variables: {name}})
    setName("")
    toast(`Category ${name} created successfully.`, {
      position: toast.POSITION.TOP_LEFT,
      className: "success-toast",
      draggable: true,
    })
  }

  const categoryAddForm = () => {
    return (
      <div>
        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-muted" htmlFor="categoryName">
              Category Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              aria-describedby="emailHelp"
              placeholder="Enter Category Name"
              value={name}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Create New Category
          </button>
        </form>
      </div>
    )
  }
  return <div>{categoryAddForm()}</div>
}

export default CategoryAdd
