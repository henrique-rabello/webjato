/// <reference path="../enums/LinkType.ts" />
/// <reference path="ScalableImage.ts" />

class LinkedImage extends ScalableImage {
    public LinkType: LinkType;
    public LinkURL: string;
    public TargetPageId: string;
}