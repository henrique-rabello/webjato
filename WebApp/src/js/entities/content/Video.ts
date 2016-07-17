/// <reference path="../enums/VideoType.ts" />
/// <reference path="ContentBase.ts" />
/// <reference path="ContentSize.ts" />

class Video extends ContentBase {
    public VideoType: VideoType;
    public VideoId: string;
    public Size: ContentSize;
}