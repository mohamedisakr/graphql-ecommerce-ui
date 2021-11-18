import React from "react"
import {gql, useQuery} from "@apollo/client"
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material"

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
      <Grid container spacing={3}>
        {data.categories.map((category) => (
          <Grid item md={4} key={category.id}>
            <Card>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  image={category.photo}
                  title={category.name}
                ></CardMedia> */}
                <CardContent>
                  <Typography>{category.name}</Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Typography>${category.price}</Typography>
                <Button size="small" color="primary">
                  Add To Cart
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* {data.categories.map((category) => {
        return (
          <div key={category.id}>
            <div>
              {category.id} | {category.name}
            </div>
          </div>
        )
      })} */}
    </div>
  )
}

export default CategoryList
