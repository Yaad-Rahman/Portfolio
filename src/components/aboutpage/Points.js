import React from 'react';

class Points extends React.Component {
    render() {
        const p = this.props;
        return (
            <section className="duplicatable-content">
			
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1>{p.heading}</h1>
						</div>
					</div>
		
					<div className="row">
						<div className="col-sm-6">
							<div className="feature feature-icon-large">
								<div className="pull-left">
									<i className="icon icon-desktop"></i>
								</div>
								<div className="pull-right">
									<h5>{p.point_1}</h5>
									<p>
										{p.point_1_details}
									</p>
								</div>
							</div>
						</div>
						
						<div className="col-sm-6">
							<div className="feature feature-icon-large">
								<div className="pull-left">
									<i className="icon icon-documents"></i>
								</div>
								<div className="pull-right">
									<h5>{p.point_2}</h5>
									<p>
										{p.point_2_details}
									</p>
								</div>
							</div>
						</div>
						
						<div className="col-sm-6">
							<div className="feature feature-icon-large">
								<div className="pull-left">
									<i className="icon icon-strategy"></i>
								</div>
								<div className="pull-right">
									<h5>{p.point_3}</h5>
									<p>
                                        {p.point_3_details}
									</p>
								</div>
							</div>
						</div>
						
						<div className="col-sm-6">
							<div className="feature feature-icon-large">
								<div className="pull-left">
									<i className="icon icon-profile-male"></i>
								</div>
								<div className="pull-right">
									<h5>{p.point_4}</h5>
									<p>
                                        {p.point_4_details}
									</p>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			
			</section>
        )
    }
}

export default Points;