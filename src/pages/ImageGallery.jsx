import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  Download,
} from "lucide-react";

const ImageGallery = ({ images, title }) => {
  const handleDownload = (imageUrl, imageName) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (platform, imageUrl) => {
    let shareUrl;
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}`;
        break;
      case "instagram":
        // Note: Instagram doesn't support direct sharing via URL
        alert("Instagram sharing is not supported via web. Please use the Instagram app to share this image.");
        return;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <div className="flex space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleDownload(image.url, image.name)}
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleShare("facebook", image.url)}
                >
                  <FacebookIcon className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleShare("twitter", image.url)}
                >
                  <TwitterIcon className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleShare("instagram", image.url)}
                >
                  <InstagramIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;