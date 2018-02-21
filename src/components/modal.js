import React, { Component } from 'react';

class Modal extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      const visibility = this.props.showModal ? 'block' : 'none';
      return (
         <div style={{...styles.overlayStyle, display: visibility}}>
            <div className="modal" style={styles.modalStyle}>
               { this.props.children }
            </div>
         </div>
      )
   }
}

export default Modal;

const styles = {
   overlayStyle: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, .7)',
      zIndex: 100
   },
   modalStyle: {
      maxWidth: '800px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '6.45rem',
      position: 'absolute',
      width: '95%',
      maxHeight: '95%',
      overflow: 'scroll'
   }
}