import { Button, Card } from "@mui/material";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://media.istockphoto.com/id/1302272289/vi/anh/c%C6%A1m-g%C3%A0-n%C6%B0%E1%BB%9Bng-t%E1%BB%AB-m%E1%BB%99t-qu%E1%BA%A7y-h%C3%A0ng-rong-%E1%BB%9F-malaysia.jpg?s=2048x2048&w=is&k=20&c=A-v5Lqm61-qvytwKq1pXuaKJfebLVbdZyU-WgrnYuwI="
          alt=""
        />
        <div>
          <p>Cơm gà</p>
          <p>12$</p>
        </div>
      </div>
      <Button className="cursor-not-allowed">{"Completed"}</Button>
    </Card>
  );
};
export default OrderCard;
