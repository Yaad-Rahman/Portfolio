import React from 'react';

class Story extends React.Component {
    render() {
        const s = this.props;
        return (
            <section className="timeline-1">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
							<h1>{s.heading}</h1>
							<p className="lead">
								{s.details} 
							</p>	
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="timeline-event">
								<div className="col-sm-6 col-md-push-6">
									<h2>{s.year_1}</h2>
									<h5>{s.story_1}<br /></h5>
								</div>
								
								<div className="middle">
									<i className="icon icon-map"></i>
									<div className="vertical-line"></div>
								</div>
								
								<div className="col-sm-6 col-md-pull-6">
									<p>
										{s.story_1_details}&nbsp;</p>
								</div>
								
								
							</div>
							
							
							<div className="timeline-event">
								<div className="col-sm-6">
									<h2>{s.year_2}</h2>
									<h5>{s.story_2}</h5>	
								</div>
								
								<div className="middle">
									<i className="icon icon-target"></i>
									<div className="vertical-line"></div>
								</div>
								
								<div className="col-sm-6">
									<p>
										{s.story_2_details}</p>
									
								</div>
							</div>
							
						</div>
					</div>
					
		
				</div>
			</section>
        )
    }
}

export default Story;