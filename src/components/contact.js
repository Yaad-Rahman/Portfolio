import React from 'react';
import Loader from './common/Loader';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

class Contanct extends React.Component {
    state= {
        isLoading: true
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    render() {
        return(
            this.state.isLoading ?
            <Loader />
            :
            <div>
                <Navbar />
                <div className="main-container">
                <section className="map-overlay">
				<div className="map-holder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1130.4782194424542!2d90.35780668258668!3d23.75573658566298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5dcb4c9adb%3A0x77b339ebf1bcb408!2sCafe%20Moon!5e1!3m2!1sen!2sbd!4v1583653464420!5m2!1sen!2sbd" ></iframe>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 text-center">
							<div className="details-holder">
								<div className="align-vertical">
									<img alt="Logo" src="/logo.svg" />
									<p className="lead">
										yaadrahman95@gmail.com<br/>
										+8801677654002</p>
									<p>Mohammadpur,<br /> Dhaka</p>
                  <a href="https://github.com/Yaad-Rahman" class="btn btn-primary">My Github Profile</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
                </div>
            <Footer />
            </div>



        )
    }
}

export default Contanct;
