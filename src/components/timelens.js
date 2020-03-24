import React, { Component } from "react"
import { timelens } from "timelens"
import '../../node_modules/timelens/timelens.css';

class Timelens extends Component {
  componentDidMount() {
    timelens("#timelens", {
      timeline: this.props.timeline,
      thumbnails: this.props.thumbnails
    });
  }
  render() {
    return (
      <div id="timelens"></div>
    )
  }
}
export default Timelens