/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Please fill all the fields");
      return;
    }
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <Box sx={{ margin: "20px 0" }}>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <TextField
          label="To-do Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="To-do Description"
          variant="outlined"
          fullWidth
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          sx={{ marginBottom: "10px" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add To-do
        </Button>
      </form>
    </Box>
  );
};
