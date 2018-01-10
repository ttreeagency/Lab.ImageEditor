import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { neos } from '@neos-project/neos-ui-decorators';
import { CROPPING, EMPTY, PREVIEW } from './StateMachine/states';

import machine from './StateMachine/machine';
import Automata from './Automata';

import Empty from './Editor/Empty';
import Preview from './Editor/Preview';
import Cropping from './Editor/Cropping';

@neos(globalRegistry => ({
    secondaryEditorsRegistry: globalRegistry.get('inspector').get('secondaryEditors')
}))
class ImageEditor extends Automata {
    static propTypes = {
        // The propertyName this editor is used for, coming from the inspector
        identifier: PropTypes.string,

        value: PropTypes.oneOfType([
            PropTypes.shape({
                __identifier: PropTypes.string
            }),
            PropTypes.string
        ]),
        // "hooks" are the hooks specified by commit()
        hooks: PropTypes.object,

        commit: PropTypes.func.isRequired,
        renderSecondaryInspector: PropTypes.func.isRequired,
        secondaryEditorsRegistry: PropTypes.object.isRequired,

        options: PropTypes.object,
        highlight: PropTypes.bool,

        // Public API:
        // I18N key
        fileChooserLabel: PropTypes.string,

        allowedFileTypes: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.prepareMachine(machine, EMPTY, {
            [EMPTY]: () => <Empty
                chooseFromMedia={() => this.transition('chooseFromMedia')} chooseFromFile={() => this.transition('chooseFromFile')}
            />,
            [PREVIEW]: () => <Preview
                clearSelection={() => this.transition('clearSelection')}
                showCropping={() => this.transition('showCropping')}
            />,
            [CROPPING]: () => <Cropping
                confirm={() => this.transition('confirmCropping')}
                close={() => this.transition('closeCropping')}
            />,
        });
    }
}

export default ImageEditor;
