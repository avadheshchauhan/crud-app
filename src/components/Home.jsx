import quote from "../Assests/Images/quote.jpg";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <Box>
      <img
        src={quote}
        alt="home_image"
        style={{
          width: "80vw",
          marginLeft: "10%",
          height: "900px",
          marginTop: "1px",
        }}
      />
    </Box>
  );
};

export default Home;
