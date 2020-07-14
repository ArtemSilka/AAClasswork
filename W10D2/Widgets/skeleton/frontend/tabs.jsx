import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

    this.selectedTab = this.selectedTab.bind(this);
    
    this.state = { selectedIdx: 0 };
    // this.props = this.props.bind(this);
    this.titles = this.props.objects.map( (ele,idx) => {
        // debugger;
        return <span onClick={() => this.selectedTab(idx)} key={idx}>{ele.title}</span>;
    });
    this.content = this.props.objects.map((ele, idx) => {
        return <span key={idx}>{ele.content}</span>;
    });
  }
  selectedTab(idx){
    this.setState({
      selectedIdx: idx
    })
  }

  render() {
    return (
            <div>
            <h1>Tabs</h1>
                <div className='tabs-container'>
                    <div className='header'>
                            { this.titles }
                    </div>
                    <div className='content'>
                      <p>
                        {this.content[this.state.selectedIdx]}
                      </p>
                    </div>
                </div>
            </div>
        )
    }


}

export default Tabs;