import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

class Loader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        style={{ position: "absolute", left: "0px", right: "0px", top: "0px" }}
      >
        <LinearProgress
          {...this.props}
          classes={{
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary,
          }}
        />
      </div>
    );
  }
}

const styles = (props) => ({
  colorPrimary: {
    //backgroundColor: "#fe5600",
    backgroundColor: "black",
  },
  barColorPrimary: {
    //backgroundColor: "#4a3a8a",
    backgroundColor: "#166cba",
  },
});

export default withStyles(styles)(Loader);
