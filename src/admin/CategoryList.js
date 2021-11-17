import React from "react"
import {gql, useQuery} from "@apollo/client"

const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      id
      name
      createdAt
      updatedAt
    }
  }
`

const CategoryList = () => {
  const {loading, error, data} = useQuery(GET_ALL_CATEGORIES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div>
      <h2>Category List</h2>
      {console.log(data)}
      {data.categories.map((category) => {
        return (
          <div>
            <div>{category.name}</div>
            <div>{category.id}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryList
