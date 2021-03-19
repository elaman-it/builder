import classes from "./Backdrop.module.css";

const Backdrop = ({ show }) => {
  return (
    show ? <div className={classes.Backdrop}></div> : null
  );
}

export default Backdrop;