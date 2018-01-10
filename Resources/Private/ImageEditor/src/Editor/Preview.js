import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Button} from '@neos-project/react-ui-components';

export default class Preview extends Component {
    static propTypes = {
        clearSelection: PropTypes.func.isRequired,
        showCropping: PropTypes.func.isRequired,
    };

    render() {
        const {clearSelection, showCropping} = this.props;

        return (
            <div>
                <div><strong>Preview</strong></div>
                <Button onClick={clearSelection} style="brand">Clear Me</Button>
                <Button onClick={showCropping} style="brand">Crop Me</Button>
            </div>
        );
    }
}
