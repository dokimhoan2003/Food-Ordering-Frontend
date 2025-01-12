import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light", // Đặt chế độ là "light"
    primary: {
      // main: "#1976d2", // Màu xanh dương nhạt, phù hợp cho light mode
      main: "#22c55e",
    },
    secondary: {
      main: "#f50057", // Màu hồng đậm, tạo điểm nhấn cho light mode
    },
    black: {
      main: "#333333", // Màu xám đậm cho các thành phần văn bản
    },
    background: {
      main: "#ffffff", // Nền trắng cho light mode
      default: "#f4f6f8", // Nền xám nhạt cho toàn bộ trang
      paper: "#ffffff", // Nền trắng cho các thẻ (card) và các thành phần giấy
    },
    textColor: {
      main: "#000000", // Văn bản màu đen cho độ tương phản cao trong light mode
    },
  },
});
