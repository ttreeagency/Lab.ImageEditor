import manifest from '@neos-project/neos-ui-extensibility';

import ImageEditor from './ImageEditor';

manifest('Ttree.Lab.ImageEditor:ImageEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.add('Ttree.Lab.ImageEditor:ImageEditor/Inspector/Editors/ImageEditor', {
        component: ImageEditor
    });
});
