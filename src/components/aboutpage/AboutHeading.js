import React from 'react';
import SimpleModal from '../common/Modal';

class AboutHeading extends React.Component {
    render() {
		const p = this.props;
		console.log("props", this.props);
		console.log("state", this.state);
        return (
            <section className="pure-text-centered">
				<div className="container">
					<div className="row">
						<div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
							
							<h1><strong>{p.topic}</strong></h1>
							<p className="lead">
								{p.details}
							</p>
							{ this.props.modal ?
							<SimpleModal
							 modalTxt={this.props.modalTxt}
							 modal_title={this.props.modal_title}
							 />
							: null
							}
						</div>
					</div>
		
				</div>
			</section>
        )
    }
}

export default AboutHeading;