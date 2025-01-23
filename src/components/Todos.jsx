import { Card, CardContent, Button, Box, Typography } from "@mui/material";

export const Todos = ({ todos, onDelete }) => {
  return (
    <Box sx={{ minHeight: "70vh", margin: "20px auto" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Todos List
      </Typography>
      {todos.length === 0
        ? "No To-dos to display"
        : todos.map((todo) => (
            <Card key={todo.sno} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{todo.title}</Typography>
                <Typography variant="body2">{todo.desc}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(todo)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
    </Box>
  );
};
