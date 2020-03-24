import React, { Component } from "react"
import { timelens } from "timelens"
import '../../node_modules/timelens/timelens.css';

class Timelens extends Component {
  componentDidMount() {
    timelens("#timelens", {
      timeline: "/timelens/PGMTV2000612871.mp4.timeline.jpg",
      thumbnails: "/timelens/thumbnails.vtt"
    });
  }
  render(props) {
    return (
      <div id="timelens"></div>
    )
  }
}
export default Timelens