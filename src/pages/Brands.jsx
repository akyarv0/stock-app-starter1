import React from 'react'
import { useEffect } from "react"
// import useAxios from "../services/useAxios"
import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import BrandCard from "../components/BrandCard"
import BrandModal from '../components/BrandModal'
import { useState } from "react";


const Brands = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });



const { getStock } = useStockRequest()
const { brands } = useSelector((state) => state.stock)

useEffect(() => {
  getStock("brands")
}, [])
  return (
    <div>
    <Typography variant="h4" color={"error"} mb={2}>
Brands
    </Typography>

    <Button variant="contained" onClick={handleOpen}>New Brand</Button>

    <BrandModal   open={open}
    handleClose={handleClose}
    info={info}
    setInfo={setInfo} />

    <Grid container gap={2} mt={3} justifyContent={"center"}>
      {brands.map((brand) => (
        <Grid item key={brand._id}>
          <BrandCard brand={brand} handleOpen={handleOpen} setInfo={setInfo}/>
        </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default Brands