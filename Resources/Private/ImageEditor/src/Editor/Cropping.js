import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Button} from '@neos-project/react-ui-components';

export default class Cropping extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        confirm: PropTypes.func.isRequired,
    };

    render() {
        const { close, confirm } = this.props;

        return (
            <div>
                <div><strong>Cropping</strong></div>
                <Button onClick={close} style="brand">Close</Button>
                <Button onClick={confirm} style="brand">Confirm</Button>
            </div>
        );
    }
}
