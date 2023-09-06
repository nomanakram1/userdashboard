import { Gradient } from "@/components";
import { Avatar, AvatarGroup, Grid, Stack, Typography } from "@mui/material";
export const Navbar = () => {
  return (
    <Grid
      container
      sx={{
        background: "white",
        padding: "0px 15px",
        height: "70px",
        width: "100%",
      }}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Grid
        item
        spacing={3}
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="5px"
      >
        <Avatar sx={{ background: "transparent" }}>{Gradient}</Avatar>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Hi</span> John,
        </Typography>
      </Grid>
      <Grid
        item
        spacing={3}
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="5px"
      >
        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
          Collaborators (10):
        </Typography>
        <AvatarGroup max={10}>
          <Avatar
            alt="Remy Sharp"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Travis Howard"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Cindy Baker"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Agnes Walker"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Remy Sharp"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Travis Howard"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Cindy Baker"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Agnes Walker"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Agnes Walker"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
          <Avatar
            alt="Agnes Walker"
            src="avatar_1.png"
            sx={{ width: 34, height: 34 }}
          />
        </AvatarGroup>
      </Grid>
      <Grid
        item
        spacing={3}
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="5px"
      >
        <Stack spacing={0} di>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px", color: "black" }}
          >
            Marvin McKinney
          </Typography>
          <Typography
            sx={{ fontWeight: "300", fontSize: "14px", color: "#8D8D8D" }}
          >
            marving@gmail.com
          </Typography>
        </Stack>
        <Avatar
          sx={{
            background: "red",
            borderRadius: "12px",
            width: "50px",
            height: "50px",
          }}
          variant="square"
          alt="img"
          src="avatar_1.png"
        ></Avatar>
      </Grid>
    </Grid>
  );
};
