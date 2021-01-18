import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Tooltip } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";

import { HashLink } from "react-router-hash-link";
import Countdown from "./clock.jsx";

import Background1 from "../../assets/Container1Background.png";
import Background4 from "../../assets/Container4Background.png";
import Background7 from "../../assets/Container7Background.png";
import Background9 from "../../assets/Container9Background.png";
import Background11 from "../../assets/Container11Background.png";

import WhitePaper from "../../assets/THEMOONFINANCE_Litepaper.pdf";

const styles = (theme) => ({
  root: {
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    background: "#f0f5ff",
    padding: "5px 10px",
    borderRadius: "10px",
    color: "#001ca1",
    "& h3": {
      fontWeight: "300",
    },
  },

  subtitle: {
    textTransform: "uppercase",
    margin: "20px 0px",
    textAlign: "initial",
  },

  ///////////////////////////////////////////////// HEADER ////////////////////////////////////////////////////

  header: {
    width: "100%",
    top: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  logo: {
    display: "flex",
    //paddingBottom: "60px",
    alignItems: "center",
    flex: 1,
  },
  flexy: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "& a": {
      textDecoration: "none",
    },
  },
  icon: {
    display: "flex",
  },
  links: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flex: "0",
    },
  },
  link: {
    margin: "0 10px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "20px",
    color: "#eaeaea",
    padding: "7px",
    borderRadius: "30px",
    fontWeight: "300",
    "&:hover": {
      //backgroundColor: "rgba(255,255,255,0.5)",
      textDecoration: "underline",
    },
  },

  /////////////////////////////////////////////////////////// Container 1 (Lunaswap) ////////////////////////////////////////////////////////////
  container1: {
    background: `url(${Background1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //backgroundColor: "#010312",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 30px 40px",
    justifyContent: "flex-start",
    alignItems: "center",
    color: colors.white,
  },
  description: {
    display: "flex",
    //textTransform: "uppercase",
    marginBottom: "30px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    "& h3": {
      marginRight: "7px",
    },
    "& div": {
      display: "flex",
      alignItems: "center",
    },
  },
  whiteText: {
    //color: colors.white,
    fontSize: "32px",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
    },
  },
  yellowText: {
    color: "#f8ce00ff",
    fontSize: "42px",
    fontStyle: "italic",
    marginRight: "14px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  boldText: {
    fontSize: "42px",
    fontStyle: "italic",
    marginRight: "14px !important",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  },

  assetIcon: {
    marginRight: "7px",
    height: "64px",
    [theme.breakpoints.down("sm")]: {
      height: "26px",
    },
  },

  lunaswapContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "85%",
    //marginTop: "40px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  presaleDescription: {
    display: "flex",
    textTransform: "uppercase",
    color: colors.white,
    justifyContent: "center",
    marginBottom: "20px",
    flexDirection: "column",
    textAlign: "center",

    "&h3": {
      fontSize: "20px",
    },

    [theme.breakpoints.down("md")]: {
      marginBottom: "0px",
      marginTop: "30px",
    },

    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  separator: {
    margin: "0 5px",
  },

  lunaswapDescription: {
    display: "flex",
    textTransform: "uppercase",
    color: colors.white,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  iconContainer: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
  },

  lunaswapButton: {
    marginTop: "40px",
  },
  walletAddress: {
    border: "2px solid",
    borderColor: "rgba(255, 255, 255, 0.6)",
    height: "60px",
    width: "300px",
    padding: "12px",
    color: colors.white,
    //border: "2px solid rgb(174, 174, 174)",
    borderRadius: "50px",
    display: "inline-grid",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid " + colors.white,
      //background: "rgba(47, 128, 237, 0.1)",
    },
    /*[theme.breakpoints.down("sm")]: {
      display: "flex",
      position: "absolute",
      top: "90px",
      border: "1px solid " + colors.borderBlue,
      background: colors.white,
    },*/
  },

  /////////////////////////////////////////////////////////// Container 2 (Introducing) ////////////////////////////////////////////////////////////

  container2: {
    //background: `url(${Background}) center center no-repeat`,
    backgroundColor: colors.white,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "65%",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: "60px 40px",
    color: "#001ca1",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  highlightText: {
    fontWeight: "300",
  },

  /////////////////////////////////////////////////////////// Container 3 (Megastake) ////////////////////////////////////////////////////////////

  container3: {
    //background: `url(${Background}) center center no-repeat`,
    backgroundColor: colors.gray,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "60px 40px",
    color: "#001ca1",
  },

  megastakeContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "85%",
    //marginTop: "40px",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",

      "& img": {
        marginTop: "20px",
      },
    },
  },

  megastakeTextContainer: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    fontWeight: "300",
    [theme.breakpoints.up("md")]: {
      marginRight: "40px",
    },
  },

  /////////////////////////////////////////////////////////// Container 4 (Features) ////////////////////////////////////////////////////////////

  container4: {
    background: `url(${Background4})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //backgroundColor: "#010312",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "60px 40px",
    color: colors.white,
  },

  featuresContainer: {
    flex: 1,
    display: "flex",
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
    //flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  featuresCard: {
    position: "relative",
    flex: "1",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },

    "& h3": {
      marginTop: "20px",
    },

    "& h4": {
      marginTop: "20px",
      maxWidth: "200px",
    },
  },

  featuresButton: {
    cursor: "pointer",
    textTransform: "uppercase",
    color: colors.white,
    backgroundColor: "#ffc400",
    padding: "7px",
    border: "2px solid #ffc400",
    borderRadius: "30px",
    fontWeight: "300",
    padding: "5px 20px",
    "&:hover": {
      borderColor: colors.white,
    },
  },

  /////////////////////////////////////////////////////////// Container 5 (Problems) ////////////////////////////////////////////////////////////

  container5: {
    backgroundColor: colors.white,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "60px 40px",
    color: "#001ca1",
  },

  problemsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "85%",
    //marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    textAlign: "justify",
  },

  problemsTextContainer: {
    display: "flex",
    flex: "1",
    alignItems: "flex-start",
    flexDirection: "column",
    fontWeight: "300",
    [theme.breakpoints.up("sm")]: {
      margin: "0 40px",
    },
  },

  listItem: {
    display: "flex",
    marginTop: "20px",

    "& img": {
      marginRight: "6px",
    },
  },

  problemsIcon: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },

  /////////////////////////////////////////////////////////// Container 6 (Solutions) ////////////////////////////////////////////////////////////

  container6: {
    backgroundColor: colors.gray,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "60px 40px",
    color: "#001ca1",
  },

  solutionsButton: {
    cursor: "pointer",
    textTransform: "uppercase",
    color: colors.white,
    backgroundColor: "#fa7269",
    padding: "7px",
    border: "2px solid #fa7269",
    borderRadius: "30px",
    fontWeight: "300",
    padding: "5px 20px",
    marginTop: "80px",
    textAlign: "center",
    "&:hover": {
      borderColor: colors.white,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },

  solutionsIcon: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },

  /////////////////////////////////////////////////////////// Container 7 (Ecosystem) ////////////////////////////////////////////////////////////

  container7: {
    background: `url(${Background7})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //backgroundColor: "#010312",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "60px 40px",
    color: colors.white,

    "& img": {
      margin: "20px",
    },
  },

  ecosystemContainer: {
    flex: 1,
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },

  /////////////////////////////////////////////////////////// Container 8 (Presale) ////////////////////////////////////////////////////////////

  container8: {
    //background: `url(${Background}) center center no-repeat`,
    backgroundColor: colors.white,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "65%",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: "60px 40px",
    color: "#001ca1",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  highlightText: {
    fontWeight: "300",
  },

  /////////////////////////////////////////////////////////// Container 9 (Roadmap) ////////////////////////////////////////////////////////////

  container9: {
    background: `url(${Background9})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //backgroundColor: "#010312",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "60px 40px",
    color: colors.white,

    "& img": {
      margin: "40px",
    },
  },

  /////////////////////////////////////////////////////////// Container 10 (Contact) ////////////////////////////////////////////////////////////

  container10: {
    backgroundColor: colors.white,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "65%",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    padding: "60px 40px",
    color: "#001ca1",
  },

  contactLink: {
    display: "flex",
    margin: "30px",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      margin: "10px",
    },
  },

  /////////////////////////////////////////////////////////// Container 11 (Footer) ////////////////////////////////////////////////////////////

  container11: {
    background: `url(${Background11})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //backgroundColor: "#010312",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "30px",
    color: colors.white,
  },
});

class Homepage extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* ----------------------------------------------------------------------  Container 1  -------------------------------------------------------------------------------------- */}
        <div className={classes.container1}>
          <div className={classes.header}>
            <div className={classes.logo}>
              <img
                alt=""
                src={require("../../assets/Logo.png")}
                height="50px"
              />
            </div>
            <div className={classes.links}>
              <div className={classes.flexy}>
                {/*<Typography
                  variant={"h4"}
                  className={classes.link}
                  style={{ color: "#f8ce00ff" }}
                  onClick={() => {
                    this.nav("presale");
                  }}
                >
                  Presale
                </Typography>*/}

                <Typography
                  variant={"h4"}
                  className={classes.link}
                  //style={{ color: "#f8ce00ff" }}
                  onClick={() => {
                    this.nav("platform");
                  }}
                >
                  Platform
                </Typography>

                <HashLink to="/home#features" smooth>
                  <Typography variant={"h4"} className={classes.link}>
                    Features
                  </Typography>
                </HashLink>
                <HashLink to="/home#ecosystem" smooth>
                  <Typography variant={"h4"} className={classes.link}>
                    Ecosystem
                  </Typography>
                </HashLink>
                <HashLink to="/home#roadmap" smooth>
                  <Typography variant={"h4"} className={classes.link}>
                    Roadmap
                  </Typography>
                </HashLink>
                <HashLink to="/home#contact" smooth>
                  <Typography variant={"h4"} className={classes.link}>
                    Contact
                  </Typography>
                </HashLink>
                <Typography
                  variant={"h4"}
                  className={classes.link}
                  style={{
                    backgroundColor: "#fff",
                    color: "#001ca1",
                    padding: "5px 10px",
                  }}
                >
                  <a
                    href={WhitePaper}
                    download="Moon_Finance_White_Paper.pdf"
                    className={`${classes.downloadFile} downloadFile`}
                  >
                    Litepaper
                  </a>
                </Typography>
              </div>
            </div>
          </div>

          <div className={classes.description}>
            <div>
              <Typography variant={"h3"} className={classes.whiteText}>
                THE FIRST EVER PASSIVE
              </Typography>
            </div>
            <div>
              <Typography variant={"h3"} className={classes.yellowText}>
                MEGASTAKE{" "}
              </Typography>
            </div>
            <div>
              <Typography variant={"h3"} className={classes.whiteText}>
                ON ETHEREUM{" "}
              </Typography>
            </div>
          </div>
          <div className={classes.description}>
            <div>
              <Typography variant={"h3"} className={classes.whiteText}>
                Stake
              </Typography>
            </div>
            <div>
              <Typography variant={"h3"} className={classes.boldText}>
                Rock{" "}
              </Typography>
              <img
                alt=""
                src={require("../../assets/Rock-logo.png")}
                className={classes.assetIcon}
              />
            </div>
            <div>
              <Typography variant={"h3"} className={classes.whiteText}>
                And earn{" "}
              </Typography>
            </div>
            <div>
              <Typography variant={"h3"} className={classes.boldText}>
                USDT{" "}
              </Typography>
              <img
                alt=""
                src={require("../../assets/USDT-icon.png")}
                className={classes.assetIcon}
              />
            </div>
            <div>
              <Typography variant={"h3"} className={classes.whiteText}>
                Daily{" "}
              </Typography>
            </div>
          </div>

          <div className={classes.lunaswapContainer}>
            <div className={classes.iconContainer}>
              <img
                alt=""
                src={require("../../assets/Container1Image.png")}
                //height="500px"
                style={{ maxHeight: "500px", maxWidth: "100%" }}
              />
            </div>
            <div className={classes.textContainer}>
              {/* ---------------------------------- At Presale period ---------------------------------------- */}
              <div className={classes.presaleDescription}>
                <div className={classes.description}>
                  <div>
                    <Typography variant={"h3"} className={classes.whiteText}>
                      COUNTDOWN TO
                    </Typography>
                  </div>
                  <div>
                    <Typography variant={"h3"} className={classes.yellowText}>
                      Presale{" "}
                    </Typography>
                  </div>
                </div>
              </div>
              <Countdown />
              <div
                className={classes.presaleDescription}
                style={{ marginTop: "20px" }}
              >
                <div>
                  <Typography variant={"h4"}>Don't forget to </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f8cf36",
                  }}
                >
                  <Typography variant={"h4"}>
                    Like{" "}
                    <i class="fa fa-thumbs-up" style={{ fontSize: "24px" }}></i>
                  </Typography>
                  <div className={classes.separator}>&#124;</div>
                  <Typography variant={"h4"}>
                    Share{" "}
                    <i class="fa fa-share" style={{ fontSize: "24px" }}></i>
                  </Typography>
                  <div className={classes.separator}>&#124;</div>
                  <Typography variant={"h4"}>
                    Comment{" "}
                    <i class="fa fa-comment" style={{ fontSize: "24px" }}></i>
                  </Typography>
                </div>
                <div>
                  <Typography variant={"h4"}>
                    to get all the latest updates on the official MoonFinance
                    Presale.{" "}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    variant={"h3"}
                    style={{
                      backgroundColor: "#f8cf36",
                      color: "black",
                      width: "75%",
                      padding: "5px",
                    }}
                  >
                    PRESALE REFFERAL PROGRAM BEING LAUNCHED SOON.
                  </Typography>
                </div>
              </div>

              {/* ---------------------------------- After Presale end ----------------------------------------- */}
              {/*<div className={classes.lunaswapDescription}>
                <div>
                  <Typography variant={"h2"}>Launch your</Typography>
                </div>
              </div>
              <div className={classes.lunaswapDescription}>
                <div>
                  <Typography variant={"h2"}>Lunaswap today</Typography>
                </div>
              </div>
              <div
                className={classes.lunaswapDescription}
                style={{ marginTop: "20px" }}
              >
                <div>
                  <Typography variant={"h4"}>
                    The Moon Finance’s cross-chain DEX on Polkadot that enables
                    exchange between DeFi payments and traditional marketplaces.
                  </Typography>
                </div>
              </div>
              <div className={classes.lunaswapButton}>
                <Typography
                  variant={"h4"}
                  className={classes.walletAddress}
                  noWrap
                  onClick={this.addressClicked}
                >
                  SIGN UP FOR LUNASWAP LAUNCH
                </Typography>
              </div>*/}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------  Container 2 -------------------------------------------------------------------------------------- */}
        <div className={classes.container2}>
          <div className={classes.title}>
            <Typography variant={"h3"}>Introducing</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography variant={"h2"}>Lunaswap</Typography>
          </div>
          <div className={classes.iconContainer}>
            <img
              alt=""
              src={require("../../assets/Container2Image.png")}
              //height="400px"
              style={{ maxHeight: "400px", maxWidth: "100%" }}
            />
          </div>
          <div className={classes.description}>
            <Typography variant={"h4"}>
              Cross-chain
              <span className={classes.highlightText}>
                {" "}
                value exchange mechanism allowing users to{" "}
              </span>
              trade directly
              <span className={classes.highlightText}> with each other </span>
              across any chain
              <span className={classes.highlightText}> on a </span>
              peer-to-peer basis
            </Typography>
          </div>
        </div>

        {/* ----------------------------------------------------------------------  Container 3 -------------------------------------------------------------------------------------- */}
        <div className={classes.container3}>
          <div className={classes.title}>
            <Typography variant={"h3"}>Stake and Earn</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography variant={"h2"}>Megastake</Typography>
          </div>

          <div className={classes.megastakeContainer}>
            <div className={classes.megastakeTextContainer}>
              <div>
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Megastake is the first of its kind. It allows users to
                  participate in staking and earn rewards directly on the
                  platform. In this case users are able to stake their ROCK to
                  earn USDT. Our platform aggregates users’ staking interest and
                  delegates assets to trusted validators on their behalf.
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Megastake is simple, secure and hassle-free. Users stake their
                  ROCK tokens and receive USDT rewards every day, with no action
                  at all required on the user’s part. In return, our platform
                  retains a small percentage of the yield to cover the various
                  operational, technical, and legal costs involved
                </Typography>
              </div>
            </div>

            <div className={classes.iconContainer}>
              <img
                alt=""
                src={require("../../assets/Container3Image.png")}
                //height="400px"
                style={{ maxHeight: "400px", maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------  Container 4 -------------------------------------------------------------------------------------- */}
        <div className={classes.container4} id="features">
          <div className={classes.title}>
            <Typography variant={"h3"}>Features</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography variant={"h2"}>Why us?</Typography>
          </div>
          <div className={classes.featuresContainer}>
            <div className={classes.featuresCard}>
              <img
                alt=""
                src={require("../../assets/Container4versatileIcon.png")}
                height="100px"
              />
              <Typography variant={"h3"}>VERSATILE</Typography>
              <Typography variant={"h4"}>
                Easy communication using any chat app
              </Typography>
            </div>
            <div className={classes.featuresCard}>
              <img
                alt=""
                src={require("../../assets/Container4interoperableIcon.png")}
                height="100px"
              />
              <Typography variant={"h4"}>INTEROPERABLE</Typography>
              <Typography variant={"h4"}>
                Value exchange across mutiple blockchains
              </Typography>
            </div>
            <div className={classes.featuresCard}>
              <img
                alt=""
                src={require("../../assets/Container4innovativeIcon.png")}
                height="100px"
              />
              <Typography variant={"h4"}>INNOVATIVE</Typography>
              <Typography variant={"h4"}>
                Trustworthy Swapping platform
              </Typography>
            </div>
            <div className={classes.featuresCard}>
              <img
                alt=""
                src={require("../../assets/Container4transparentIcon.png")}
                height="100px"
              />
              <Typography variant={"h4"}>TRANSPARENT</Typography>
              <Typography variant={"h4"}>
                Clear and honest activities on the chain
              </Typography>
            </div>
          </div>
          <Typography
            variant={"h3"}
            className={classes.featuresButton}
            onClick={() => {
              this.nav("platform");
            }}
          >
            Learn more
          </Typography>
        </div>

        {/* ----------------------------------------------------------------------  Container 5 -------------------------------------------------------------------------------------- */}
        <div className={classes.container5}>
          <div className={classes.problemsContainer}>
            <div className={classes.iconContainer}>
              <img
                alt=""
                src={require("../../assets/Container5Image.png")}
                style={{ maxHeight: "400px", maxWidth: "100%" }}
                className={classes.problemsIcon}
              />
            </div>

            <div className={classes.problemsTextContainer}>
              <div className={classes.title}>
                <Typography variant={"h3"}>Problem factors</Typography>
              </div>
              <div>
                <Typography variant={"h2"} className={classes.subtitle}>
                  Issues with the Digital Payment System
                </Typography>
              </div>
              <div className={classes.listItem}>
                <img
                  alt=""
                  src={require("../../assets/Container5problemIcon.png")}
                  height="24px"
                  className={classes.icon}
                />
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Centralized Finance (CeFi) requires third-party, therefore it
                  is slow.
                </Typography>
              </div>
              <div className={classes.listItem}>
                <img
                  alt=""
                  src={require("../../assets/Container5problemIcon.png")}
                  height="24px"
                  className={classes.icon}
                />
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Decentralized Finance (DeFi) is relatively new in the market,
                  therefore it is risky.
                </Typography>
              </div>
              <div className={classes.listItem}>
                <img
                  alt=""
                  src={require("../../assets/Container5problemIcon.png")}
                  height="24px"
                  className={classes.icon}
                />
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Decentralized Exchange (DEX) is Expensive.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------  Container 6 -------------------------------------------------------------------------------------- */}
        <div className={classes.container6}>
          <div className={classes.problemsContainer}>
            <div className={classes.problemsTextContainer}>
              <div className={classes.title}>
                <Typography variant={"h3"}>Creative Solutions</Typography>
              </div>
              <div>
                <Typography variant={"h2"} className={classes.subtitle}>
                  Powerful Swapping Methods
                </Typography>
              </div>
              <div className={classes.listItem}>
                <img
                  alt=""
                  src={require("../../assets/Container6solutionIcon.png")}
                  height="24px"
                  className={classes.icon}
                />
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Chat Apps are designed to perform the role of Decentralized
                  Exchanges (DEX).
                </Typography>
              </div>
              <div className={classes.listItem}>
                <img
                  alt=""
                  src={require("../../assets/Container6solutionIcon.png")}
                  height="24px"
                  className={classes.icon}
                />
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Social Media accounts are created to launch various DeFi
                  Marketplaces.
                </Typography>
              </div>
              <div className={classes.listItem}>
                <img
                  alt=""
                  src={require("../../assets/Container6solutionIcon.png")}
                  height="24px"
                  className={classes.icon}
                />
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Trustless Peer to Peer Payments are deposited on Escrow.
                </Typography>
              </div>
              <div className={classes.listItem}>
                <img
                  alt=""
                  src={require("../../assets/Container6solutionIcon.png")}
                  height="24px"
                  className={classes.icon}
                />
                <Typography variant={"h4"} style={{ fontWeight: "300" }}>
                  Blockchain technology is Invisible.
                </Typography>
              </div>
            </div>

            <div className={classes.iconContainer}>
              <img
                alt=""
                src={require("../../assets/Container6Image.png")}
                style={{ maxHeight: "400px", maxWidth: "100%" }}
                className={classes.solutionsIcon}
              />
            </div>
          </div>
          <Typography
            variant={"h3"}
            className={classes.solutionsButton}
            onClick={() => {
              this.nav("platform");
            }}
          >
            Sign up for lunaswap launch
          </Typography>
        </div>

        {/* ----------------------------------------------------------------------  Container 7 -------------------------------------------------------------------------------------- */}
        <div className={classes.container7} id="ecosystem">
          <div className={classes.title}>
            <Typography variant={"h3"}>Ecosystem</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography variant={"h2"}>Powered by</Typography>
          </div>
          <img
            alt=""
            src={require("../../assets/Container7polkadotLogo1.png")}
            //height="70px"
            style={{ maxHeight: "70px", maxWidth: "100%" }}
          />
          <img
            alt=""
            src={require("../../assets/Container7ethereumLogo1.png")}
            //height="70px"
            style={{ maxHeight: "70px", maxWidth: "100%" }}
          />
          <div className={classes.ecosystemContainer}>
            <img
              alt=""
              src={require("../../assets/Container7polkadotLogo2.png")}
              //height="125px"
              style={{ maxHeight: "125px" }}
            />
            <img
              alt=""
              src={require("../../assets/Container7ethereumLogo2.png")}
              //height="100px"
              style={{ maxHeight: "100px" }}
            />
          </div>
          <div className={classes.description}>
            <Typography variant={"h3"} style={{ marginTop: "50px" }}>
              LunaSwap
              <span className={classes.highlightText}>
                {" "}
                is perfectly designed to meet the needs of users looking for{" "}
              </span>
              inexpensive assets transfer.
            </Typography>
          </div>
          <Typography
            variant={"h3"}
            className={classes.featuresButton}
            onClick={() => {
              this.nav("platform");
            }}
          >
            Learn more
          </Typography>
        </div>

        {/* ----------------------------------------------------------------------  Container 8 -------------------------------------------------------------------------------------- */}
        <div className={classes.container8}>
          <div className={classes.title}>
            <Typography variant={"h3"}>PRE-SALE RAISED FUNDS</Typography>
          </div>

          <div className={classes.description} style={{ marginTop: "50px" }}>
            <Typography variant={"h4"}>
              <span className={classes.highlightText}>
                {" "}
                Advanced technologies ensures that{" "}
              </span>
              pre-sale raised funds and tokens
              <span className={classes.highlightText}>
                {" "}
                are securely locked into Liquidity Pools on Uniswap. After the
                pre-sale ROCK will be listed at{" "}
              </span>
              10x on Uniswap.
            </Typography>
          </div>

          <div className={classes.description}>
            <Typography variant={"h4"}>
              90%
              <span className={classes.highlightText}>
                {" "}
                of the liquidity presale raised will go into the liquidity pool
                and{" "}
              </span>
              10%
              <span className={classes.highlightText}>
                {" "}
                will be used for the CEX listings such as Hotbit, Biki, Bilaxy
                and Digifinex.{" "}
              </span>
            </Typography>
          </div>
        </div>

        {/* ----------------------------------------------------------------------  Container 9 -------------------------------------------------------------------------------------- */}
        <div className={classes.container9} id="roadmap">
          <div className={classes.title}>
            <Typography variant={"h3"}>Roadmap</Typography>
          </div>
          <div className={classes.iconContainer}>
            <img
              alt=""
              src={require("../../assets/Container9Roadmap.png")}
              //height="400px"
              style={{ maxHeight: "400px", maxWidth: "100%" }}
            />
          </div>

          <div className={classes.title}>
            <Typography variant={"h3"}>Non-Fungible Tokens</Typography>
          </div>
          <div>
            <Typography variant={"h2"} className={classes.subtitle}>
              Shooting Stars
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <img
              alt=""
              src={require("../../assets/Container9Cards.png")}
              //height="400px"
              style={{ maxHeight: "400px", maxWidth: "100%" }}
            />
          </div>
          <div className={classes.description}>
            <Typography variant={"h4"}>
              <span className={classes.highlightText}>
                {" "}
                Ease of access to our unique NFTs -{" "}
              </span>
              Shooting Stars
            </Typography>
          </div>
          <div className={classes.description} style={{ width: "80%" }}>
            <Typography variant={"h4"}>
              <span className={classes.highlightText}>
                {" "}
                The Moon Finance’s most unique and innovative collectible cards
                both on the platform as well as the NFT marketplace. These
                ensures that the ownership of each asset can be individually
                tracked and the asset precisely identified.{" "}
              </span>
            </Typography>
          </div>
        </div>

        {/* ----------------------------------------------------------------------  Container 10 -------------------------------------------------------------------------------------- */}
        <div className={classes.container10} id="contact">
          <div>
            <Typography variant={"h2"} className={classes.subtitle}>
              Contact Us
            </Typography>
          </div>
          <div className={classes.featuresContainer}>
            <div
              className={classes.contactLink}
              onClick={() =>
                window.open("https://twitter.com/finance_moon", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/Container10twitter.png")}
                height="80px"
                className={classes.icon}
              />
            </div>
            <div
              className={classes.contactLink}
              onClick={() =>
                window.open("https://t.me/themoonfinance", "_blank")
              }
            >
              <img
                alt=""
                src={require("../../assets/Container10telegram.png")}
                height="80px"
                className={classes.icon}
              />
            </div>
            <div
              className={classes.contactLink}
              onClick={() =>
                window.open(
                  "https://medium.com/@themoonfinance74/introduction-to-the-moon-finance-add764c104b3",
                  "_blank"
                )
              }
            >
              <img
                alt=""
                src={require("../../assets/Container10medium.png")}
                height="80px"
                className={classes.icon}
              />
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------  Container 11 -------------------------------------------------------------------------------------- */}
        <div className={classes.container11}>
          <div className={classes.iconContainer}>
            <img
              alt=""
              src={require("../../assets/Logo.png")}
              //height="100px"
              style={{ maxHeight: "100px", maxWidth: "100%" }}
            />
          </div>
          <div className={classes.flexy}>
            <HashLink to="/home#features" smooth>
              <Typography variant={"h4"} className={classes.link}>
                Features
              </Typography>
            </HashLink>
            <HashLink to="/home#ecosystem" smooth>
              <Typography variant={"h4"} className={classes.link}>
                Ecosystem
              </Typography>
            </HashLink>
            <HashLink to="/home#roadmap" smooth>
              <Typography variant={"h4"} className={classes.link}>
                Roadmap
              </Typography>
            </HashLink>
            <HashLink to="/home#contact" smooth>
              <Typography variant={"h4"} className={classes.link}>
                Contact
              </Typography>
            </HashLink>
          </div>
        </div>
      </div>
    );
  }

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Homepage)));
