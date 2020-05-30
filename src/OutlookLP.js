import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Outlook Login Performance",
  },
  subtitle: {
    text: "My custom subtitle",
  },
  xAxis: {
    categories: ["A", "B", "C"],
  },
  yAxis: {
    title: {
      text: "Bodoh",
    },
  },
  series: [],
};

class OutlookLP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //The Request Body
      data: [
        {
          service: "outlook",
          username: "gohgoh",
          country: "SG",
          timeStampInMillis: 12345678,
          timeTakenSecs: 20,
        },
        {
          service: "outlook",
          username: "vince",
          country: "SG",
          timeStampInMillis: 12345678,
          timeTakenSecs: 15,
        },
        {
          service: "outlook",
          username: "dhiya",
          country: "SG",
          timeStampInMillis: 12345678,
          timeTakenSecs: 11,
        },
        {
          service: "outlook",
          username: "gohgoh",
          country: "SG",
          timeStampInMillis: 12345678,
          timeTakenSecs: 12,
        },
        {
          service: "outlook",
          username: "vince",
          country: "SG",
          timeStampInMillis: 12345678,
          timeTakenSecs: 24,
        },
        {
          service: "outlook",
          username: "dhiya",
          country: "SG",
          timeStampInMillis: 12345678,
          timeTakenSecs: 1,
        },
        {
          service: "outlook",
          username: "dhiya",
          country: "SG",
          timeStampInMillis: 12345678,
          timeTakenSecs: 10,
        },
      ],
    };
  }

  componentDidMount() {
    this.series();
  }
  series = () => {
    var series = [];
    var data = this.state.data;
    for (var i = 0; i < data.length; i++) {
      series.push({
        name: this.state.data[i].username,
        data: this.state.data[i].timeTakenSecs,
      });
    }

    let newOutput1 = _(series)
      .groupBy("name")
      .map(function (v, k) {
        return { name: k, data: _.map(v, "data") };
      })
      .value();
    options.series = newOutput1;
    this.setState({
      data: options,
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="OutlookLP">
        <HighchartsReact highcharts={Highcharts} options={data} />
      </div>
    );
  }
}
export default OutlookLP;
