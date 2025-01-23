import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

export default function Header({ title, searchBar }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ color: "white", textDecoration: "none" }}
            >
              {title}
            </Typography>

            <Box display="flex" alignItems="center">
              <Button component={Link} to="/" sx={{ color: "white" }}>
                Home
              </Button>
              <Button component={Link} to="/about" sx={{ color: "white" }}>
                About
              </Button>

              {searchBar && (
                <Box display="flex" alignItems="center" ml={2}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
