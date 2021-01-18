import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Select, MenuItem, FormControl } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import i18n from "../../i18n";
import { colors } from "../../theme";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import SecurityIcon from "@material-ui/icons/Security";
import DescriptionIcon from "@material-ui/icons/Description";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import ForumIcon from "@material-ui/icons/Forum";
import BarChartIcon from "@material-ui/icons/BarChart";
import BuildIcon from "@material-ui/icons/Build";

import BuiltWithModal from "../builtwith/builtwithModal.jsx";
import Logo from "../../assets/Logo.png";

import Store from "../../stores";
const store = Store.store;

const styles = (theme) => ({
  footer: {
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    background: colors.white,
    //borderRadius: '50px 50px 0px 0px',
    //border: '1px solid '+colors.borderBlue,
    color: "#939393",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  heading: {
    color: colors.white,
    marginBottom: "12px",
    paddingBottom: "9px",
    width: "fit-content",
    marginLeft: "30px",
  },
  link: {
    paddingRight: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px 10px",
    },
  },
  separator: {
    margin: "0 10px",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(23,123,211,0.5)",

    "& img": {
      maxHeight: "67px",
    },
  },
  icon: {
    fill: colors.white,
    marginRight: "6px",
  },
  builtWith: {
    display: "flex",
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  community: {
    display: "flex",
    padding: "0px 24px",
    cursor: "default",
  },
  communityLink: {
    display: "flex",
    alignItems: "center",
    "& h4": {
      cursor: "pointer",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  socials: {
    display: "flex",
    flex: "1",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  hr: {
    height: "5px",
    width: "90%",
    backgroundColor: colors.white,
    opacity: 0.3,
  },
});

class Footer extends Component {
  constructor(props) {
    super();

    this.state = {
      modalBuiltWithOpen: false,
    };
  }

  render() {
    const { classes, t, location } = this.props;
    const { modalBuiltWithOpen } = this.state;

    if (location.pathname === "" || location.pathname === "/") {
      return null;
    }

    return (
      <div>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo_Icon" />
        </div>
        <div className={classes.footer}>
          <div className={classes.builtWith}>
            <Typography variant={"h4"}>
              &copy; 2020 www.themoon.finance
            </Typography>
          </div>

          <div className={classes.community}>
            {/*<div
              className={classes.communityLink}
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1RKILLUtuH6KdB2a1ib64uGAT21iljGEtncPiDpj7V68/edit#heading=h.574fgj1k64vh",
                  "_blank"
                )
              }
            >
              <Typography variant={"h4"}>
                Introduction to The Moon Finance
              </Typography>
              <div className={classes.separator}>&#124;</div>
            </div>
            <div
              className={classes.communityLink}
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1wspAUVJ3mchYfmg0Q2lf3GaqYaO1k0vC2MU5yLQYy5U/edit#",
                  "_blank"
                )
              }
            >
              <Typography variant={"h4"}>FAQ</Typography>
              <div className={classes.separator}>&#124;</div>
            </div>
            <div
              className={classes.communityLink}
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1egLax3Oausl00emwTCQG12dxRTBmI4efwAyb_j3vvIk/edit#heading=h.fnuzp7f01k6j",
                  "_blank"
                )
              }
            >
              <Typography variant={"h4"}>The Moon Finance Glossary</Typography>
              <div className={classes.separator}>&#124;</div>
            </div>
            <div
              className={classes.communityLink}
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/18r-zIFXwKqAU_YAh7dNvO3rE-0f6q-MGSBpu5uDc7yo/edit#heading=h.er4l2t42sg1d",
                  "_blank"
                )
              }
            >
              <Typography variant={"h4"}>How-To Guides</Typography>
            </div>*/}
          </div>

          <div className={classes.socials}>
            <div
              className={classes.link}
              onClick={() =>
                window.open("https://twitter.com/finance_moon", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/twitter.svg")}
                height="24px"
                className={classes.icon}
              />
            </div>
            <div
              className={classes.link}
              onClick={() =>
                window.open(
                  "https://medium.com/@themoonfinance74/introduction-to-the-moon-finance-add764c104b3",
                  "_blank"
                )
              }
            >
              <img
                alt=""
                src={require("../../assets/medium.svg")}
                height="24px"
                className={classes.icon}
              />
            </div>
            <div
              className={classes.link}
              onClick={() =>
                window.open("https://t.me/themoonfinance", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/telegram.svg")}
                height="24px"
                className={classes.icon}
              />
            </div>
            <div
              className={classes.link}
              onClick={() =>
                window.open("https://github.com/TheMoon-Finance", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/github.svg")}
                height="24px"
                className={classes.icon}
              />
            </div>
          </div>
          {modalBuiltWithOpen && this.renderBuiltWithModal()}
        </div>
      </div>
    );
  }

  renderBuiltWithModal = () => {
    return (
      <BuiltWithModal
        closeModal={this.closeBuiltWithModal}
        modalOpen={this.state.modalBuiltWithOpen}
      />
    );
  };

  builtWithOverlayClicked = () => {
    this.setState({ modalBuiltWithOpen: true });
  };

  closeBuiltWithModal = () => {
    this.setState({ modalBuiltWithOpen: false });
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Footer)));
