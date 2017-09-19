import React from "react";
import { Link } from "react-router-dom";

import { BenchIndexItem } from "./bench_index_item";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props);
    this.props.fetchBenches();
  }

  render () {
    return (
      <div className="benches-display">
        <h1>The Benches</h1>

        <img height="400px" width="500px"
          src="http://geology.com/store/wall-maps/blue-ocean-united-states-map-lg.jpg"/>

        <ul>
          {
            this.props.benches.map((bench) => {
              return <BenchIndexItem key={bench.description}
                              bench={bench} />
              })
          }
        </ul>

        <div className="footer">
          <button className="link"><Link to="/">Back to Home</Link></button>
        </div>
      </div>
    )

  }
}

export default BenchIndex;
