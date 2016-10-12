// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
//
//  class Timer extends Component {
//   constructor(){
//     super();
//     this.state = { val: 0 };
//     // time elapsed: 0
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val +1})
//   }
//   componentWillMount(){
//     this.setState({m: 1})
//   }
//   render(){
//     console.log('rendering')
//     return <div>{this.state.val * this.state.m}</div>
//   }
//   componentDidMount(){
//     this.inc = setInterval(this.update,1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.inc)
//   }
// }
//
// export default class TimerWrapper extends Component {
//   constructor(){
//     super();
//   }
//   mount(){
//     ReactDOM.render(<Timer />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Start</button>
//         <button onClick={this.unmount.bind(this)}>Stop</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }
