import React from 'react';
import Navbar from './common/Navbar';
import Loader from './common/Loader';
import AboutHeading from './aboutpage/AboutHeading';
import Reason from './aboutpage/Reason';
import Points from './aboutpage/Points';

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
                        details="information about"    
                    />
                    <Reason 
                        heading="Why Should You Hire Me ?"
                        reason="Because I am a gaab"
                        details="ami gaab galib o gaab aku o gaab"
                        image="img/devices.png"
                    />

                    <Points 
                        heading="A Little Things You May Need To Know"
                        point_1="gaab"
                        point_1_details="Ami onk beshi gaab"
                        point_2="galib o ekta gaab"
                        point_2_details="galib er mathar tar kata"
                        point_3="Aku Chod"
                        point_3_details="number one panic chod"
                    />
                </div>
            </div>
        )
    }
}

export default About;