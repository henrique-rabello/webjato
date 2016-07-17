using MongoDB.Driver;
using System.Configuration;

namespace Webjato.Tests {
    public static class TestUtilities {
        public static MongoCollection<T> GetCollection<T>() {
            return
                new MongoClient(TestConstants.ConnectionString)
                    .GetServer()
                        .GetDatabase(TestConstants.Database)
                            .GetCollection<T>(typeof(T).Name);
        }
    }
}