import { Food } from "@/types/Food";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

export default function FoodCard({ food }: { food: Food }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={food.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {food.name}
        </Typography>
        <Typography
          className="text-justify"
          variant="body2"
          color="text.secondary"
        >
          {food.description}
        </Typography>
      </CardContent>
      <CardActions
        className="flex justify-between px-4 mb-2"
        disableSpacing
        sx={{ mt: "auto" }}
      >
        <Button color="primary" variant="outlined">
          <CiEdit size={25} />
        </Button>
        <Button color="error" variant="outlined">
          <AiOutlineDelete size={25} />
        </Button>
      </CardActions>
    </Card>
  );
}
