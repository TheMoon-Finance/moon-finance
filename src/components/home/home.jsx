import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Tooltip } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
import UnlockModal from "../unlock/unlockModal.jsx";

import Background from "../../assets/homeBackground.jpg";

import ENS from "ethjs-ens";
import { CONNECTION_CONNECTED, CONNECTION_DISCONNECTED } from "../../constants";

import Store from "../../stores";
const emitter = Store.emitter;
const store = Store.store;

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
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  header: {
    width: "100%",
    top: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    flexWrap: "wrap",
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
  heading: {
    //marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
    alignItems: "flex-end",
    textAlign: "center",
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
    paddingBottom: "60px",
    alignItems: "center",
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  walletAddress: {
    color: colors.white,
    padding: "12px",
    border: "2px solid rgb(174, 174, 174)",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid " + colors.white,
      background: "rgba(47, 128, 237, 0.1)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      position: "absolute",
      top: "90px",
      border: "1px solid " + colors.white,
      background: colors.white,
    },
  },
  connectedDot: {
    background: colors.compoundGreen,
    opacity: "1",
    borderRadius: "10px",
    width: "10px",
    height: "10px",
    marginRight: "3px",
    marginLeft: "6px",
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
    textAlign: "center",
    backgroundColor: "#5e9767",
    color: "#eaeaea",
    textTransform: "uppercase",
    fontSize: "30px",
  },

  contract: {
    width: "85%",
    height: "10%",
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

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 20,
    marginTop: "0px",
  },
}))(Tooltip);

class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      modalOpen: false,
      account: store.getStore("account"),
      projectAmount: "",
      liquidityAmount: "",
      tokenPrice: 1 / 9,
    };

    this.handleProjectAmountChange = this.handleProjectAmountChange.bind(this);
    this.handleLiquidityAmountChange = this.handleLiquidityAmountChange.bind(
      this
    );
  }

  componentWillMount() {
    emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
  }

  componentWillUnmount() {
    emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.removeListener(
      CONNECTION_DISCONNECTED,
      this.connectionDisconnected
    );
  }

  connectionConnected = () => {
    this.setState({ account: store.getStore("account") });
    this.setAddressEnsName();
  };

  connectionDisconnected = () => {
    this.setState({ account: store.getStore("account") });
  };

  setAddressEnsName = async () => {
    const provider = store.getStore("web3context").library.provider;
    const account = store.getStore("account");
    const { address } = account;
    const network = provider.networkVersion;
    const ens = new ENS({ provider, network });
    const addressEnsName = await ens.reverse(address).catch(() => {});
    if (addressEnsName) {
      this.setState({ addressEnsName });
    }
  };

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

  buyToken = () => {
    let amount = this.state.projectAmount * this.state.tokenPrice;
    if (isMobile) {
      Swal.fire("Please visit desktop to connect MetaMask wallet");
    } else {
      store.buyToken(store.getStore("account"), amount);
    }
  };

  addLiguidity = () => {
    let amount = this.state.liquidityAmount * this.state.tokenPrice;
    if (isMobile) {
      Swal.fire("Please visit desktop to connect MetaMask wallet");
    } else {
      store.buyToken(store.getStore("account"), amount);
    }
  };

  render() {
    const { classes } = this.props;

    const { account, addressEnsName, modalOpen } = this.state;

    var address = null;
    if (account.address) {
      address = account.address;
    }
    const addressAlias = addressEnsName || address;

    return (
      <div className={classes.root}>
        <div className={`${classes.header} header`}>
          <div className={`${classes.presale} presale`}>
            <div>
              {address && (
                <Typography
                  variant={"h4"}
                  className={classes.walletAddress}
                  noWrap
                  onClick={this.addressClicked}
                >
                  {addressAlias}
                  <div className={classes.connectedDot}></div>
                </Typography>
              )}
              {!address && (
                <Typography
                  variant={"h4"}
                  className={classes.walletAddress}
                  noWrap
                  onClick={this.addressClicked}
                >
                  Connect your wallet
                </Typography>
              )}
            </div>
          </div>

          <div className={`${classes.icon} icon`}>
            <img
              alt=""
              src={require("../../assets/Moon-logo.png")}
              height="100px"
            />
          </div>

          <div className={`${classes.links} links`}>
            <div className={`${classes.flexy} flexy`}>
              <Typography
                variant={"h4"}
                className={`${classes.link} link`}
                onClick={() => {
                  this.nav("platform");
                }}
              >
                Platform
              </Typography>
            </div>
            <div className={`${classes.flexy} flexy`}>
              <div
                className={classes.link}
                onClick={() =>
                  window.open("https://twitter.com/finance_moon", "_blank")
                }
              >
                <img
                  alt=""
                  src={require("../../assets/twitter_white.svg")}
                  height="30px"
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
                  src={require("../../assets/medium_white.svg")}
                  height="30px"
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
                  src={require("../../assets/telegram_white.svg")}
                  height="30px"
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
                  src={require("../../assets/github_white.svg")}
                  height="30px"
                  className={classes.icon}
                />
              </div>
            </div>
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
                  value={addressAlias}
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

                {isMobile && (
                  <Button
                    className={classes.actionButton}
                    variant="outlined"
                    color="primary"
                    onClick={this.buyToken}
                    fullWidth
                  >
                    <Typography className={classes.buttonText} variant={"h4"}>
                      BUY ROCK TOKENS
                    </Typography>
                  </Button>
                )}
                {!isMobile && address && (
                  <Button
                    className={classes.actionButton}
                    variant="outlined"
                    color="primary"
                    onClick={this.buyToken}
                    disabled={!address}
                    fullWidth
                  >
                    <Typography className={classes.buttonText} variant={"h4"}>
                      BUY ROCK TOKENS
                    </Typography>
                  </Button>
                )}
                {!isMobile && !address && (
                  <LightTooltip title="please connect your wallet to BUY ROCK TOKENS">
                    <span>
                      <Button
                        className={classes.actionButton}
                        variant="outlined"
                        color="primary"
                        onClick={this.buyToken}
                        disabled={!address}
                        fullWidth
                      >
                        <Typography
                          className={classes.buttonText}
                          variant={"h4"}
                        >
                          BUY ROCK TOKENS
                        </Typography>
                      </Button>
                    </span>
                  </LightTooltip>
                )}
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
                  value={addressAlias}
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
                {isMobile && (
                  <Button
                    className={classes.actionButton}
                    variant="outlined"
                    color="primary"
                    onClick={this.addLiguidity}
                    fullWidth
                  >
                    <Typography className={classes.buttonText} variant={"h4"}>
                      CONTRIBUTE TO THE LUNA LIQUIDITY EVENT
                    </Typography>
                  </Button>
                )}
                {!isMobile && address && (
                  <Button
                    className={classes.actionButton}
                    variant="outlined"
                    color="primary"
                    onClick={this.addLiguidity}
                    disabled={!address}
                    fullWidth
                  >
                    <Typography className={classes.buttonText} variant={"h4"}>
                      CONTRIBUTE TO THE LUNA LIQUIDITY EVENT
                    </Typography>
                  </Button>
                )}
                {!isMobile && !address && (
                  <LightTooltip title="please connect your wallet to ADD LIQUIDITY AND GET ROCK TOKENS">
                    <span>
                      <Button
                        className={classes.actionButton}
                        variant="outlined"
                        color="primary"
                        onClick={this.addLiguidity}
                        disabled={!address}
                        fullWidth
                      >
                        <Typography
                          className={classes.buttonText}
                          variant={"h4"}
                        >
                          CONTRIBUTE TO THE LUNA LIQUIDITY EVENT
                        </Typography>
                      </Button>
                    </span>
                  </LightTooltip>
                )}
              </div>
              <div className={classes.description}>
                <Typography variant={"h3"}>
                  By Contributing to the liquidity building event you are
                  ensuring the success of the token and the growth of genration
                  finance is assured.
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && this.renderModal()}
      </div>
    );
  }

  addressClicked = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  renderModal = () => {
    return (
      <UnlockModal
        closeModal={this.closeModal}
        modalOpen={this.state.modalOpen}
      />
    );
  };

  nav = (screen) => {
    this.props.history.push(screen);
  };
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));
