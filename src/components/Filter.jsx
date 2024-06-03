import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function SliderSizes({ setFilter }) {
  const [minPrice, setMinPrice] = useState(0);

  const marks = [
    {
      value: 0,
      label: "$ 0",
    },
    {
      value: 2000,
      label: "$ 2.000",
    },
  ];

  function valuetext(value) {
    return `$${value}`;
  }

  const handleMinPrice = (e) => {
    const newMinPrice = e.target.value;
    setMinPrice(newMinPrice);
    //console.log(minPrice);
    setFilter((prevFilter) => ({
      ...prevFilter,
      minPrice: newMinPrice,
    }));
  };

  const [category, setCategory] = useState("all");
  const handleChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setFilter((prevFilter) => ({
      ...prevFilter,
      category: newCategory,
    }));
  };
  //console.log(category);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "95%",
        }}
      >
        <Box sx={{ width: 300 }}>
          <Typography gutterBottom variant="h5" component="div">
            <AttachMoneyIcon /> Precio
          </Typography>

          <Slider
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            marks={marks}
            max={2000}
            onChange={handleMinPrice}
            value={minPrice}
          ></Slider>
        </Box>

        <Box sx={{ width: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="categoria"
              onChange={handleChange}
            >
              <MenuItem value={"all"}>Todos</MenuItem>
              <MenuItem value={"furniture"}>Muebles</MenuItem>
              <MenuItem value={"beauty"}>Belleza</MenuItem>
              <MenuItem value={"fragrances"}>Perfumes</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
}
