import React, { Component } from "react";
import "../components/stopwatch.css";

class StopWatch extends Component {
  state = {
    time: 0,
    isPlaying: false
  };

  timer;

  playTimer = () => {
    this.setState({ isPlaying: !this.state.isPlaying });

    if (this.state.isPlaying) {
      clearInterval(this.timer);
      return;
    }

    const watch = this;
    this.timer = setInterval(function() {
      watch.setState({ time: watch.state.time + 1 });
    }, 10);
  };

  clearTimer = () => {
    this.setState({ time: 0 });
  };

  getPlayButtonText() {
    if (this.state.isPlaying) return "▣";
    else if (this.state.time) return "▶";
    else return "▶";
  }

  formatTime() {
    const { time } = this.state;

    let m = parseInt(time / 6000),
      s = parseInt(time / 100) % 60,
      ms = time % 100;

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    ms = ms < 10 ? "0" + ms : ms;

    return m + ":" + s + ":" + ms;
  }

  render() {
    return (
      <div className="stop-watch">
        <div>
          <div className="watch">{this.formatTime()}</div>
          <div className="buttons">
            <button onClick={this.playTimer}>
              <span>{this.getPlayButtonText()}</span>
            </button>
            <button onClick={this.clearTimer} disabled={this.state.isPlaying}>
              <span>↺</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatch;
