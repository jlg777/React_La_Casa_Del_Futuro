import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const CardsProducts = ({ productsFiltered }) => {
  //console.log(productsFiltered);
  return (
    <>
      {productsFiltered.map((product) => (
        <Card
          sx={{
            maxWidth: 345,
            transition: "0.2s",
            "&:hover": { transform: "scale(1.05)" },
          }}
          key={product.id}
        >
          <CardActionArea sx={{ ":clicked": { borderBottom: "none" } }}>
            {" "}
            <CardMedia
              sx={{ height: 140 }}
              image={product.images[0]}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">
              <Link to={`/products/${product.id}`}>Learn More</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
export default CardsProducts;
