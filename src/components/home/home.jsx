import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";

import Background from "../../assets/homeBackground.jpg";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    //maxWidth: "1200px",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  investedContainerLoggedOut: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    marginTop: "40px",
    [theme.breakpoints.up("md")]: {
      minWidth: "1400px",
    },
  },
  investedContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "85%",
    marginTop: "40px",
    [theme.breakpoints.up("md")]: {
      minWidth: "1400px",
    },
  },

  portfolioContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    top: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  gray: {
    color: colors.darkGray,
  },
  between: {
    width: "40px",
    height: "40px",
  },
  titleBalance: {
    //padding: "28px 30px",

    //background: colors.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  prettyAlign: {
    display: "flex",
    alignItems: "center",
  },
  infoIcon: {
    fontSize: "1em",
    marginRight: "6px",
  },
  assetSummary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  },
  assetIcon: {
    display: "flex",
    alignItems: "center",
    verticalAlign: "middle",
    borderRadius: "20px",
    height: "30px",
    width: "30px",
    textAlign: "center",
    cursor: "pointer",
    marginRight: "12px",
  },
  heading: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
    alignItems: "flex-end",
    color: "#eaeaea",
    textTransform: "uppercase",
  },
  headingName: {
    display: "flex",
    alignItems: "center",
    width: "325px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      flex: 1,
    },
  },
  flexy: {
    display: "flex",
    alignItems: "center",
  },
  vault: {
    borderBottom: "1px solid rgba(25, 101, 233, 0.2)",
    padding: "12px",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  sectionHeading: {
    color: colors.darkGray,
    width: "100%",
    marginLeft: "54px",
  },
  inline: {
    display: "flex",
    alignItems: "baseline",
  },
  symbol: {
    paddingLeft: "6px",
  },
  symbolAt: {
    paddingLeft: "6px",
    color: colors.darkGray,
  },
  basedOnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  presale: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    display: "flex",
  },
  links: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flex: "0",
    },
  },
  link: {
    marginRight: "20px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "20px",
    color: "#eaeaea",
    padding: "7px",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  },

  contribute: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5e9767",
    color: "#eaeaea",
    textTransform: "uppercase",
    fontSize: "30px",
  },

  contract: {
    width: "85%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#eaeaea",
    textTransform: "uppercase",
    textAlign: "center",
  },
  token: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    backgroundColor: "#d71056",
    color: colors.white,
    textTransform: "uppercase",
    textAlign: "center",
  },
  buyModal: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.white,
    color: colors.black,
    padding: "20px",
    "& h3": {
      marginTop: "15px",
    },
  },

  input: {
    "&::placeholder": {
      color: "#161616",
    },
    color: "#161616",
    backgroundColor: "#dbdbdb",
    borderRadius: "5px !important",
  },
  cssOutlinedInput: {
    borderRadius: "5px !important",
  },
  notchedOutline: {
    border: "1px solid",
    borderColor: "white !important",
  },

  actionButton: {
    color: colors.white,
    borderRadius: "5px",
    backgroundColor: "#5e9767",
    borderColor: "white !important",
    margin: "15px 0",
    "&:hover": {
      border: "1px solid",
      borderColor: "#dbdbdb !important",
      backgroundColor: "#5e9767",
    },
  },

  buttonText: {
    fontSize: "24px",
  },

  description: {
    marginTop: "28px",
    maxWidth: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#eaeaea",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      projectAmount: "",
      liquidityAmount: "",
      tokenPrice: 1 / 12,
    };

    this.handleProjectAmountChange = this.handleProjectAmountChange.bind(this);
    this.handleLiquidityAmountChange = this.handleLiquidityAmountChange.bind(
      this
    );
  }

  handleProjectAmountChange = (e) => {
    this.setState({
      projectAmount: e.target.value ? Math.abs(e.target.value) : "",
    });
  };

  handleLiquidityAmountChange = (e) => {
    this.setState({
      liquidityAmount: e.target.value ? Math.abs(e.target.value) : "",
    });
  };

  render() {
    const { classes, location } = this.props;

    return (
      <div className={classes.root}>
        <div className={`${classes.header} header`}>
          <div className={`${classes.presale} presale`}> </div>
          <div className={`${classes.icon} icon`}></div>

          <div
            className={`${classes.links} links`}
            onClick={() => {
              this.nav("platform");
            }}
          >
            <Typography variant={"h4"} className={`${classes.link} link`}>
              Platform
            </Typography>
            <Typography variant={"h4"} className={`${classes.link} link`}>
              White Paper
            </Typography>
          </div>
        </div>
        <div className={classes.heading}>
          <Typography variant={"h2"}>
            Putting the power back in the peoples hands
          </Typography>
        </div>
        <div className={classes.investedContainer}>
          <div className={classes.portfolioContainer}>
            <div className={classes.titleBalance}>
              <div className={classes.contribute}>
                <Typography variant={"h3"}>
                  Contribute to the project
                </Typography>
              </div>
              <div className={classes.contract}>
                <Typography variant={"h3"}>
                  This contract IS FOR THE TEAM TO DEVELOP THE PROTOCOL AND
                  LAUNCH THE VAULTS
                </Typography>
              </div>
              <div className={classes.token}>
                <Typography variant={"h3"}>ROCK tokens</Typography>
              </div>
              <div className={classes.buyModal}>
                <Typography variant={"h3"}>ROCK AMOUNT</Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={this.state.projectAmount}
                  onChange={this.handleProjectAmountChange}
                  /*onChange={(e) => {
                    this.props.setSendAmount(e.target.value);
                  }}*/
                  placeholder={"0 ROCK"}
                  variant="outlined"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                    classes: {
                      root: classes.cssOutlinedInput,
                      input: classes.input,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <Typography variant={"h3"}>YOUR WALLET ADDRESS</Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  /*onChange={(e) => {
                    this.props.setSendAmount(e.target.value);
                  }}*/
                  placeholder={"0x..."}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      input: classes.input,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <Typography variant={"h3"} style={{ color: "#5e9767" }}>
                  Buy Price: 0.08333333 ETH | 1 ROCK
                </Typography>
                <Typography variant={"h4"} style={{ color: "#161616" }}>
                  {"You must send"}{" "}
                  {this.state.projectAmount * this.state.tokenPrice}{" "}
                  {"ETH for "}
                  {this.state.projectAmount ? this.state.projectAmount : 0}{" "}
                  {"ROCK"}
                </Typography>
                <Button
                  className={classes.actionButton}
                  variant="outlined"
                  color="primary"
                  onClick={this.onTrade}
                  fullWidth
                >
                  <Typography className={classes.buttonText} variant={"h4"}>
                    BUY ROCK TOKENS
                  </Typography>
                </Button>
              </div>
              <div className={classes.description}>
                <Typography variant={"h3"}>
                  By Contributing to our project You will drive the development
                  forward making genration finance a success and we have you to
                  thanks for that.
                </Typography>
              </div>
            </div>

            <div className={classes.between}></div>

            <div className={classes.titleBalance}>
              <div className={classes.contribute}>
                <Typography variant={"h3"}>
                  Contribute to the liquidity pool
                </Typography>
              </div>
              <div className={classes.contract}>
                <Typography variant={"h3"}>
                  This contract is for direct uniswap liquidity only
                </Typography>
              </div>
              <div className={classes.token}>
                <Typography variant={"h3"}>ROCK tokens</Typography>
              </div>
              <div className={classes.buyModal}>
                <Typography variant={"h3"}>ROCK AMOUNT</Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={this.state.liquidityAmount}
                  onChange={this.handleLiquidityAmountChange}
                  /*onChange={(e) => {
                    this.props.setSendAmount(e.target.value);
                  }}*/
                  placeholder={"0 ROCK"}
                  variant="outlined"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                    classes: {
                      root: classes.cssOutlinedInput,
                      input: classes.input,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <Typography variant={"h3"}>YOUR WALLET ADDRESS</Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  /*onChange={(e) => {
                    this.props.setSendAmount(e.target.value);
                  }}*/
                  placeholder={"0x..."}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      input: classes.input,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <Typography variant={"h3"} style={{ color: "#5e9767" }}>
                  Buy Price: 0.08333333 ETH | 1 ROCK
                </Typography>
                <Typography variant={"h4"} style={{ color: "#161616" }}>
                  {"You must send"}{" "}
                  {this.state.liquidityAmount * this.state.tokenPrice}{" "}
                  {"ETH for "}
                  {this.state.liquidityAmount
                    ? this.state.liquidityAmount
                    : 0}{" "}
                  {"ROCK"}
                </Typography>
                <Button
                  className={classes.actionButton}
                  variant="outlined"
                  color="primary"
                  onClick={this.onTrade}
                  fullWidth
                >
                  <Typography className={classes.buttonText} variant={"h4"}>
                    LUNA LIQUIDITY EVENT
                  </Typography>
                </Button>
              </div>
              <div className={classes.description}>
                <Typography variant={"h3"}>
                  By Contributing to the liquidity building event you are
                  ensuring the success so the token and the growth of genration
                  finance is assured.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));
