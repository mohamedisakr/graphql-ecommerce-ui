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

const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      description
      price
      category {
        name
      }
      quantity
      photo
      shipping
      createdAt
      updatedAt
    }
  }
`
const ProductList = () => {
  const {loading, error, data} = useQuery(GET_ALL_PRODUCTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div>
      <h2>Products</h2>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={product.photo}
                  title={product.name}
                ></CardMedia>
                <CardContent>
                  <Typography>{product.name}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductList
