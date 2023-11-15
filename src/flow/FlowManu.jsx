import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlowMenu = (props) => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate('/');
    }
    return (
        <>
            <h3>Flow menu</h3>
            <br/>
            <button className='btn btn-danger' onClick={routeChange} >Back</button>
        </>
    );
}

export default FlowMenu;