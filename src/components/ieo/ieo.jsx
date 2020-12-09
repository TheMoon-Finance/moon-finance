import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Button,
  Slider,
  Tooltip,
  TextField,
} from "@material-ui/core";

import Loader from "../loader";
import Snackbar from "../snackbar";
import { colors } from "../../theme";

import {
  ERROR,
  GET_BALANCES,
  BALANCES_RETURNED,
  CONNECTION_CONNECTED,
  CONNECTION_DISCONNECTED,
  ZAP,
  ZAP_RETURNED,
  GET_CURV_BALANCE,
  GET_CURV_BALANCE_RETURNED,
  SWAP,
  SWAP_RETURNED,
  TRADE,
  TRADE_RETURNED,
  GET_BEST_PRICE,
  GET_BEST_PRICE_RETURNED,
} from "../../constants";

import PropTypes from "prop-types";

import { withNamespaces } from "react-i18next";
import Store from "../../stores";
const emitter = Store.emitter;
const dispatcher = Store.dispatcher;
const store = Store.store;

const styles = (theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    //maxWidth: '1200px',
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
      minWidth: "900px",
    },
  },
  disaclaimer: {
    padding: "12px",
    border: "1px solid rgb(174, 174, 174)",
    borderRadius: "0.75rem",
    marginBottom: "24px",
    background: "linear-gradient(180deg, #177bd3 0%, #06070a 100%)",
    color: colors.white,
  },
  introCenter: {
    color: colors.white,
  },
  card: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "400px",
    justifyContent: "center",
    minWidth: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
  },
  iHaveContainer: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    padding: "42px 30px",
    border: "2px solid #ffffff",
    borderRadius: "28px",
    maxWidth: "500px",
    justifyContent: "center",
    background: "linear-gradient(180deg, #177bd3 0%, #06070a 100%)",
    color: colors.white,
    marginBottom: "30px",
  },
  exchangeContainer: {
    display: "flex",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  between: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
  },
  actionInput: {
    margin: "10px 0",
  },
  inputTitle: {
    color: colors.white,
  },
  actionButton: {
    background: colors.white,
    marginTop: "40px",
    width: "40%",
    border: "1px solid white",
    "&:hover": {
      background: colors.white,
      border: "1px solid #1776cb",
    },
  },
  buttonText: {
    color: colors.black,
  },
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    height: 8,
    margin: "40px 0px",
  },
  track: {
    backgroundImage:
      "linear-gradient(to right, #ff5c93 0%, #e4ea3f 52.2346%, #55ffac 100%)",
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
})(Slider);

const marks = [
  {
    value: 0,
    label: "1-25%",
  },
  {
    value: 50,
    label: "25-75%",
  },
  {
    value: 100,
    label: "75-100%",
  },
];

/*export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <PrettoSlider
        valueLabelDisplay="auto"
        defaultValue={50}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div className={classes.margin} />
    </div>
  );
}*/

class IEO extends Component {
  constructor() {
    super();

    const account = store.getStore("account");

    this.state = {
      account: account,
      assets: store.getStore("assets").filter((asset) => asset.curve === true),
      curveContracts: store.getStore("curveContracts"),
      sendAsset: null,
      receiveAsset: null,
      sendAmount: "",
      // receiveAmount: ""
      bestPrice: 0,
    };

    if (account && account.address) {
      dispatcher.dispatch({ type: GET_BALANCES, content: {} });
      dispatcher.dispatch({ type: GET_CURV_BALANCE, content: {} });
    }
  }

  componentWillMount() {
    emitter.on(ERROR, this.errorReturned);
    emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
  }

  componentWillUnmount() {
    emitter.removeListener(ERROR, this.errorReturned);
    emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
    emitter.removeListener(
      CONNECTION_DISCONNECTED,
      this.connectionDisconnected
    );
  }

  connectionConnected = () => {
    const account = store.getStore("account");
    this.setState({ loading: true, account: account });
  };

  connectionDisconnected = () => {
    this.setState({ account: null });
  };

  errorReturned = (error) => {
    this.setState({ loading: false });
  };

  render() {
    const { classes, t } = this.props;
    const {
      assets,
      curveContracts,
      sendAsset,
      sendAmount,
      receiveAsset,
      // receiveAmount,
      account,
      loading,
      snackbarMessage,
      bestPrice,
    } = this.state;

    if (!account || !account.address) {
      return (
        <div className={classes.root}>
          <div className={classes.investedContainerLoggedOut}>
            <Typography variant={"h5"} className={classes.disaclaimer}>
              This project is in beta. Use at your own risk.
            </Typography>
            <div className={classes.introCenter}>
              <Typography variant="h3">
                Connect your wallet to continue
              </Typography>
            </div>
          </div>
          {snackbarMessage && this.renderSnackbar()}
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <div className={classes.card}>
          <Card className={classes.iHaveContainer}>
            <PrettoSlider
              valueLabelDisplay="auto"
              defaultValue={50}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
            />

            <div className={classes.exchangeContainer}>
              <div className={classes.inputContainer}>
                <Typography variant={"h4"} className={classes.inputTitle}>
                  Amount In
                </Typography>
                <TextField
                  fullWidth
                  className={classes.actionInput}
                  value={this.state.projectAmount}
                  onChange={this.handleProjectAmountChange}
                  /*onChange={(e) => {
                    this.props.setSendAmount(e.target.value);
                  }}*/
                  placeholder={"0 ETH"}
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
                <Typography variant={"h4"}>ETH</Typography>
              </div>
              <div className={classes.between}>
                <Typography variant={"h3"}>=</Typography>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant={"h4"} className={classes.inputTitle}>
                  Amount In
                </Typography>
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
                <Typography variant={"h4"}>ROCK</Typography>
              </div>
            </div>
            <Button
              className={classes.actionButton}
              variant="outlined"
              color="primary"
              //disabled={loading || sendAmount === ""}
              onClick={this.onTrade}
              fullWidth
            >
              <Typography className={classes.buttonText} variant={"h5"}>
                Submit
              </Typography>
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(IEO)));
