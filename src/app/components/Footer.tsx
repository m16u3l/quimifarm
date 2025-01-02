import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", py: 3, mt: 8 }}
    >
      <Typography textAlign="center">
        © 2024 QuimiFarm. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
