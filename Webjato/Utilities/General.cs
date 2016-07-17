using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webjato.Utilities {
    public class General {
        public virtual string GeneratePassword() {
            string[] words = { "bu", "le", "ca", "do", "ma", "pi", "he", "tv", "we", "za", "lu", "ra", "ba", "ja", "co", "la", "es", "vi" };
            var word = "";
            var rnd = new Random();
            for (var i = 0; i < 3; i++) {
                word += words[rnd.Next(words.Length)];
            }
            while (word.Length < 8) {
                word += (2 + rnd.Next(7)).ToString(CultureInfo.InvariantCulture);
            }
            return word;
        }

        public virtual string NormalizeString(string name) {
            var normalizedString = name.Normalize(NormalizationForm.FormD);
            var stringBuilder = new StringBuilder();
            foreach (var c in normalizedString) {
                switch (CharUnicodeInfo.GetUnicodeCategory(c)) {
                    case UnicodeCategory.LowercaseLetter:
                    case UnicodeCategory.UppercaseLetter:
                    case UnicodeCategory.DecimalDigitNumber:
                        stringBuilder.Append(c);
                        break;
                    case UnicodeCategory.SpaceSeparator:
                    case UnicodeCategory.ConnectorPunctuation:
                    case UnicodeCategory.DashPunctuation:
                        stringBuilder.Append('-');
                        break;
                }
            }
            var result = stringBuilder.ToString();
            result = String.Join("_", result.Split(new[] { '_' }, StringSplitOptions.RemoveEmptyEntries));// remove duplicate underscores
            return (result.ToLower());
        }

        public virtual string GetS3FolderForSite(ObjectId siteId) {
            return "sites/" + siteId.ToString() + "/";
        }

        public virtual string GenerateRandomFileName(string extension) {
            return DateTime.UtcNow.Ticks.ToString(CultureInfo.InvariantCulture) + extension.ToLower();
        }

        //TODO - TESTAR
        public virtual void CopyFolder(string sourceFolder, string targetFolder, bool recursive) {
            var dir = new DirectoryInfo(sourceFolder);
            if (!dir.Exists) {
                throw new DirectoryNotFoundException("Source directory does not exist or could not be found: " + sourceFolder);
            }
            if (!Directory.Exists(targetFolder)) {
                Directory.CreateDirectory(targetFolder);
            }
            var files = dir.GetFiles();
            foreach (FileInfo file in files) {
                file.CopyTo(Path.Combine(targetFolder, file.Name), false);
            }
            var dirs = dir.GetDirectories();
            if (recursive) {
                foreach (DirectoryInfo subdir in dirs) {
                    CopyFolder(subdir.FullName, Path.Combine(targetFolder, subdir.Name), recursive);
                }
            }
        }

        //TODO - TESTAR
        public virtual void ClearFolderContents(string folder) {
            if (!Directory.Exists(folder)) {
                return;
            }
            var files = Directory.GetFiles(folder, "*.*", SearchOption.AllDirectories);
            foreach (var file in files) {
                File.Delete(file);
            }
            var dirs = Directory.GetDirectories(folder);
            foreach (var dir in dirs) {
                Directory.Delete(dir, true);
            }
        }
    }
}