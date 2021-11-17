import React, {useState} from "react"

const CategoryAdd = () => {
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)
  }

  const categoryAddForm = () => {
    return (
      <div>
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
