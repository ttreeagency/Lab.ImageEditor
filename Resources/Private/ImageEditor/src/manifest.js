import manifest from '@neos-project/neos-ui-extensibility';

import ImageEditor from './ImageEditor';

manifest('Ttree.Lab.ImageEditor:ImageEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('Ttree.Lab.ImageEditor/Inspector/Editors/ImageEditor', {
        component: ImageEditor
    });
});
