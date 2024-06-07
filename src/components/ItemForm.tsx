import { Food } from "@/types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

interface ItemFormProps {
  formTitle: string;
  item?: Food;
  open: boolean;
  handleOnClose: () => void;
  handleOnSubmit: (event: any) => void;
  handleOnChangeIngredient: (event: any, ing: string) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  border: "0px solid #000",
};

export default function ItemForm({
  formTitle,
  open,
  handleOnSubmit,
  handleOnClose,
  item = {} as Food,
}: ItemFormProps) {
  return (
    <Modal
      sx={{ backdropFilter: "blur(10px)" }}
      open={open}
      onClose={handleOnClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box borderRadius={20} sx={style}>
        <form onSubmit={handleOnSubmit}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {formTitle}
              </Typography>
              <TextField
                label="Image URL"
                name="thumbnail"
                value={item.thumbnail}
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />

              <TextField
                label="Name"
                name="name"
                value={item.name}
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <TextField
                label="Description"
                name="description"
                value={item.description}
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Ingredients"
                name="ingredients"
                value={item.ingredients}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </CardContent>
            <CardActions
              className="flex flex-wrap gap-2 p-2 mx-2 mb-2 justify-between items-center"
              disableSpacing
              sx={{ mt: "auto" }}
            >
              <Button
                type="submit"
                className="text-white"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
              <Button onClick={handleOnClose} variant="contained" color="error">
                Cancel
              </Button>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Modal>
  );
}
