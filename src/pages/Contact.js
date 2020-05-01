import React from "react";

function Contact() {
    return (
        <div>
            <hr className="mt-5"></hr>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 card w-75 border-0">
                        <div className="card-body">
                            <h3 className="display-4 card-title">Full Stack Developer</h3>
                            <h5 className="card-text">Please contact me to work together, I would love to be part of your project, solution.</h5>
                            <a href="mailto:lfernandez79@gmail.com?subject=Hello%20again!">This is my email <strong>lfernandez79@gmail</strong>, please contact me!</a>
                            <a className="d-flex flex-row-reverse" href="https://www.linkedin.com/in/joseleonardofernandez/"><i className="fab fa-linkedin-in fa-2x pt-2"></i></a>
                            <a className="d-flex flex-row-reverse mt-1" href="https://github.com/lfernandez79"><i className="fab fa-github fa-2x pt-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="container mt-5"></hr>

        </div>
    )
}
export default Contact;