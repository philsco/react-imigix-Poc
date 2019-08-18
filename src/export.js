import React, { Component } from 'react';

const styles = {
  align: {
    "textAlign": "left",
    "align": "left",
    "fontSize": "medium",
    "backgroundColor": "#EFEFEF"
  }
}

class Rendered extends Component {
  render(){
    return (
      <code>
      <pre>{`
            <img srcset=
            "https://assets.imgix.net/unsplash/bridge.jpg??w=600&h=375&fit=crop&auto=compress&fp-x=0.5&fp-y=0.5&fp-z=100&fp-debug=false 320w,
            https://assets.imgix.net/unsplash/bridge.jpg??w=325&h=437&fit=crop&auto=compress&fp-x=0.5&fp-y=0.5&fp-z=100&fp-debug=false 480w,
            https://assets.imgix.net/unsplash/bridge.jpg? 800w"?w=110&h=110&fit=crop&auto=compress&fp-x=0.5&fp-y=0.5&fp-z=100&fp-debug=false
            sizes="(max-width: 320px) 280px,
                    (max-width: 480px) 440px, 800px"
            src="https://assets.imgix.net/unsplash/bridge.jpg?" alt="Nutribullet" />
      `}</pre>
      </code>
    )
  }
}

class Export extends Component {
  constructor(props) {
    super(props);
     this.state = { 
       images: [],
       settings: []
     }
    }

    render() {
        return (
            <div>
              <h1>Export</h1>
                <div style={styles.align}>

                  <Rendered />

                </div>
            </div>

        )
    }
}

export default Export;
