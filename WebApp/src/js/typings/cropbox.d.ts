/// <reference path="angular-1.2.d.ts" />

interface ICropBox extends ng.IAugmentedJQuery {
    cropbox: (options: ICropBoxOptions) => ICropper;
}

interface ICropper {
    getDataURL: () => string;
    zoomIn: () => void;
    zoomOut: () => void;
}

interface ICropBoxOptions {
    imageBox: string;
    thumbBox: string;
    spinner: string;
    imgSrc: string;
}