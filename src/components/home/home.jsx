import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import SecurityIcon from "@material-ui/icons/Security";

import Background from "../../assets/Background.png";
import Logo from "../../assets/Logo.png";
import Stars from "../../assets/Stars.png";

import Comet_Loans_Planet from "../../assets/Comet_Loans_Planet.png";
import Cover_Planet from "../../assets/Cover_Planet.png";
import Earn_Planet from "../../assets/Earn_Planet.png";
import Luna_Vault_Planet from "../../assets/Luna_Vault_Planet.png";
import Stats_Planet from "../../assets/Stats_Planet.png";
import Apr_Planet from "../../assets/Apr_Planet.png";

import Comet_Loans_Icon from "../../assets/Comet.png";
import Cover_Icon from "../../assets/cover.png";
import Earn_Icon from "../../assets/earn.png";
import Luna_Vault_Icon from "../../assets/Luna Vault.png";
import Stats_Icon from "../../assets/stats.png";
import Apr_Icon from "../../assets/apr.png";

import "./homeStyle.scss";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    //backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: 1,
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  card: {
    flex: "1",
    height: "25vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: "0px",
    transition: "background-color 0.2s linear",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
      minHeight: "50vh",
    },
  },
  earn: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.pink,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
      "& .description": {
        display: "block",
        color: colors.white,
        padding: "48px",
        textAlign: "center",
      },
    },
    "& .title": {
      color: colors.pink,
    },
    "& .icon": {
      color: colors.pink,
    },
    "& .description": {
      display: "none",
    },
  },
  zap: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.blue,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
      "& .description": {
        display: "block",
        color: colors.white,
        padding: "48px",
        textAlign: "center",
      },
    },
    "& .title": {
      color: colors.blue,
      display: "block",
    },
    "& .soon": {
      color: colors.blue,
      display: "none",
    },
    "& .icon": {
      color: colors.blue,
    },
    "& .description": {
      display: "none",
    },
  },
  apr: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.lightBlack,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
      "& .description": {
        display: "block",
        color: colors.white,
        padding: "48px",
        textAlign: "center",
      },
    },
    "& .title": {
      color: colors.lightBlack,
    },
    "& .icon": {
      color: colors.lightBlack,
    },
    "& .description": {
      display: "none",
    },
  },
  vault: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.tomato,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
      "& .description": {
        display: "block",
        color: colors.white,
        padding: "48px",
        textAlign: "center",
      },
    },
    "& .title": {
      color: colors.tomato,
    },
    "& .icon": {
      color: colors.tomato,
    },
    "& .description": {
      display: "none",
    },
  },
  cover: {
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.compoundGreen,
      "& .title": {
        color: colors.white,
      },
      "& .icon": {
        color: colors.white,
      },
      "& .description": {
        display: "block",
        color: colors.white,
        padding: "48px",
        textAlign: "center",
      },
    },
    "& .title": {
      color: colors.compoundGreen,
    },
    "& .icon": {
      color: colors.compoundGreen,
    },
    "& .description": {
      display: "none",
    },
  },
  title: {
    padding: "24px",
    paddingBottom: "0px",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "24px",
    },
  },
  icon: {
    fontSize: "60px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "100px",
    },
  },
  link: {
    textDecoration: "none",
  },

  //styles

  logo: {
    position: "absolute",
    left: "45px",
    top: "30px",

    "& img": {
      height: "107px",
    },
  },

  stars: {},

  circle: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "inline-block",
    position: "absolute",
    textAlign: "center",
  },

  big: {
    width: "150px",
    height: "150px",
  },

  one: {
    left: "-36em",
    top: "-14em",
    height: "324px",
    width: "324px",
    cursor: "pointer",

    backgroundImage: `url(${Comet_Loans_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "57%",
      marginTop: "50px",
    },

    "&:hover": {
      top: "-14.1em",
    },
  },

  two: {
    top: "-24em",
    left: " -5em",
    height: "200px",
    width: "200px",
    cursor: "pointer",

    backgroundImage: `url(${Cover_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "63%",
      marginTop: "25px",
    },

    "&:hover": {
      top: "-24.1em",
    },
  },

  three: {
    right: " -27em",
    top: "-10.2em",
    height: "186px",
    width: "186px",
    cursor: "pointer",

    backgroundImage: `url(${Earn_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "67%",
      marginTop: "32px",
    },

    "&:hover": {
      top: "-10.3em",
    },
  },

  four: {
    left: "-31em",
    bottom: "-16em",
    height: "186px",
    width: "186px",
    cursor: "pointer",

    backgroundImage: `url(${Luna_Vault_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "63%",
      marginTop: "20px",
    },

    "&:hover": {
      bottom: "-15.9em",
    },
  },

  five: {
    bottom: "-24em",
    left: "-4em",
    height: "181px",
    width: "181px",
    cursor: "pointer",

    backgroundImage: `url(${Stats_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "65%",
      marginTop: "25px",
    },

    "&:hover": {
      bottom: "-23.9em",
    },
  },

  six: {
    right: "-25em",
    bottom: "-14em",
    height: "180px",
    width: "180px",
    cursor: "pointer",

    backgroundImage: `url(${Apr_Planet})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "& img": {
      height: "65%",
      marginTop: "25px",
    },

    "&:hover": {
      bottom: "-13.9em",
    },
  },
});

class Home extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    const { classes, t, location } = this.props;

    return (
      <div className={classes.root}>
        <div className={`${classes.logo}`}>
          <img src={Logo} alt="Stats_Icon" />
        </div>
        <div class="stars">
          <img src={Stars} alt="Stars_Icon" />
        </div>
        <div className={`${classes.circle} ${classes.big}`}>
          <a
            onClick={() => {
              this.nav(location.pathname + "zap");
            }}
          >
            <div className={`${classes.circle} ${classes.one}`}>
              <img src={Comet_Loans_Icon} alt="Comet_Loans_Icon" />
            </div>
          </a>
          <a
          /*onClick={() => {
              this.nav(location.pathname + "cover");
            }}*/
          >
            <div className={`${classes.circle} ${classes.two}`}>
              <img src={Cover_Icon} alt="Cover_Icon" />
            </div>
          </a>
          <a
            onClick={() => {
              this.nav(location.pathname + "earn");
            }}
          >
            <div className={`${classes.circle} ${classes.three}`}>
              <img src={Earn_Icon} alt="Earn_Icon" />
            </div>
          </a>
          <a
            onClick={() => {
              this.nav(location.pathname + "vaults");
            }}
          >
            <div className={`${classes.circle} ${classes.four}`}>
              <img src={Luna_Vault_Icon} alt="Luna_Vault_Icon" />
            </div>
          </a>
          <a
            onClick={() => {
              this.nav(location.pathname + "stats");
            }}
          >
            <div className={`${classes.circle} ${classes.five}`}>
              <img src={Stats_Icon} alt="Stats_Icon" />
            </div>
          </a>
          <a
            onClick={() => {
              this.nav(location.pathname + "dashboard");
            }}
          >
            <div className={`${classes.circle} ${classes.six}`}>
              <img src={Apr_Icon} alt="Apr_Icon" />
            </div>
          </a>
        </div>

        {/*<Card
          className={`${classes.card} ${classes.apr}`}
          onClick={() => {
            this.nav(location.pathname + "dashboard");
          }}
        >
          <BarChartIcon className={`${classes.icon} icon`} />
          <Typography variant={"h3"} className={`${classes.title} title`}>
            Dashboard
          </Typography>
          <Typography
            variant={"h4"}
            className={`${classes.description} description`}
          >
            {
              "Get a quick glance at how your portfolio is growing while invested in yearn's products."
            }
          </Typography>
        </Card>*/}
      </div>
    );
  }

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));
