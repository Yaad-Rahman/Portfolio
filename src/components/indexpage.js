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
						heading="Hello there! I am Rafiur Rahman. A diligent and self motivated web developer."
						skill1="Web Design"
						skill2="Web Development"
						skill3="Market Analysis"
					/>

					<Skills
						section="My skills"
						sectionDetails="Here are some of my web development skills"
						skillHeading1="Design"
						skillName1="Bootstrap"
						skillCapacity1={10}
						skillName2="Material UI"
						skillCapacity2={10}
						skillName3="Semantic UI"
						skillCapacity3={7}
						skillHeading2="Developing"
						skillName4="HTML5 ,CSS3 & JavaScript"
						skillCapacity4={10}
						skillName5="ReactJS & Redux"
						skillCapacity5={11}
						skillName6="Laravel 5"
						skillCapacity6={9}
						skillName7="MySQL"
						skillCapacity7={5}
					/>

					<Projects
						heading="Check out my projects"
						details="Here are some of my projects"
						project_1="Mario Plan"
						project_1_image="img/marioplan.png"
						project_1_details="A simple CRUD reactJs & redux app deployed in google firebase"
						project_1_link="https://yaad-dailyproject.web.app/signin"
						project_2="Prime Group"
						project_2_image="img/prime_group.png"
						project_2_details="An app to show iftar and seheri times for different districts. Made using React JS"
						project_3="Things I Need To Buy"
						project_3_image="img/things_i_need_to_buy.png"
						project_3_details="Aggresive marketing site created using wordpress and some raw php & css"
						project_3_link="https://thingsineedtobuy.com/"
						project_4="Potrolipi"
						project_4_image="img/potrolipi.png"
						project_4_details="A blog site which was made using wordpress"
						project_4_link="https://potrolipi.com/"

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
