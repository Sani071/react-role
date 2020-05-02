import React from 'react'
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,

} from "mdbreact";
export default function ModalBody({ modal, toggle, title, children, classNames, header }) {
  return (
    <MDBContainer>
      <MDBModal isOpen={ modal } toggle={ toggle } className={ classNames.join(" ") }>
        { header && (
          <MDBModalHeader toggle={ toggle }>{ title }</MDBModalHeader>
        ) }

        <MDBModalBody>{ children }</MDBModalBody>
        {/*
         <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        */}

      </MDBModal>
    </MDBContainer>
  )
}
