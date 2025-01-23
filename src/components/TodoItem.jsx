import { Button, Typography, Box } from "@mui/material";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h6">{todo.title}</Typography>
      <Typography variant="body2">{todo.desc}</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onDelete(todo)}
      >
        Delete
      </Button>
    </Box>
  );
};
