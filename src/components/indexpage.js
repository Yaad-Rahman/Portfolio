import React from 'react';
import Loader from './common/Loader';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Header from './indexpage/Header';
import Skills from './indexpage/Skills';
import Projects from './indexpage/Projects';
import Story from './indexpage/Story';

class IndexPage extends React.Component {
	state= {
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
                    <Header 
						heading="Hello there! I am Rafiur Rahman"
						skill1="Web Design"
						skill2="Web Development"
						skill3="Market Analysis"
					/>

					<Skills
						section="My skills"
						sectionDetails="Here are some of my web development skills"	
						skillHeading1="Design"
						skillName1="Web Designing"
						skillCapacity1={10}
						skillName2="Material UI"
						skillCapacity2={10}
						skillName3="Semantic UI"
						skillCapacity3={7}
						skillHeading2="Developing"
						skillName4="HTML5 & CSS3"
						skillCapacity4={10}
						skillName5="Javascript / ReactJS"
						skillCapacity5={11}
						skillName6="Redux"
						skillCapacity6={9}
						skillName7="MySQL"
						skillCapacity7={5}
					/>

					<Projects
						heading="Check out my projects"
						details="Here are some of my projects"
						project_1="gugugaga"
						project_1_image="img/project_1.jpg"
						project_1_details="ki je korbo bujhi na"
						project_2="Fashion"
						project_2_image="img/project_2.jpg"
						project_2_details="jama kapor er site"
						project_3="Moon light"
						project_3_image="img/project_3.jpg"
						project_3_details="Chander alo"

					/>

					<Story
						heading="Here is little of my story"
						details="A passionate web developer"
						year_1="2014 - 2019"
						story_1="Completed graduation on Industrial and Production Engineering (IPE)" 
						story_1_details="I have completed my graduation from Ahsanullah University of
										Science & Technology(AUST) on IPE."
						year_2="2019-"
						story_2="Front-End Web Developing"
						story_2_details="Expertise on ReactJS, Redux and Material UI. Developed 
										two projects successfully"
					/>


            

                </div>

                <Footer />
                
                


            </div>
        )
    }
}

export default IndexPage;