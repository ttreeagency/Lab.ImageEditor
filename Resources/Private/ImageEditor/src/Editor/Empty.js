import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Button} from '@neos-project/react-ui-components';

export default class Empty extends Component {
    static propTypes = {
        chooseFromMedia: PropTypes.func.isRequired,
        chooseFromFile: PropTypes.func.isRequired,
    };

    render() {
        const {chooseFromMedia, chooseFromFile} = this.props;

        return (
            <div>
                <div><strong>I'm empty</strong></div>
                <Button onClick={chooseFromMedia} style="brand">Media</Button>
                <Button onClick={chooseFromFile} style="brand">File</Button>
            </div>
        );
    }
}
