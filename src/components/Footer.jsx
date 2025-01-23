import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        py: 2,
      }}
    >
      <Typography variant="body2" align="center">
        Copyright &copy; MyTodoList.com
      </Typography>
    </Box>
  );
};

export default Footer;
