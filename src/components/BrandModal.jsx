import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import useStockRequest from "../services/useStockRequest";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
const BrandModal = ( { open, handleClose, info, setInfo }) => {
const {postBrand, putBrand} = useStockRequest()

const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();

   postBrand(info)

    //? modal ı kapıtıyoruz
    handleClose();
  };




    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained" >
            {info._id ? "UPDATE" : "ADD BRAND"}

            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default BrandModal