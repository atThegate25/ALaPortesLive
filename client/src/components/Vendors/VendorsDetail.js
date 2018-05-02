import React, { Component } from 'react';


export default class VendorsDetail extends Component {
    render() {
        return (
            <div className="container marketing">

                {/* <!-- Three columns of text below the carousel --> */}
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-circle" src="./img/Mcdonalds.jpg" alt="Generic placeholder image" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>McDonalds</p>
                        <p><a className="btn btn-default" href="#" role="button">Order &raquo;</a></p>
                        {/* <!-- /.col-lg-4 --> */}
                    </div>
                    <div className="col-lg-4">
                        <img className="img-circle" src="img/Starbucks_Coffee_Logo.svg" alt="Generic placeholder image" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>StarBucks</p>
                        <p><a className="btn btn-default" href="#" role="button">Order &raquo;</a></p>
                        {/* <!-- /.col-lg-4 --> */}
                    </div>
                    <div className="col-lg-4">
                        <img className="img-circle" src="img/Subway_2016.svg" alt="Generic placeholder image" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Subway</p>
                        <p><a className="btn btn-default" href="#" role="button">Order &raquo;</a></p>
                        {/* <!-- /.col-lg-4 --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>

                {/* <!-- /.container --> */}
            </div>
        )
    }
}