import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header className="header-icons overlay">
                        <div className="background-image-holder parallax-background">
                            <img className="background-image" alt="Background Image" src="/proPic.JPG" />
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="text-white">
                                        {this.props.heading}</h1>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="icon icon-desktop text-white" />
                                    <h2 className="text-white">{this.props.skill1}</h2>
                                </div>
                                
                                <div className="col-sm-4">
                                    <i className="icon text-white icon-phone" />
                                    <h2 className="text-white">{this.props.skill2}</h2>
                                </div>
                                
                                <div className="col-sm-4">
                                    <i className="icon text-white icon-strategy" />
                                    <h2 className="text-white">{this.props.skill3}</h2>
                                </div>
                            </div>
            
                        </div>	
                </header>
        )
    }
}

export default Header;