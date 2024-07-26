import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageUpload from "./ImageUpload";
import ImageGallery from "./ImageGallery";
import SettingsPanel from "./SettingsPanel";

const Index = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [settings, setSettings] = useState({
    color: "",
    pattern: "",
    size: "",
  });

  const handleImageUpload = (newImages) => {
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const handleGenerateImages = () => {
    // This is a placeholder. In a real application, you would call an API to generate images.
    const newGeneratedImages = uploadedImages.map((img) => ({
      ...img,
      id: Math.random().toString(36).substr(2, 9),
    }));
    setGeneratedImages([...generatedImages, ...newGeneratedImages]);
  };

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Crochet Image Generator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ImageUpload onImageUpload={handleImageUpload} />
          <ImageGallery images={uploadedImages} title="Uploaded Images" />
          
          <Button 
            onClick={handleGenerateImages} 
            className="mt-4 w-full"
            disabled={uploadedImages.length === 0}
          >
            Generate Images
          </Button>
          
          <ImageGallery images={generatedImages} title="Generated Images" />
        </div>
        
        <div className="md:col-span-1">
          <SettingsPanel settings={settings} onSettingsChange={handleSettingsChange} />
        </div>
      </div>
    </div>
  );
};

export default Index;