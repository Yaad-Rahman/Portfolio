import React from 'react';

class Skills extends React.Component {
    render() {
        const s = this.props; 
        return (
            <section className="skill-bars">
		
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
							<h1>{s.section}</h1>
							<p className="lead">
								{s.sectionDetails} 
							</p>	
						</div>
					</div>
					
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<div className="skills-left skills">
								<h3>{s.skillHeading1}</h3>
								<ul className="skills-ul">
									<li>
										<span>{s.skillName1}</span>
										<div className="skill-bar-holder">
											<div className={`skill-capacity col-xs-${s.skillCapacity1}`}></div>
										</div>
									</li>
									
									<li>
										<span>{s.skillName2}</span>
										<div className="skill-bar-holder">
											<div className={`skill-capacity col-xs-${s.skillCapacity2}`}></div>
										</div>
									</li>
									
									<li>
										<span>{s.skillName3}</span>
										<div className="skill-bar-holder">
											<div className={`skill-capacity col-xs-${s.skillCapacity3}`}></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						
						<div className="col-md-6 col-sm-12">
							<div className="skills-right skills">
								<h3>{s.skillHeading2}</h3>
								<ul className="skills-ul">
									<li>
										<span>{s.skillName4}</span>
										<div className="skill-bar-holder">
											<div className={`skill-capacity col-xs-${s.skillCapacity4}`}></div>
										</div>
									</li>
									
									<li>
										<span>{s.skillName5}</span>
										<div className="skill-bar-holder">
											<div className={`skill-capacity col-xs-${s.skillCapacity5}`}></div>
										</div>
									</li>
									
									<li>
										<span>{s.skillName6}</span>
										<div className="skill-bar-holder">
											<div className={`skill-capacity col-xs-${s.skillCapacity6}`}></div>
										</div>
									</li>
									
									<li>
										<span>{s.skillName7}</span>
										<div className="skill-bar-holder">
											<div className={`skill-capacity col-xs-${s.skillCapacity7}`}></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					
		
				</div>
			    </section>
        )
    }
}

export default Skills;