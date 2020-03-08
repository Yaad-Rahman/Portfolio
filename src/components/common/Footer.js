import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
			<footer className="bg-primary short-2">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<span className="text-white">© 2020 Yaad Rahman - All Rights Reserved.</span>
							<br />
							<br />
							<i className="icon text-white icon_mail"></i>
							<a href="contact.html" className="text-white"><span className="text-white"> Get in touch with me <i className="icon arrow_right"></i></span></a>
						</div>
					</div>
				</div>
				
			</footer>
		</div>
        )
    }
}

export default Footer;