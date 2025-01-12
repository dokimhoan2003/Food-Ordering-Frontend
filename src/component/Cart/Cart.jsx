import {
  Divider,
  Card,
  Button,
  Modal,
  Box,
  Grid2,
  TextField,
} from "@mui/material";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const items = [1, 1];
const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  pincode: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});
const Cart = () => {
  const [open, setOpen] = useState(false);
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    console.log("formValue", values);
  };
  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p>Item Total</p>
                <p>$500</p>
              </div>
              <div className="flex justify-between">
                <p>Deliver Fee</p>
                <p>$500</p>
              </div>
              <div className="flex justify-between">
                <p>GST and Restaurant Charges</p>
                <p>$500</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between">
              <p>Total pay</p>
              <p>$1500</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10 text-green-500">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  item={item}
                  showButton={true}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                />
              ))}
              <Card className=" text-center w-64 p-5 space-y-5">
                <div>
                  <AddLocationAltIcon />
                </div>

                <div className="space-y-3">
                  <h1 className="font-semibold text-lg text-green-500">
                    Add New Address
                  </h1>
                  <Button
                    variant="contained"
                    fullWidth
                    color="success"
                    onClick={() => {
                      handleOpenAddressModal();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid2 container spacing={3}>
                <Grid2 size={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                  ></Field>
                  <ErrorMessage
                    name="streetAddress"
                    component="span"
                    className="text-red-500"
                  />
                </Grid2>
                <Grid2 size={6}>
                  <Field
                    as={TextField}
                    name="state"
                    label="state"
                    fullWidth
                    variant="outlined"
                  ></Field>
                  <ErrorMessage
                    name="state"
                    component="span"
                    className="text-red-500"
                  />
                </Grid2>
                <Grid2 size={6}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="pincode"
                    fullWidth
                    variant="outlined"
                  ></Field>
                  <ErrorMessage
                    name="pincode"
                    component="span"
                    className="text-red-500"
                  />
                </Grid2>
                <Grid2 size={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="city"
                    fullWidth
                    variant="outlined"
                  ></Field>
                  <ErrorMessage
                    name="city"
                    component="span"
                    className="text-red-500"
                  />
                </Grid2>
                <Grid2 size={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Deliver Here
                  </Button>
                </Grid2>
              </Grid2>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
