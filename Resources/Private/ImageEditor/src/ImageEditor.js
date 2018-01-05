import React, {Component} from 'react';

import PropTypes from 'proptypes';

export default class ImageEditor extends Component {

    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        validationErrors: PropTypes.array,
        highlight: PropTypes.bool,
        options: PropTypes.object,

        i18nRegistry: PropTypes.object.isRequired
    };

    render() {
        const {value, commit, validationErrors, options, i18nRegistry, highlight} = this.props;

        const placeholder = "HI";
        return (
            <div>
                HALLO MY TEXT FIELDX {placeholder}
            </div>
        );
    }
}
