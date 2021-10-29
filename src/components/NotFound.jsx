import notFound from "../Assests/Images/NotFound.jpg";

const NotFound = () => {
  return (
    <img
      src={notFound}
      alt="not_found"
      style={{ marginLeft: "30%", marginTop: "50px" }}
    />
  );
};

export default NotFound;
