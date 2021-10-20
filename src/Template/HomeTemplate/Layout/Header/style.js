import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    backgroundColor: "#0c2738",
    color: "black",
    zIndex: "20",
  },
  userInfo: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    transition: "all .5s",
    "&:hover": {
      color: "white",
    },
  },
});
