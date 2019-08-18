import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

const styles = {
  listItem : {
    "margin": "20px 0px 30px 0px",
    "textAlign" : "left",
    "display": "block"
  },
  buttonPadd: {
    "textAlign": "left",
    "margin": "20px 0px 30px 0px"
  }
}

class Settings extends Component {
  constructor(props) {
    super(props);
     this.state = { 
       images: [],
       settings: []
     }
    }

    render() {
      const settings = this.props.propdata.settings;
      const entities = Object.keys(settings);

        return (
            <div>
              <h1>Settings</h1>

              {
                entities.map((item, idx) => {
                  let width = settings[item].w;
                  let height = settings[item].h;
                  let placeholder = "https://via.placeholder.com/"+width+"x"+height+".png"
                  return (
                    <div key={idx} style={styles.listItem}>
                    <strong>{settings[item].name}</strong>

                    <ul>
                      <li>Width: {width}</li>
                      <li>Height: {height}</li>
                    </ul>
                    <img src={placeholder} />

                    </div>
                  )
                })

              }

              <p style={styles.buttonPadd}>
              <Button variant="primary">+ Add Size</Button>
              </p>
                
            </div>

        )
    }
}

export default Settings;
