import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  movieItem: {
    width: "100%",
    borderRadius: "14px",
    height: "400px",
    transition: "all .5s",
    boxShadow:
      "rgb(50 50 93 / 61%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  item: {
    transition: "all .5s",
    "&:hover": {
      transform: "scale(1.05)",
      borderRadius: "10px",
    },
  },
  loadMoreButton: {
    marginTop: "30px !important",
    position: "absolute !important",
    left: "50%",
    transform: "translateX(-50%) !important",
    backgroundColor: "white",
    padding: "10px 20px",
    borderRadius: "10px",
  },
  displayNone: {
    display: "none",
  },
  viewMore: {
    color: "#081b27 !important",
    backgroundPosition: "-100% !important",
  },
  rate: {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-around",
    marginBottom: "10px",
    fontSize: "1rem",
    zIndex: "10",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#cb1111",
    padding: "10px",
    height: "40px",
    width: "80px",
    borderRadius: "8px",
    boxShadow:
      "rgb(50 50 93 / 61%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px",
    top: 0,
  },
});
