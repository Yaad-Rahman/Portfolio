import React from 'react';

class Reason extends React.Component {
    render() {
        const p = this.props;
        return (
            <section className="inline-image-right">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 align-vertical no-align-mobile">
                        <h1>{p.heading}</h1>
                        <h6>{p.reason}</h6>
                        <p className="lead">
                            {p.details}
                        </p>
                    </div>
                    
                    <div className="col-sm-6 text-center">
                        <img alt="Product Image" className="product-image" src={p.image} />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Reason;
