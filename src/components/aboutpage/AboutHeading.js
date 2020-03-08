import React from 'react';

class AboutHeading extends React.Component {
    render() {
        const p = this.props;
        return (
            <section className="pure-text-centered">
				<div className="container">
					<div className="row">
						<div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
							
							<h1><strong>{p.topic}</strong></h1>
							<p className="lead">
								{p.details}
							</p>
						</div>
					</div>
		
				</div>
			</section>
        )
    }
}

export default AboutHeading;