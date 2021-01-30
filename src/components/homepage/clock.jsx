import React from "react";
import moment from "moment";

import "./clockStyle.scss";

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      //const { timeTillDate, timeFormat } = this.props;
      const then = moment.utc("2021-01-31T23:59:59");
      const now = moment.utc();

      const countdown = moment(then - now);

      var delta = Math.abs(countdown._i) / 1000;

      var days;
      var hours;
      var minutes;
      var seconds;

      if (countdown._i > 0) {
        days = Math.floor(delta / 86400);
        delta -= days * 86400;

        hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        seconds = Math.floor(delta % 60);
      } else {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      }
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    // Mapping the date values to radius values
    var daysRadius;
    if (days !== 0) {
      daysRadius = mapNumber(days, 30, 0, 0, 360);
    } else {
      daysRadius = 359.9;
    }

    var hoursRadius;
    if (hours !== 0) {
      hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    } else {
      hoursRadius = 359.9;
    }

    var minutesRadius;
    if (minutes !== 0) {
      minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    } else {
      minutesRadius = 359.9;
    }

    var secondsRadius;
    if (seconds !== 0) {
      secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
    } else {
      secondsRadius = 359.9;
    }

    return (
      <div className="countdown-wrapper">
        <div className="countdown-item">
          <SVGCircle radius={daysRadius} />
          {days}
          <span>days</span>
        </div>

        <div className="countdown-item">
          <SVGCircle radius={hoursRadius} />
          {hours}
          <span>hours</span>
        </div>

        <div className="countdown-item">
          <SVGCircle radius={minutesRadius} />
          {minutes}
          <span>min</span>
        </div>

        <div className="countdown-item">
          <SVGCircle radius={secondsRadius} />
          {seconds}
          <span>sec</span>
        </div>
      </div>
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      //transform="scale(.5)"
      fill="none"
      stroke="white"
      strokeWidth="4"
      //d={describeArc(50, 50, 48, 0, radius)}
      d={
        window.innerWidth > 900
          ? describeArc(100, 100, 96, 0, radius)
          : describeArc(32, 32, 30, 0, radius)
      }
    />
  </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default Countdown;
