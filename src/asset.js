import React, { Component } from 'react';
import {Image, Button, Form} from 'react-bootstrap';
import Slider from 'react-slider-simple';

const styles = {
    panel: {
        "display" : "block",
        "margin": "20px 0px 30px 0px",
        "textAlign" : "left"
    },
    sliders: {
        "width": "50%"
    },
    hidden: {        
        "display": "none"
    }
}

const genSliders = (sizeObj, handlefpx, handdlefpy, handlefpz, doneAction) => {
    return (
        <div style={styles.sliders}>
        <label>Horizontal Focus</label>
        <Slider id = "fpx" key="fpx" value={sizeObj.fpx*100} onChange={handlefpx} onDone={doneAction} thumbColor="rgb(90, 171, 0" shadowColor="rgb(90, 171, 224" sliderPathColor="rgb(225, 231, 235)" />
        <label>Vertical Focus</label>
        <Slider id = "fpy" key="fpy" value={sizeObj.fpy*100} onChange={handdlefpy} onDone={doneAction} thumbColor="rgb(90, 171, 0" shadowColor="rgb(90, 171, 224" sliderPathColor="rgb(225, 231, 235)" />
        <label>Zoom Focus</label>
        <Slider id = "fpz" key="fpz" value={sizeObj.fpz} onChange={handlefpz} onDone={doneAction} thumbColor="rgb(90, 171, 0" shadowColor="rgb(90, 171, 224" sliderPathColor="rgb(225, 231, 235)" />
        </div>
    )
}

class Asset extends Component {
    constructor(props) {
        super(props);
         this.state = {
             imageId:  this.props.match.params.id,
             sizes: {},
             editing: "",
             showModal: true
             }

         this.handleDone = this.handleDone.bind(this);
         this.handleEdit = this.handleEdit.bind(this);
         this.handleFpx = this.handleFpx.bind(this);
         this.handleFpy = this.handleFpy.bind(this);
         this.handleFpz = this.handleFpz.bind(this);
    }
   
    handleFpx(percent) {
        let newvalue = parseInt(percent, 10) / 100;
        let {editing} = this.state;
        let updatedSize = {};
        updatedSize[editing] = Object.assign({}, this.state.sizes[editing], {fpx: newvalue});
        let newSizes = Object.assign({}, this.state.sizes, updatedSize)
        this.setState({sizes: newSizes})
    }

    handleFpy(percent) {
        let newvalue = parseInt(percent, 10) / 100;
        let {editing} = this.state;
        let updatedSize = {};
        updatedSize[editing] = Object.assign({}, this.state.sizes[editing], {fpy: newvalue});
        let newSizes = Object.assign({}, this.state.sizes, updatedSize)
        this.setState({sizes: newSizes})    
    }
    
    handleFpz(percent) {
        let newvalue = parseInt(percent, 10);
        let {editing} = this.state;
        let updatedSize = {};
        updatedSize[editing] = Object.assign({}, this.state.sizes[editing], {fpz: newvalue});
        let newSizes = Object.assign({}, this.state.sizes, updatedSize)
        this.setState({sizes: newSizes})
    }    

    handleDone(percent) {
        console.log("Done "+percent)
    }

    handleEdit(e) {
        let updatedSize = {};
        updatedSize[e.target.id] = Object.assign({}, this.state.sizes[e.target.id], {debug: true});
        let newSizes = Object.assign({}, this.state.sizes, updatedSize)

        this.setState({editing: e.target.id, [e.target.id]: newSizes})        
    }

    componentDidMount() {
        let addParams = {fpx: 0.5, fpy: 0.5, fpz: 100, debug: false}
        let fullSpecs = {};
        for (var id in this.props.propdata.settings) {
            fullSpecs[id] = Object.assign({}, this.props.propdata.settings[id], addParams);
        }
        this.setState({sizes: fullSpecs})
        this.setState({imageId: this.props.match.params.id});
    }

    render() {
        let Sliders = null;
        let {sizes} = this.state;

        if (this.state.editing !== "") {
            Sliders = genSliders(this.state.sizes[this.state.editing], this.handleFpx, this.handleFpy, this.handleFpz, this.handleDone)
        }

        return (
            <div>
              <h1>Asset</h1>              
              {
                  Object.keys(sizes).map(item => {
                      let debug = item === this.state.editing;
                      let sizeObj = sizes[item];
                      let params = "?w="+sizeObj.w+"&h="+sizeObj.h+"&fit=crop&auto=compress&fp-x="+
                                    sizeObj.fpx+"&fp-y="+sizeObj.fpy+"&fp-z="+sizeObj.fpz+"&fp-debug="+debug;
                      let fullUrl = this.props.propdata.images[this.state.imageId]+params;
                      return (
                        <div key={item} style={styles.panel}>
                            <h3>{sizeObj.name}</h3>
                            <p><i>width: {sizeObj.w}, height: {sizeObj.h}</i>{"   "}
                            <Button size="sm" id={item} variant="primary" onClick={this.handleEdit}>
                                {this.state.editing === ""? "Edit" : "Save"}
                            </Button>
                            </p>

                            <Image src={fullUrl} />

                            {this.state.editing === item? Sliders : null}

                            <Form.Group>
                            <Form.Label><strong>Param String</strong></Form.Label>
                            <Form.Control type="test" disabled value={params}/>
                            </Form.Group>


                        </div>
                      )
                  })
              }
                
            </div>

        )
    }
}

export default Asset;
