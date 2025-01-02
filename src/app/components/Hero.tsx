import { Box, Button, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: { xs: "60vh", md: "40vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          mb: 2,
        }}
      >
        Tu Farmacia de Confianza
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          color: "text.secondary",
          mb: 4,
        }}
      >
        Cuidando tu salud las 24 horas del día
      </Typography>
      {/* <Button
        variant="contained"
        size="large"
        sx={{
          px: { xs: 4, md: 6 },
          py: { xs: 1.5, md: 2 },
        }}
      >
        Ver Productos
      </Button> */}
    </Box>
  );
}
