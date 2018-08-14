import React from 'react';

export class Header extends React.Component {
    render(){
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 style={{marginLeft:'20px'}} className="my-0 mr-md-auto font-weight-normal">ProntLife</h5>
            </div>
        );
    }
}