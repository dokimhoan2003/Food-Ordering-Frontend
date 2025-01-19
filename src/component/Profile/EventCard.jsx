import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://media.istockphoto.com/id/1354745158/photo/nflation-growth-of-food-sales-or-growth-of-market-basket-or-consumer-price-index-concept.jpg?s=612x612&w=is&k=20&c=SbswCuDpI74fcR5xDHLCnO4PhLBJjEFlab8lgCUqVmI="
        />
        <CardContent>
          <Typography variant="h5">Women Day Festival</Typography>
          <Typography variant="body2">
            giảm 50% khi đặt đơn hàng đầu tiên
          </Typography>
          <div className="py-2 space-y-2">
            <p>{"hanoi"}</p>
            <p className="text-sm text-blue-500">February 14, 2024 12:00 AM</p>
            <p className="text-sm text-red-500">February 14, 2024 12:00 AM</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};
export default EventCard;
