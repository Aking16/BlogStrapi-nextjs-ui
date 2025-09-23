import { Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <Stack spacing={1}>
      <Typography variant="h2" fontWeight="bold">
        Title
      </Typography>
      <Stack direction="row" spacing={5}>
        <Typography>Name</Typography>
        <Typography>Date</Typography>
        <Typography>15 min to read</Typography>
      </Stack>
      <div style={{ marginTop: "1.5rem" }}>body</div>
    </Stack>
  );
}
