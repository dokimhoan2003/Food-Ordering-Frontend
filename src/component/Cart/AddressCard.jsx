import { Button, Card } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className="flex gap-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3">
        <h1 className="font-semibold text-lg text-green-500">Home</h1>
        <p>123, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {showButton && (
          <Button
            variant="outlined"
            color="success"
            fullWidth
            onClick={() => {
              handleSelectAddress(item);
            }}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;
