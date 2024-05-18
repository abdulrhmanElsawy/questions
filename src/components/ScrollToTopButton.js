import React, { Component } from 'react';
import './css/ScrollToTopButton.css'; // Import your CSS file for styling

class ScrollToTopButton extends Component {
state = {
    showButton: false,
};

componentDidMount() {
    // Add a scroll event listener to track scroll position
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    // Remove the scroll event listener when the component unmounts
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    this.setState({
    showButton: scrollTop > 100, // Show the button when the user scrolls down a bit
    scrollPercentage,
    });
};

scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
};

render() {
    const { showButton, scrollPercentage } = this.state;

    return (
    <div>
        {showButton && (
        <>
        
        <button className="scroll-to-top-button" onClick={this.scrollToTop}>
            <i class="las la-arrow-up"></i>
        </button>
        
        <div className="scroll-percentage-tracker">
        <div
            className="scroll-percentage-fill"
            style={{ width: `${scrollPercentage}%` }}
        ></div>
        </div>

</>
            )}
    </div>
    );
}
}

export default ScrollToTopButton;
