using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class LineRepository : ContentBaseRepository<Line> {
        private MongoCollection<Line> db;
        private ContentUtilities utils;

        public LineRepository(MongoCollection<Line> collection, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual Line Create(ObjectId siteId, ObjectId pageId, bool isHorizontal, int zindex) {
            var line = Create(siteId, pageId, 20, 270, zindex);
            line.Color = "#0000FF";
            line.IsHorizontal = isHorizontal;
            line.Width = 1;
            line.LineStyle = LineStyle.SOLID;
            line.Size = 350;
            db.Save(line);
            return line;
        }

        public virtual Line Update(Line line) {
            var myLine = Get(line.Id);
            utils.AuthenticateContent(myLine, line);
            myLine.Color = line.Color;
            myLine.IsHorizontal = line.IsHorizontal;
            myLine.Width = line.Width;
            myLine.LineStyle = line.LineStyle;
            myLine.Size = line.Size;
            myLine.Position = utils.NormalizePosition(line.Position);
            myLine.Updated = DateTime.UtcNow;
            db.Save(myLine);
            return myLine;
        }

        public Line Duplicate(Line original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated.Color = original.Color;
            duplicated.IsHorizontal = original.IsHorizontal;
            duplicated.Width = original.Width;
            duplicated.LineStyle = original.LineStyle;
            duplicated.Size = original.Size;
            db.Save(duplicated);
            return duplicated;
        }
    }
}