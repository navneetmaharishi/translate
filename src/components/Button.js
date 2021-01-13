import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    // static contextType = LanguageContext;

    // renderSubmit(value) {
    //     return value === 'english' ? 'Submit' : 'Voorleggen';
    // };

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    };

    render() {
        // const text = this.context === 'english' ? 'submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {color => <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {/* {value => this.renderSubmit(value)} */}
                        {({ language }) => this.renderSubmit(language)}
                    </LanguageContext.Consumer>
                </button>}
            </ColorContext.Consumer>
        );
    };
};

export default Button;