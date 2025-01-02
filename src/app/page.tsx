"use client"

import { Box, Container, Grid } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const services = [
  {
    Icon: LocalHospitalIcon,
    title: "Recetas Médicas",
    description: "Surtimos todo tipo de recetas",
  },
  {
    Icon: LocalShippingIcon,
    title: "Entrega a Domicilio",
    description: "Llevamos tus medicamentos a casa",
  },
  {
    Icon: MedicalServicesIcon,
    title: "Consulta Farmacéutica",
    description: "Asesoría profesional",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">
          <Hero />

          <Box
            sx={{
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 0 },
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              sx={{ mt: { xs: 2, md: 4 } }}
            >
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ServiceCard {...service} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
