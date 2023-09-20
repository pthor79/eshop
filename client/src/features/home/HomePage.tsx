import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography } from "@mui/material";

const HomePage = () => {
  var items = [
    {
      image: "/images/hero1.jpg",
    },
    {
      image: "/images/hero2.jpg",
    },
    {
      image: "/images/hero3.jpg",
    },
  ];

  return (
    <>
      <Carousel
        sx={{ width: "100%" }}
        next={() => {
          /* Do stuff */
        }}
        prev={() => {
          /* Do other stuff */
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
        <Typography variant="h2">Welcome to the shop!</Typography>
      </Box>
    </>
  );
};

const Item = (props: any) => {
  return (
    <Box
      component={"img"}
      src={props.item.image}
      display="flex"
      justifyContent="center"
      width={"100%"}
      maxHeight={"700px"}
    ></Box>
  );
};

export default HomePage;
