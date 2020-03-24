import React, { Component } from "react"
import { Helmet } from "react-helmet"

class Timelens extends Component {
  componentDidMount() {
    // set up and use external package as needed

    // reepeatedly try to init timelens until it has loaded
    var intervalID = window.setInterval(initTimelens, 200);

    function initTimelens() {
      if (typeof window.timelens == 'function') {
        window.clearInterval(intervalID);

        window.timelens("#timelens", {
          timeline: "/timelens/PGMTV2000612871.mp4.timeline.jpg",
          thumbnails: "/timelens/thumbnails.vtt"
        });
      }
    }
  }
  render(props) {
    return (
      <React.Fragment>
        <Helmet>
          <link href="https://timelens.io/vendor/timelens/timelens.css" rel="stylesheet" />
          <script src="https://timelens.io/vendor/timelens/timelens.js" />
        </Helmet>
        <div id="timelens"></div>
      </React.Fragment>
    )
  }
}
export default Timelens