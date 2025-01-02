import { Card, CardContent, Typography, Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface ServiceCardProps {
  Icon: SvgIconComponent;
  title: string;
  description: string;
}

export default function ServiceCard({
  Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
          p: { xs: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Icon
            sx={{
              fontSize: { xs: 40, md: 60 },
              color: "primary.main",
            }}
          />
        </Box>
        <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
}
