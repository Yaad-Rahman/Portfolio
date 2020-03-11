import React from 'react';
import Navbar from './common/Navbar';
import Loader from './common/Loader';
import AboutHeading from './aboutpage/AboutHeading';
import Reason from './aboutpage/Reason';
import Points from './aboutpage/Points';
import Footer from './common/Footer';

class About extends React.Component {
    state={
        isLoading: true
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    render() {
        return (
            this.state.isLoading ? 
            <Loader />
            :
            <div>
                
                <Navbar />
                <div className="main-container">
                    <AboutHeading
                        topic="A Little Information About Me"
                        details="Some informations that you need to know about me" 
                    />
                    <Reason 
                        heading="Why Should You Hire Me ?"
                        reason="Because I am fast learner and passionate programmer"
                        details="I am very interested to learn new things and technologies, continously I am developing myself"
                        image="/pc.jpg"
                    />

                    <Points 
                        heading="A Little Things You May Need To Know"
                        point_1="gaab"
                        point_1_details="Ami onk beshi gaab"
                        point_2="Fast Learner"
                        point_2_details="Love to learn new things using my basic knowledge as fast as I can"
                        point_3="Creative Thinker"
                        point_3_details="Market Analysis about new solutions in an optimize way using brain storming"
                    />
                    <AboutHeading
                        topic="Check out my resume"
                        details="information about"  
                        modal={true}
                        modalTxt="My Resume"
                        modal_title="Rafiur_Rahman_Resume"
                    />
                    
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default About;