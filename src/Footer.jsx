
import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

function Footer(){
    return (
        <MDBFooter className='text-center text-white footer' style={{ backgroundColor: '#caced1' }}>
        <div className='text-center p-3 footer-main' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
    </MDBFooter>
    )
}
export default Footer