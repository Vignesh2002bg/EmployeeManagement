import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
class FooterCompoent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <>
        <footer className='footer p-2'>
            <h6 className='text-primary'>All Right Reserved 2023 @vigneshprofile</h6>
        </footer>
        </> );
    }
}
 
export default FooterCompoent;