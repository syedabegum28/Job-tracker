import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CustomAppBar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Application Tracker
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About
        </Button>
        <Button color="inherit" component={Link} href="/faq">
          FAQ
        </Button>
      </Toolbar>
    </AppBar>
  );
}