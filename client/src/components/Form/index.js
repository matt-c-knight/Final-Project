import React from "react";
import "./style.css";


function Form(props) {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Hello {props.userName}</h4>
                        <p className="signup">Sign Up</p>
                        <form className="form" onSubmit={props.handleSubmit}>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={e => props.setUsername(e.target.value)}
                            />
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={e => props.setPassword(e.target.value)}
                            />
                            <button
                                className="btn btn-success"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>


                    <div className="col-md-4">
                        {/* <h4>Hello {props.userName}</h4> */}
                        <p className="signup">Login</p>
                        <form className="form" onSubmit={props.handleSubmit2}>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={e => props.setUsername(e.target.value)}
                            />
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={e => props.setPassword(e.target.value)}
                            />
                            <button
                                className="btn btn-success"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Form;