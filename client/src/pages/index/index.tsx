import { Box, FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

const shortcuts: {
  name: string;
  link: string;
  color: string;
}[] = [
  { name: "Wydarzenia", link: "/wydarzenia", color: "blue" },
  { name: "Projekty", link: "/projekty", color: "green" },
  { name: "Organizacje", link: "/organizacje", color: "purple" },
];

export default function Index() {
  const [isBeautified, setIsBeautified] = useState(false);

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        p: 4,
      }}
    >
      <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
        System zarządzania Organizacjami Studenckimi
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={isBeautified}
            onChange={(e) => setIsBeautified(e.target.checked)}
            color="secondary"
          />
        }
        label="Upiększ"
      />

      {isBeautified ? (
        <Grid container spacing={2} justifyContent="center">
          {[...Array(3)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <img
                src={`https://cataas.com/cat?width=400&height=300&random=${Math.random()}`}
                alt="Cat"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              mt: 8,
              flexWrap: "wrap",
            }}
          >
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.name}
                to={shortcut.link}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    width: 256,
                    height: 128,
                    bgcolor: shortcut.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {shortcut.name}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
