import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Cardproduct = ({ productsFiltered }) => {
  const navigate = useNavigate();
  const [userAPI, setUserAPI] = useState([]);
  const { idProduct } = useParams();
  const productID = idProduct;
  const [value, setValue] = React.useState(2);

  const filterIDProduct = (productsFiltered) => {
    const newProdtcID = productsFiltered.filter((filteredProduct) => {
      //console.log("aca", filteredProduct.id);
      //console.log(productID);
      return filteredProduct.id.toString() === productID;
    });
    //console.log(newProdtcID[0]);
    let prodtc = newProdtcID[0];
    console.log(prodtc);
    setUserAPI(prodtc);
  };

  useEffect(() => {
    filterIDProduct(productsFiltered);
    //console.log(productsFiltered);
  }, []);
  //console.log(userAPI);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={userAPI && userAPI.images ? userAPI.images[0] : ""}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userAPI.sku}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Valoraciones</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(-1)}>
          Volver
        </Button>
      </CardActions>
    </Card>
  );
};
export default Cardproduct;
