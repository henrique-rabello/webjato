using MongoDB.Bson;
using Webjato.Entities.Content;

namespace Webjato.Entities {
    public interface IContentBaseRepository {
        void Delete(ContentBase content);
        ContentBase UpdatePosition(ContentBase content);
        ContentBase UpdateZIndex(ObjectId id, int zindex);
    }
}