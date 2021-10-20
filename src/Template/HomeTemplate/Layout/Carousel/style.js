import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  relative: {
    position: "relative",
  },
  root: {
    height: "48vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "3% auto 0 auto",
    boxShadow:
      "rgb(50 50 93 / 61%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px",
    width: "100%",
    opacity: "0.3",
  },
  overLay: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    background: "black",
    width: "72%",
    height: "40vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "7% auto 0 auto",
    boxShadow:
      "rgb(50 50 93 / 61%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px",
    borderRadius: "16px",
    zIndex: 10,
  },
  overLayFooter: {
    background: "red",
    position: "absolute",
    bottom: "0",
    left: "0",
    height: "54vw",
    width: "100%",
    background: `linear-gradient(
      0deg, rgba(8,27,39,1) 12%, rgb(241 238 233 / 0%) 100%)`,
  },
});
