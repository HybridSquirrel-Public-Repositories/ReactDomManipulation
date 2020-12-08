import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


export class Modal_ extends Component{
    constructor(prop) {
        super(prop);
        this.state={
            show:false
        }
    }

    handleModal(){
        this.setState({show: !this.state.show})
    }


    render() {
        return(
            <>
                <Button variant="primary" onClick={()=>{this.handleModal()}}>
                    Launch modal
                </Button>

                <Modal
                    show={this.state.show}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Modal is shown
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{this.handleModal()}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}