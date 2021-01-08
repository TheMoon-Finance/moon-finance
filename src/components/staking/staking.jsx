import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Button,
  Tooltip,
  Card,
} from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import { colors } from "../../theme";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
import UnlockModal from "../unlock/unlockModal.jsx";

import ENS from "ethjs-ens";
import { CONNECTION_CONNECTED, CONNECTION_DISCONNECTED } from "../../constants";

import Store from "../../stores";
const emitter = Store.emitter;
const store = Store.store;

const styles = (theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    //maxWidth: "1200px",
    width: "100%",
    //justifyContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",

    "& h3": {
      fontWeight: "300",
    },
    "& h4": {
      fontWeight: "300",
    },
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },

  actionContent: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "20px 40px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  prettyAlign: {
    display: "flex",
    alignItems: "center",
    flex: "1",
    padding: "0px 30px",
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
    color: "#2236cb",
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
    padding: "12px",
    border: "2px solid rgb(174, 174, 174)",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid " + colors.borderBlue,
      background: "rgba(47, 128, 237, 0.1)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      position: "absolute",
      top: "90px",
      border: "1px solid " + colors.borderBlue,
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
    paddingBottom: "60px",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flex: "0",
    },
  },
  link: {
    marginRight: "20px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "20px",

    padding: "7px",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  },
  downloadFile: {
    color: "#212529",
    textDecoration: "none",
  },
  contribute: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#7a4cf5",
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
    color: colors.black,
    textTransform: "uppercase",
    textAlign: "center",
  },
  title: {
    width: "100%",
    minHeight: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    color: colors.black,
    textTransform: "uppercase",
    textAlign: "center",
  },
  input: {
    "&::placeholder": {
      color: "#9b9b9b",
    },
    color: "#444444",
    backgroundColor: "#051524",
    borderRadius: "30px !important",
    fontWeight: "300",
  },
  cssOutlinedInput: {
    borderRadius: "30px !important",
    "& input": {
      color: colors.white,
    },
    "& input:disabled": {
      color: "#9b9b9b",
    },
  },
  notchedOutline: {
    border: "1px solid",
    borderColor: "#051524 !important",
  },

  referralTitle: {
    padding: "12px",
    borderWidth: "2px 1px 2px 2px",
    border: "solid white",
    borderRadius: "0.75rem 0 0 0.75rem",
    marginBottom: "24px",
    background: "linear-gradient(0deg, #177bd3 0%, #06070a 100%)",
    color: colors.white,
    minWidth: "170px",
  },
  referralLink: {
    padding: "12px",
    border: "2px solid white",
    marginBottom: "24px",
    background: colors.black,
    color: "#1679d0",
    minWidth: "40%",
  },
  referralCopy: {
    padding: "12px",
    border: "2px solid white",
    borderRadius: "0 0.75rem 0.75rem 0",
    marginBottom: "24px",
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

  sepperator: {
    borderBottom: "1px solid #E1E1E1",
    minWidth: "100%",
    marginBottom: "24px",
    marginTop: "24px",
  },
  actionButton: {
    color: colors.black,
    borderRadius: "30px",
    backgroundColor: colors.white,
    borderColor: "white !important",
    marginTop: "30px",
    width: "85%",
    "&:hover": {
      border: "1px solid",
      borderColor: "#dbdbdb !important",
      backgroundColor: colors.white,
    },
  },

  buttonText: {
    fontSize: "14px",
    fontWeight: "500",
  },

  between: {
    width: "40px",
    height: "40px",
  },

  card: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "400px",
    justifyContent: "center",
    minWidth: "85%",
    flexDirection: "column",
    alignItems: "center",
    //marginTop: "40px",
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
      flexDirection: "column",
    },
  },

  iHaveContainer: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "500px",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(-7deg, #177bd3 0%, #06070a 100%)",
    marginBottom: "30px",
    color: colors.white,
    padding: "20px 30px",
  },

  goldBalance: {
    color: "#e6a147",
    margin: "10px 0 2px",
  },

  actionContainer: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "500px",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(-7deg, #177bd3 0%, #06070a 100%)",
    marginBottom: "30px",
    color: colors.white,
  },

  actionInput: {
    marginBottom: "10px",
  },

  inputCardHeading: {
    width: "100%",
    padding: "12px 0px 12px 20px",
  },

  unstakeAmount: {
    display: "flex",
  },

  buttonContainer: {
    display: "flex",
    width: "100%",
    padding: "0 40px",
    justifyContent: "center",
  },

  withdrawButton: {
    color: colors.black,
    borderRadius: "30px",
    backgroundColor: "#55ffac",
    borderColor: "#55ffac !important",
    width: "85%",
    //marginRight: "20px",
    "&:hover": {
      border: "1px solid",
      borderColor: "#dbdbdb !important",
      backgroundColor: "#55ffac",
    },
  },
});

class Staking extends Component {
  constructor(props) {
    super();

    this.state = {
      modalOpen: false,
      account: store.getStore("account"),
      isStakeholder: "",
      stakeAmount: "",
      unstakeAmount: "",
      reward: "",
      isFeeCharged: true,
    };

    this.handleStakeAmountChange = this.handleStakeAmountChange.bind(this);
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

  connectionConnected = async () => {
    this.setState({ account: store.getStore("account") });
    this.setAddressEnsName();
    await this.isStakeholder();

    if (this.state.isStakeholder) {
      this.getStakeInfo();
      this.getStakeRewardInfo();
      var updateInfo = setInterval(() => {
        if (this.state.account.address) {
          this.isStakeholder();
          if (this.state.isStakeholder) {
            this.getStakeInfo();
            this.getStakeRewardInfo();
          } else {
            this.setState({ unstakeAmount: 0, reward: 0 });
            clearInterval(updateInfo);
          }
        }
      }, 5000);
    }
  };

  connectionDisconnected = () => {
    this.setState({ account: store.getStore("account") });

    this.setState({ unstakeAmount: 0, reward: 0 });
  };

  copyRefLink = () => {
    const el = document.createElement("textarea");
    el.value = "https://etherumiron=sldjkfndjvkndfjkvndfknfjdfv";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
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

  handleStakeAmountChange = (e) => {
    this.setState({
      stakeAmount: e.target.value ? Math.abs(e.target.value) : "",
    });
  };

  stake = () => {
    if (isMobile) {
      Swal.fire("Please visit desktop to connect MetaMask wallet");
    } else {
      if (this.state.stakeAmount >= 1) {
        store.stake(store.getStore("account"), this.state.stakeAmount);
      }
    }
  };

  unstake = async () => {
    if (isMobile) {
      Swal.fire("Please visit desktop to connect MetaMask wallet");
    } else {
      if (this.state.unstakeAmount > 0) {
        var timeLeft = await this.isFeeCharged();

        if (this.state.isFeeCharged) {
          Swal.fire({
            title: "Are you sure you want to unstake?",
            html:
              "Your <b>7-day</b> period has not yet expired. <br/>Left <b>" +
              timeLeft +
              "</b>.<br/> In this case you will pay a commission of  <b>25%</b>!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2F80ED",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
          }).then((result) => {
            if (result.isConfirmed) {
              store.unstake(store.getStore("account"));
            }
          });
        } else {
          store.unstake(store.getStore("account"));
        }
      }
    }
  };

  getStakeInfo = async () => {
    var stakeInfo = await store.stakeInfo(store.getStore("account"));

    this.setState({ unstakeAmount: stakeInfo[0] / Math.pow(10, 18) });
  };

  getStakeRewardInfo = async () => {
    var date = Math.round(new Date() / 1000);

    var stakeRewardInfo = await store.stakeRewardInfo(
      store.getStore("account"),
      date
    );

    this.setState({ reward: stakeRewardInfo / Math.pow(10, 18) });
  };

  isStakeholder = async () => {
    var stakeInfo = await store.isStakeholder(store.getStore("account"));

    this.setState({ isStakeholder: stakeInfo[0] });
  };

  isFeeCharged = async () => {
    var stakeInfo = await store.stakeInfo(store.getStore("account"));

    var date = Math.round(new Date() / 1000);

    if (date - stakeInfo[1] > 604800) {
      this.setState({ isFeeCharged: false });
    }

    return this.secondsToDhms(604800 - (date - stakeInfo[1]));
  };

  secondsToDhms = (seconds) => {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
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
        <div className={classes.card}>
          <div className={classes.row} style={{ marginBottom: "30px" }}>
            <Typography variant="h4" className={classes.referralTitle}>
              Your Referral Link
            </Typography>

            <Typography variant="h4" className={classes.referralLink}>
              https://etherumiron=sldjkfndjvkndfjkvndfknfjdfv
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
          <div className={classes.row}>
            {/*----------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            <Card className={classes.iHaveContainer}>
              <div className={classes.titleBalance}>
                <Typography variant="h3" className={classes.goldBalance}>
                  23360.8676 ROCK
                </Typography>
                <Typography variant="h4">Contract Market Cap</Typography>
                <Typography variant="h4">Value: 9,242,026 USD</Typography>
              </div>
              <img
                alt=""
                src={require("../../assets/eth_gold_icon.png")}
                height={"90px"}
              />
            </Card>

            {/*----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={classes.between}></div>

            <Card className={classes.iHaveContainer}>
              <div className={classes.titleBalance}>
                <Typography variant="h3" className={classes.goldBalance}>
                  103.767 ROCK
                </Typography>
                <Typography variant="h4">Your Tokens</Typography>
                <Typography variant="h4">Value: 9,242,026 USD</Typography>
              </div>
              <img
                alt=""
                src={require("../../assets/Rock_gold_icon.png")}
                height={"90px"}
              />
            </Card>

            {/*----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={classes.between}></div>

            <Card className={classes.iHaveContainer}>
              <div
                className={classes.titleBalance}
                style={{ paddingRight: "20px" }}
              >
                <Typography variant="h3" className={classes.goldBalance}>
                  0.347832 USDT
                </Typography>
                <Typography variant="h4">Your Dividends Earnings</Typography>
                <Typography variant="h4">Value: 137.61 USD</Typography>
              </div>
              <div
                style={{
                  width: "3px",
                  height: "130px",
                  backgroundColor: "white",
                }}
              ></div>
              <div
                className={classes.titleBalance}
                style={{ paddingLeft: "20px" }}
              >
                <Typography variant="h3" className={classes.goldBalance}>
                  0.000000 ROCK
                </Typography>
                <Typography variant="h4">Your Referral Earnings</Typography>
                <Typography variant="h4">Value: 0 USD</Typography>
              </div>
            </Card>
          </div>

          {/*----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className={classes.row}>
            <Card className={classes.actionContainer}>
              <div className={classes.title}>
                <Typography variant={"h3"}>STAKE ROCK</Typography>
              </div>
              <div className={classes.actionContent}>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={this.state.stakeAmount}
                  onChange={this.handleStakeAmountChange}
                  placeholder={"AMOUNT OF ETH"}
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

                {/*<Typography variant="h4" className={classes.buyPrice}>
                  Buy Price
                </Typography>
                <Typography variant="h4" className={classes.buyPrice}>
                  0.022800 ETH | 9.02 USD
                </Typography>*/}

                <Button
                  className={classes.actionButton}
                  variant="outlined"
                  color="primary"
                  disabled={!address}
                  fullWidth
                >
                  <Typography className={classes.buttonText} variant={"h4"}>
                    STAKE
                  </Typography>
                </Button>
              </div>
            </Card>

            {/*----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={classes.between}></div>

            <Card className={classes.actionContainer}>
              <div className={classes.title}>
                <Typography variant={"h3"}>UNSTAKE ROCK</Typography>
              </div>
              <div className={classes.actionContent}>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={this.state.unstakeAmount}
                  onChange={this.handleUnstakeAmountChange}
                  placeholder={"AMOUNT OF ETH"}
                  variant="outlined"
                  type="number"
                  disabled
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

                {/*<Typography variant="h4" className={classes.buyPrice}>
                  Sell Price
                </Typography>
                <Typography variant="h4" className={classes.buyPrice}>
                  0.022800 ETH | 9.02 USD
                </Typography>*/}

                <Button
                  className={classes.actionButton}
                  variant="outlined"
                  color="primary"
                  //onClick={this.unstake}
                  disabled={!address}
                  fullWidth
                >
                  <Typography className={classes.buttonText} variant={"h4"}>
                    UNSTAKE
                  </Typography>
                </Button>
              </div>
            </Card>

            {/*----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={classes.between}></div>

            <Card className={classes.actionContainer}>
              <div className={classes.prettyAlign}>
                <div className={classes.titleBalance}>
                  {/*<Typography variant="h3" className={classes.goldBalance}>
                    1.9376 ETH
                  </Typography>
                  <Typography variant="h4">Your ROCK Tokens</Typography>
                  <Typography variant="h4">Value: 765.78 USD</Typography>*/}

                  <Typography variant="h3" className={classes.goldBalance}>
                    23360.8676 ROCK
                  </Typography>
                  <Typography variant="h4">Your Total Dividends</Typography>
                  <Typography variant="h4">Value: 137.61 USD</Typography>
                </div>
                <img
                  alt=""
                  src={require("../../assets/eth_gold_icon.png")}
                  height={"100px"}
                />
              </div>

              <div className={classes.buttonContainer}>
                <Button
                  className={classes.withdrawButton}
                  variant="outlined"
                  color="primary"
                  //onClick={this.unstake}
                  disabled={!address}
                  fullWidth
                >
                  <Typography className={classes.buttonText} variant={"h4"}>
                    WITHDRAW DIVIDENDS
                  </Typography>
                </Button>
              </div>
            </Card>
          </div>
        </div>
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

export default withNamespaces()(withRouter(withStyles(styles)(Staking)));
