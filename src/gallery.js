import React, { Component } from 'react';
import {Col, Row, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const styles = {
  tileMargin : {
    "marginBottom" : "20px"
  }
}
const genImgTile = (imgSrc, idx) => {
  return (
    <Col xs={5} md={3} key={idx}>
    <div style={styles.tileMargin}>
    <Link to={"/asset/"+idx} >
    <Image src={imgSrc} width={250} rounded fluid />
    </Link>
    </div>
    </Col>
    )
}

class Gallery extends Component {  
    render() {
        return (
            <div>
              <h1>Gallery</h1>
              <Row>
              {
                this.props.propdata.images.map((item, index) => {
                  return genImgTile(item, index)
                })
              }
              </Row>                
            </div>

        )
    }
}

export default Gallery;
