/// <reference path="jquery.d.ts" />

interface ILightboxMe extends JQuery {
    lightbox_me: (options: ILightboxMeOptions) => void;
}

interface ILightboxMeOptions {
    appearEffect?: string;
    appearEase?: string;
    overlaySpeed?: number;
    lightboxSpeed?: string;
    closeSelector?: string;
    closeClick?: boolean;
    closeEsc?: boolean;
    destroyOnClose?: boolean;
    showOverlay?: boolean;
    onLoad?: () => void;
    onClose?: () => void;
    classPrefix?: string;
    zIndex?: number;
    centered?: boolean;
    modalCSS?: any;
    overlayCSS?: any;
}