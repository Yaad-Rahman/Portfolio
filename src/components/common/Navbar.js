import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
			<nav className="simple-bar top-bar">
				<div className="container">
				
				
					<div className="row nav-menu">
						<div className="col-md-3 col-sm-3 columns">
							<a href="index.html" />
							<h5 className="logo logo-dark"><strong>R.Rahman</strong></h5>
						</div>
					
						<div className="col-md-9 col-sm-9 columns text-right">
							<ul className="menu">
								<a>

								</a>
								<li>
									<Link to="/" >Home</Link>
								</li>
								<li>
									<Link to="/about" >About Me</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>

								
							</ul>
		
							
						</div>
					</div>
					
					<div className="mobile-toggle">
						<i className="icon icon_menu" />
					</div>
					
				</div>
			</nav>
		
		</div>
)
}
}

export default Navbar;


