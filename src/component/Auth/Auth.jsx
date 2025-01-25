import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

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
const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        onClose={handleOnClose}
        open={
          location.pathname === "/account/login" ||
          location.pathname === "/account/register"
        }
      >
        <Box sx={style}>
          {location.pathname === "/account/login" ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
        </Box>
      </Modal>
    </>
  );
};
export default Auth;
