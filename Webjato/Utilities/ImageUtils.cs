using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using SystemInterface.IO;

namespace Webjato.Utilities {
    public class ImageUtils {
        private IFile File;
        private IPath Path;
        private General general;

        public ImageUtils(IFile file, IPath path, General general) {
            this.File = file;
            this.Path = path;
            this.general = general;
        }

        //TODO HÁ MÉTODOS NÃO TESTADOS NESTA CLASSE
        public virtual Webjato.Entities.Size GetImageDimensions(string filepath) {
            using (var img = Image.FromFile(filepath)) {
                return new Webjato.Entities.Size { Width = img.Width, Height = img.Height };
            }
        }

        public virtual Webjato.Entities.Size ScaleImage(string filepath, double scale, string targetPath) {
            using (var img = Image.FromFile(filepath)) {
                var width = (int)Math.Ceiling((double)img.Width * scale / 100);
                var height = (int)Math.Ceiling((double)img.Height * scale / 100);
                using (var imgNew = new Bitmap(img, width, height)) {
                    SaveImage(imgNew, 70, targetPath);
                    return new Webjato.Entities.Size { Width = width, Height = height };
                }
            }
        }

        public virtual string ImportImageIntoTheSystem(string filepath, string tmpFolder) {
            var size = this.GetImageDimensions(filepath);
            var maxWidth = 1000;
            if (size.Width <= maxWidth) {
                return filepath;
            }
            double scale = ((double)maxWidth / (double)size.Width) * 100;
            var targetPath = this.Path.Combine(tmpFolder, this.general.GenerateRandomFileName(this.Path.GetExtension(filepath)));
            this.ScaleImage(filepath, scale, targetPath);
            this.File.Delete(filepath);
            return targetPath;
        }

        private void SaveImage(Bitmap bmp, long quality, string targetPath) {
            var qualityParam = new EncoderParameter(Encoder.Quality, quality);
            var parameters = new EncoderParameters();
            parameters.Param[0] = qualityParam;
            bmp.Save(targetPath, GetImageEncoder(Path.GetExtension(targetPath)), parameters);
        }

        private ImageCodecInfo GetImageEncoder(string fileExtension) {
            ImageFormat format = null;
            switch (fileExtension.ToLower()) {
                case ".png":
                    format = ImageFormat.Png;
                    break;
                case ".gif":
                    format = ImageFormat.Gif;
                    break;
                default:
                    format = ImageFormat.Jpeg;
                    break;
            }
            var codecs = ImageCodecInfo.GetImageDecoders();
            foreach (var codec in codecs) {
                if (codec.FormatID == format.Guid) {
                    return (codec);
                }
            }
            return (null);
        }

        public virtual void AssureMinimunCanvasSize(string sourceFilePath, string targetFilePath, int canvasMinWidth, int canvasMinHeight) {
            using (var sourceImage = Image.FromFile(sourceFilePath)) {
                var newWidth = (sourceImage.Width < canvasMinWidth) ? canvasMinWidth : sourceImage.Width;
                var newHeight = (sourceImage.Height < canvasMinHeight) ? canvasMinHeight : sourceImage.Height;
                using (var newCanvas = new Bitmap(newWidth, newHeight)) {   //Cria um canvas vazio
                    using (var gfx = Graphics.FromImage(newCanvas)) {
                        gfx.DrawImage(sourceImage, 0, 0, sourceImage.Width, sourceImage.Height);    // Cola a imagem original no canvas
                    }
                    newCanvas.Save(targetFilePath, ImageFormat.Png);
                }
            }
        }

        public virtual void Crop(string sourceFilePath, string targetFilePath, int x, int y, int width, int height) {
            using (var image = new Bitmap(sourceFilePath)) {
                //As normalizações abaixo evitam coordenadas inválidas que ultrapassam a largura ou altura da imagem
                var deltaWidth = image.Width - (x + width);
                if (deltaWidth < 0) {
                    width -= Math.Abs(deltaWidth);
                }
                var deltaHeight = image.Height - (y + height);
                if (deltaHeight < 0) {
                    height -= Math.Abs(deltaHeight);
                }
                using (var cropped = image.Clone(new Rectangle(x, y, width, height), image.PixelFormat)) {
                    cropped.Save(targetFilePath);
                }
            }
        }
    }
}