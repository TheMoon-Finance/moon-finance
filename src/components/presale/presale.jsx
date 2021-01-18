import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Tooltip } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
import UnlockModal from "../unlock/unlockModal.jsx";

import Background from "../../assets/homeBackground.png";
import WhitePaper from "../../assets/THEMOONFINANCE_Litepaper.pdf";

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
    //marginTop: "40px",
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
    //marginTop: "40px",
    [theme.breakpoints.up("md")]: {
      minWidth: "1400px",
    },
  },

  portfolioContainer: {
    //width: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
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
  logo: {
    display: "flex",
    //paddingBottom: "60px",
    alignItems: "center",
    flex: 1,

    [theme.breakpoints.down("md")]: {
      display: "none",
    },

    "& img": {
      cursor: "pointer",
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
      display: "none",
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
      //backgroundColor: "rgba(255,255,255,0.5)",
      textDecoration: "underline",
    },

    "& a": {
      textDecoration: "none",
      color: "#eaeaea",
    },
  },

  contribute: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#177bd3",
    textTransform: "uppercase",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "110px",
    },
  },

  contract: {
    width: "100%",
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
    backgroundColor: colors.white,
    justifyContent: "center",
    textTransform: "uppercase",
    textAlign: "center",
  },
  buyModal: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(-7deg, #177bd3 0%, #06070a 100%)",
    color: colors.white,
    padding: "20px",
    "& h3": {
      marginTop: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
  },

  input: {
    "&::placeholder": {
      color: "#161616",
    },
    color: "#444444",
    backgroundColor: colors.white,
    borderRadius: "30px !important",
  },
  cssOutlinedInput: {
    borderRadius: "30px !important",
  },
  notchedOutline: {
    border: "1px solid",
    borderColor: "white !important",
  },

  actionButton: {
    color: colors.black,
    borderRadius: "30px",
    backgroundColor: colors.white,
    borderColor: "white !important",
    margin: "20px 50px 0px",
    width: "85%",
    "&:hover": {
      border: "1px solid",
      borderColor: "#dbdbdb !important",
      backgroundColor: colors.white,
    },
  },

  buttonText: {
    fontSize: "24px",
    fontWeight: "500",
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

  row: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "400px",
    justifyContent: "center",
    minWidth: "100%",
    flexDirection: "row",
    //alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  referralTitle: {
    padding: "12px",
    borderWidth: "2px 1px 2px 2px",
    border: "solid white",
    borderRadius: "0.75rem 0 0 0.75rem",
    background: "linear-gradient(0deg, #177bd3 0%, #06070a 100%)",
    color: colors.white,
    minWidth: "170px",
  },
  referralLink: {
    padding: "12px",
    border: "2px solid white",
    background: colors.black,
    color: "#1679d0",
    minWidth: "35%",
  },
  referralCopy: {
    padding: "12px",
    border: "2px solid white",
    borderRadius: "0 0.75rem 0.75rem 0",
    background: colors.white,
    color: colors.black,
    minWidth: "170px",
    textAlign: "center",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid",
      borderColor: "#dbdbdb !important",
      backgroundColor: colors.white,
    },
  },

  disaclaimer: {
    padding: "10px 20px",
    border: "1px solid rgb(174, 174, 174)",
    borderRadius: "0.75rem",
    background: "linear-gradient(180deg, #177bd3 0%, #06070a 100%)",
    color: colors.white,
  },

  refBalance: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  goldBalance: {
    color: "#e6a147",
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

class Presale extends Component {
  constructor(props) {
    super();

    this.state = {
      modalOpen: false,
      account: store.getStore("account"),
      referral: "",
      refReward: "",
      amount: "",
      tokenPrice: 1 / 10,
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
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
    this.getRefAddress();
    this.getRefReward();
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

  getRefAddress = () => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var ref = url.searchParams.get("ref");

    this.setState({ referral: ref });
  };

  getRefReward = async () => {
    var reward = await store.getAddressRewards(store.getStore("account"));

    this.setState({ refReward: reward / (1 * Math.pow(10, 18)) });
  };

  copyRefLink = () => {
    const el = document.createElement("textarea");
    el.value =
      "https://www.themoon.finance/presale?ref=" + this.state.account.address;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value ? Math.abs(e.target.value) : "",
    });
  };

  buyToken = () => {
    let amount = this.state.amount * this.state.tokenPrice;
    if (isMobile) {
      Swal.fire("Please visit desktop to connect MetaMask wallet");
    } else {
      store.buyToken(store.getStore("account"), amount, this.state.referral);
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
          <div className={classes.logo}>
            <img
              onClick={() => {
                this.nav("/");
              }}
              alt=""
              src={require("../../assets/Logo.png")}
              height="70px"
            />
          </div>

          <div className={`${classes.icon} icon`}></div>

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
              <Typography variant={"h4"} className={`${classes.link} link`}>
                <a
                  href={WhitePaper}
                  download="Moon_Finance_White_Paper.pdf"
                  className={`${classes.downloadFile} downloadFile`}
                >
                  WhitePaper
                </a>
              </Typography>
            </div>
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
        </div>

        <div className={classes.investedContainer}>
          {address && (
            <div className={classes.row} style={{ marginBottom: "30px" }}>
              <Typography variant="h4" className={classes.referralTitle}>
                Your Referral Link
              </Typography>

              <Typography variant="h4" className={classes.referralLink}>
                {"https://www.themoon.finance/presale?ref=" + address}
              </Typography>

              <Button
                className={classes.referralCopy}
                variant="outlined"
                color="primary"
                onClick={this.copyRefLink}
              >
                <Typography variant="h4">Copy</Typography>
              </Button>
            </div>
          )}

          {address && (
            <div className={classes.row} style={{ marginBottom: "30px" }}>
              <div className={classes.disaclaimer}>
                <div className={classes.refBalance}>
                  <Typography variant="h3" className={classes.goldBalance}>
                    {this.state.refReward ? this.state.refReward : "0.0"} ROCK
                  </Typography>
                  <Typography variant="h4">Your Referral Earnings</Typography>
                  <Typography variant="h4">
                    Value: {this.state.refReward / 10} ETH
                  </Typography>
                </div>
              </div>
            </div>
          )}

          <div className={classes.portfolioContainer}>
            <div className={classes.titleBalance}>
              <div className={classes.contribute}>
                <img
                  alt=""
                  src={require("../../assets/Logo.png")}
                  height="70px"
                />
                <Typography
                  variant={"h2"}
                  style={{ color: "#eaeaea", fontWeight: "300" }}
                >
                  {" "}
                  &nbsp;Presale
                </Typography>
              </div>
              {/*<div className={classes.contract}>
                <Typography variant={"h3"}>
                  The contract is for direct uniswap liquidity only
                </Typography>
              </div>*/}
              <div className={classes.token}>
                <Typography variant={"h3"}>ROCK tokens</Typography>
              </div>
              <div className={classes.buyModal}>
                {this.state.referral && (
                  <div>
                    <Typography variant={"h3"}>REFERRAL</Typography>
                    <TextField
                      fullWidth
                      className={classes.actionInput}
                      value={this.state.referral}
                      /*onChange={(e) => {
                    this.props.setSendAmount(e.target.value);
                  }}*/
                      disabled={true}
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
                  </div>
                )}
                <Typography variant={"h3"}>ROCK AMOUNT</Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={this.state.amount}
                  onChange={this.handleAmountChange}
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
                <Typography variant={"h3"} style={{ color: "#fff" }}>
                  Buy Price: 0.1 ETH | 1 ROCK
                </Typography>
                <Typography
                  variant={"h4"}
                  style={{ color: "#fff", marginTop: "10px" }}
                >
                  {"You must send"}{" "}
                  {(this.state.amount * this.state.tokenPrice).toFixed(3)}{" "}
                  {"ETH for "}
                  {this.state.amount ? this.state.amount : 0} {"ROCK"}
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
                      BUY ROCK
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
                      BUY ROCK
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
                          BUY ROCK
                        </Typography>
                      </Button>
                    </span>
                  </LightTooltip>
                )}
              </div>
              <div className={classes.description}>
                <Typography variant={"h4"}>
                  Allocation of funds raised: 80% will be going to liquidity for
                  Uniswap.
                  <br />
                  10% will be allocated to market maker bots on day one.
                  <br />
                  10% will be allocated to exchange listings.
                </Typography>
              </div>
              <div
                className={`${classes.flexy} flexy`}
                style={{ marginTop: "25px" }}
              >
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
                    window.open(
                      "https://t.me/joinchat/RMCMfLCjxS1Uz9Yh",
                      "_blank"
                    )
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

export default withNamespaces()(withRouter(withStyles(styles)(Presale)));
