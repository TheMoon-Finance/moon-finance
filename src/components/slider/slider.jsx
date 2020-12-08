import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";
import { colors } from "../../theme";

const styles = (props) => ({
  root: {
    height: 8,
    margin: "15px 0px 30px",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    color: "#000",
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  markLabel: {
    color: colors.white,
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "5px",
  },
  mark: {
    display: "none",
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundImage:
      "linear-gradient(to right, #ff5c93 0%, #e4ea3f 52.2346%, #55ffac 100%)",
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundImage:
      "linear-gradient(to right, #ff5c93 0%, #e4ea3f 52.2346%, #55ffac 100%)",
  },
});

class PrettoSlider extends Component {
  render() {
    const { classes } = this.props;

    const marks = [
      {
        value: 0,
        label: "0%",
      },
      {
        value: 25,
        label: "25%",
      },
      {
        value: 50,
        label: "50%",
      },
      {
        value: 75,
        label: "75%",
      },
      {
        value: 100,
        label: "100%",
      },
    ];

    return (
      <Slider
        //valueLabelDisplay="auto"
        defaultValue={50}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        marks={marks}
        {...this.props}
        classes={{
          root: classes.root,
          thumb: classes.thumb,
          markLabel: classes.markLabel,
          mark: classes.mark,
          valueLabel: classes.valueLabel,
          track: classes.track,
          rail: classes.rail,
        }}
      />
    );
  }
}

export default withStyles(styles)(PrettoSlider);
