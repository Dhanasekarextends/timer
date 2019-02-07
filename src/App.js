import React, { Component } from 'react';
import Time from "./components/time"
import Start from "./components/start"
import Reset from "./components/reset"
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      play: false,
      hrs: "00",
      min: "00",
      sec: "00",
      icon: <i className="fa fa-play start" aria-hidden="true"></i>
    }
  }

  start() {
    this.setState({
      play: !this.state.play
    })
    this.startIcon = <i className="fa fa-play start" aria-hidden="true"></i>;
    this.pauseIcon = <i class="fa fa-pause" aria-hidden="true"></i>;
    if(this.state.play) {
      this.setState({
        icon: this.startIcon
      })
      clearInterval(this.interval);
    } else {
      this.setState({
        icon: this.pauseIcon
      })
      this.interval = setInterval(this.timer, 1000);
    }
  }

  timer= ()=>{
    let min=this.state.min;
    let hrs=this.state.hrs;
    let sec=this.state.sec;
    sec++;
    console.log(sec)
    if(sec==60){
      min++;
      sec=0;
    }
    else if(min==60){
       hrs++;
       min=0;
    }
    sec = ("0" + sec).slice(-2);
    min = ("0" + min).slice(-2);
    hrs = ("0" + hrs).slice(-2);
    this.setState({sec,min,hrs})
    console.log(this.state)
  }

  reset() {
    clearInterval(this.interval);
    this.setState({
      icon: this.startIcon
    })
    this.setState({sec: "00",min: "00",hrs: "00"})
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="value-part">
          <Time 
            hrs={this.state.hrs} 
            min={this.state.min}
            sec={this.state.sec}
            />
          </div>
          <div className="keys-part">
          <Start icon={this.state.icon} onClick={()=>{
            this.start()
          }}/>
          <Reset onClick={()=>{
            this.reset()
          }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
