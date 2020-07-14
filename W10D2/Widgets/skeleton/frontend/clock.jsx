import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);

    this.state = { time: new Date()};
    
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({ time: new Date() });
  }
  
  componentDidMount() {
      this.intervalId = setInterval(this.tick, 1000)
  };

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render(){
    const { time } = this.state;

    return(
      <div>
        <h1>Clock</h1>
        <div className='clock-container'>
            <p>
                <span >Time:</span>
                <span className='flex-end'>{time.toTimeString().slice(0, 8)} EST</span>
            </p>
            <p>
                <span>Date:</span>
                <span className='flex-end'>{time.toDateString()}</span>
            </p>
        </div>
      </div>
    )
  }

}

export default Clock;