import { Container, Divider, Link, Paper, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        Oop - we could not find what you are looking for
      </Typography>
      <Divider />
      <Link href="/catalog">Go back to shop</Link>
    </Container>
  );
};

export default NotFound;
