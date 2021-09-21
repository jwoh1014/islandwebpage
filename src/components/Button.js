import React, { Component } from "react";
import SignIn from "./SignIn";
import { makeStyles } from '@material-ui/core/styles';
import "./SignIn.css";
import { Button } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    }}));

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  

  render() {
    return (
        
      <>
        <button className="button" onClick={this.openModal}>더 알아보기</button>
  
        <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default Buttons;