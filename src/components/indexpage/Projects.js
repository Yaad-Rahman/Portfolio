import React from 'react';

class Projects extends React.Component {
    render() {
        const p = this.props;
        return (
            <section className="no-pad-bottom projects-gallery">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
							<h1>{p.heading}</h1>
							<p className="lead">
								{p.details}
							</p>
						</div>
					</div>

				</div>

				<div className="projects-wrapper clearfix">


					<div className="projects-container">

						<div className="col-md-6 col-sm-12 no-pad project development image-holder">
							<div className="background-image-holder">
								<img className="background-image" alt="Background Image" src={p.project_1_image} />
							</div>
							<div className="hover-state">
								<div className="align-vertical">
									<h1 className="text-white"><strong>Project 1</strong>&nbsp;{p.project_1}</h1>
									<p className="text-white">{p.project_1_details}</p>
									<a href={p.project_1_link} className="btn btn-primary btn-white">See Project</a>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-sm-12 no-pad project development image-holder">
							<div className="background-image-holder">
								<img className="background-image" alt="Background Image" src={p.project_2_image} />
							</div>
							<div className="hover-state">
								<div className="align-vertical">
									<h1 className="text-white"><strong>Project 2</strong>&nbsp;{p.project_2}</h1>
									<p className="text-white">{p.project_2_details}</p>
								</div>
							</div>
						</div>

						<div className="col-md-4 col-sm-6 no-pad project print image-holder">
							<div className="background-image-holder">
								<img className="background-image" alt="Background Image" src={p.project_3_image} />
							</div>
							<div className="hover-state">
								<div className="align-vertical">
									<h1 className="text-white"><span>Project 3&nbsp;</span>{p.project_3}</h1>
									<p className="text-white">{p.project_3_details}</p>
									<a href={p.project_3_link} className="btn btn-primary btn-white">See Project</a>
								</div>
							</div>
						</div>

            <div className="col-md-6 col-sm-12 no-pad project development image-holder">
							<div className="background-image-holder">
								<img className="background-image" alt="Background Image" src={p.project_4_image} />
							</div>
							<div className="hover-state">
								<div className="align-vertical">
									<h1 className="text-white"><strong>Project 4</strong>&nbsp;{p.project_4}</h1>
									<p className="text-white">{p.project_4_details}</p>
									<a href={p.project_4_link} className="btn btn-primary btn-white">See Project</a>
								</div>
							</div>
						</div>

					</div>

				</div>

			</section>
        )
    }
}


export default Projects;
