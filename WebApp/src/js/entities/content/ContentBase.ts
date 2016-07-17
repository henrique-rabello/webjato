///<reference path="../enums/ContentType.ts" />
///<reference path="ContentPosition.ts" />

class ContentBase {
    public Id: string;
    public Type: ContentType;
    public SiteId: string;
    public PageId: string;
    public Position: ContentPosition;
    public Updated: Date;
    public Created: Date;
    public Selected: boolean;
    public IsNewContent: boolean;
    public Editing: boolean;
}