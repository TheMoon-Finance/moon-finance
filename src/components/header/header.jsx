import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { colors } from "../../theme";

import { CONNECTION_CONNECTED, CONNECTION_DISCONNECTED } from "../../constants";

import UnlockModal from "../unlock/unlockModal.jsx";

import "./sidebarStyles.css";
import SideBar from "./sidebar";

import Store from "../../stores";
const emitter = Store.emitter;
const store = Store.store;

const styles = (theme) => ({
  root: {
    verticalAlign: "top",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
    },
  },
  headerV2: {
    //background: colors.white,
    //border: "1px solid " + colors.borderBlue,
    //borderTop: "none",
    width: "100%",
    //borderRadius: "0px 0px 50px 50px",
    display: "flex",
    padding: "24px 32px",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      //padding: "16px 24px",
      padding: "16px 0px",
    },
  },
  sidebar: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    "& img": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
      marginRight: "20px",
    },
  },
  links: {
    display: "flex",
    //background: colors.white,
    width: "60%",
    height: "120px",
    borderRadius: "80px",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    color: colors.white,
    minWidth: "80px",
    textAlign: "center",
    padding: "12px 0px",
    margin: "0px 20px",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "9px",
      borderBottom: "3px solid rgba(255, 255, 255, 0.6)",
    },
  },
  title: {
    //textTransform: "capitalize",
  },
  linkActive: {
    color: colors.white,
    minWidth: "80px",
    textAlign: "center",
    padding: "12px 0px",
    margin: "0px 20px",
    cursor: "pointer",
    paddingBottom: "9px",
    borderBottom: "3px solid rgba(255, 255, 255, 0.6)",
  },
  account: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flex: "0",
      display: "none",
    },
  },
  walletAddress: {
    border: "2px solid",
    borderColor: "rgba(255, 255, 255, 0.6)",
    height: "60px",
    width: "200px",
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
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      position: "absolute",
      top: "90px",
      border: "1px solid " + colors.borderBlue,
      background: colors.white,
    },
  },
  connectedWalletAddress: {
    border: "2px solid",
    borderColor: "rgba(255, 255, 255, 0.6)",
    height: "60px",
    width: "200px",
    padding: "12px",
    color: colors.white,
    //border: "2px solid rgb(174, 174, 174)",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid " + colors.white,
      //background: "rgba(47, 128, 237, 0.1)",
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
    marginRight: "6px",
    marginLeft: "6px",
  },
  name: {
    paddingLeft: "24px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  downloadFile: {
    color: colors.white,
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
  },
});

class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      account: store.getStore("account"),
      modalOpen: false,
    };
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
  };

  connectionDisconnected = () => {
    this.setState({ account: store.getStore("account") });
  };

  render() {
    const { classes } = this.props;

    const { account, modalOpen } = this.state;

    var address = null;
    if (account.address) {
      address =
        account.address.substring(0, 6) +
        "..." +
        account.address.substring(
          account.address.length - 4,
          account.address.length
        );
    }

    return (
      <div className={classes.root}>
        <div className={classes.headerV2}>
          <div className={classes.sidebar}>
            <SideBar />
          </div>

          <div className={classes.icon}>
            <img
              alt=""
              src={require("../../assets/Logo.png")}
              height={"50px"}
              onClick={() => {
                this.nav("");
              }}
            />
          </div>
          <div className={classes.links}>
            {this.renderLink("dashboard")}
            {this.renderLink("vaults")}
            {this.renderLink("earn")}
            {/*this.renderLink("staking")*/}
            {this.renderLink("zap")}
            {this.renderLink("stats")}
            {this.renderLink("cover")}
            {/*{this.renderLink("ieo")}*/}
          </div>
          <div className={classes.account}>
            {address && (
              <Typography
                variant={"h4"}
                className={classes.connectedWalletAddress}
                noWrap
                onClick={this.addressClicked}
              >
                {address}
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
        {modalOpen && this.renderModal()}
      </div>
    );
  }

  renderLink = (screen) => {
    const { classes } = this.props;

    if (screen !== "staking") {
      return (
        <div
          className={
            window.location.pathname === "/" + screen
              ? classes.linkActive
              : classes.link
          }
          onClick={() => {
            this.nav(screen);
          }}
        >
          <img
            alt=""
            src={require("../../assets/Header_" + screen + ".png")}
            height={"70px"}
          />
          <Typography variant={"h4"} className={`title`}>
            {screen}
          </Typography>
        </div>
      );
    } else {
      return (
        <div
          className={
            window.location.pathname === "/" + screen
              ? classes.linkActive
              : classes.link
          }
        >
          <a href="/staking" className={classes.downloadFile}>
            <img
              alt=""
              src={require("../../assets/Header_" + screen + ".png")}
              height={"70px"}
            />
            <Typography variant={"h4"} className={`title`}>
              {screen}
            </Typography>
          </a>
        </div>
      );
    }
  };

  nav = (screen) => {
    /*if (screen === "cover") {
      window.open("https://ins.lampgram.com", "_blank");
      return;
    }*/
    this.props.history.push("/" + screen);
  };

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
}

export default withRouter(withStyles(styles)(Header));
