import React from "react";

let HeroSection = (props) => {
    return(
    <div>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">TUP: Coding Challenge</span>
            </nav>

            <div className="row hero-section">
                <div className="col-md-12">
                    <div className="col-md justify-content-md-center">
                        <div class="hero-text">
                            <h1> Welcome Home </h1>
                            <p>Date Range Picker</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default HeroSection;