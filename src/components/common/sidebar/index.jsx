import {
  DoubleArrow,
  Logout,
  Message,
  News,
  Notification,
  Plus,
  Round,
  Setting,
  Users,
} from "@/components";
import { Avatar, Box, Grid, Stack } from "@mui/material";

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <Grid
        item
        md={1}
        sm={1}
        lg={1}
        xlg={1}
        sx={{
          background: "white",
          position: "relative",
          flexShrink: "0",
          width: "60px",
        }}
        container
        direction="column"
        flexShrink="0"
        justifyContent="space-between"
        alignItems="center"
        py={3}
      >
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{
              borderRadius: "12px",
              width: "44px",
              height: "44px",
            }}
            variant="square"
            alt="img"
            src="avatar_1.png"
          ></Avatar>
          <Avatar
            sx={{
              background: "#1E1E1E",
              borderRadius: "16px",
              width: "52px",
              height: "52px",
              color: "white",
              fontSize: "24px",
              fontWeight: "600",
            }}
            variant="square"
          >
            D
          </Avatar>
          <Avatar
            sx={{
              background:
                "linear-gradient(90deg, #725DFF -0.12%, #B265FF 100%)",
              border: "1px solid #5C43FF",
              height: "40px",
              width: "40px",
            }}
          >
            {Plus}
          </Avatar>
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ cursor: "pointer" }}>{Round}</Box>
          <Box sx={{ cursor: "pointer" }}>{Message}</Box>
          <Box sx={{ cursor: "pointer" }}>{Users}</Box>
          <Box sx={{ cursor: "pointer" }}>{News}</Box>
          <Box sx={{ cursor: "pointer" }}>{Notification}</Box>
          <Box sx={{ cursor: "pointer" }}>{Setting}</Box>
        </Stack>
        <Box sx={{ cursor: "pointer" }}>{Logout}</Box>
        <Box
          sx={{
            position: "absolute",
            cursor: "pointer",
            height: "22px",
            width: "22px",
            background: "#F9F9F9",
            color: "gray",
            top: "35px",
            right: "-12px",
            borderRadius: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems: "Center",
          }}
        >
          {DoubleArrow}
        </Box>
      </Grid>
      <Grid
        item
        md={isSidebarOpen ? 2 : 0}
        sm={isSidebarOpen ? 2 : 0}
        lg={isSidebarOpen ? 2 : 0}
        sx={{ background: "#F9F9F9" }}
      ></Grid>
    </>
  );
};
