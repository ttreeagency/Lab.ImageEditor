import { EMPTY, PREVIEW, CROPPING } from './states';

const chooseFromMedia = () => {
    console.log('Choose from media');
    const media = {media: 'foo'};
    return { name: PREVIEW, media}
};
const chooseFromFile = () => {
    console.log('Choose from file');
    const media = {media: 'foo'};
    return { name: PREVIEW, media}
};

const previewSuccess = () => {
    console.log('Preview Success');
};

const previewError = () => {
    console.log('Preview Error');
};

const clearSelection = () => {
    console.log('Clear Asset Selection');
    return { name: EMPTY}
};

const confirmCropping = () => {
    console.log('Confirm Cropping');
    const media = {media: 'foo'};
    return { name: PREVIEW, media}
};

const closeCropping = () => {
    console.log('Close Cropping');
    const media = {media: 'foo'};
    return { name: PREVIEW, media}
};

const showCropping = () => {
    console.log('Show Cropping');
    const media = {media: 'foo'};
    return { name: CROPPING, media}
};

const machine = {
    [EMPTY]: {
        chooseFromMedia,
        chooseFromFile,
    },
    [PREVIEW]: {
        previewSuccess,
        previewError,
        showCropping,
        clearSelection,
    },
    [CROPPING]: {
        confirmCropping,
        closeCropping,
    },
};

export default machine;
