import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ImageUpload = ({ onImageUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    const newImages = selectedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    onImageUpload(newImages);
    setSelectedFiles([]);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Upload Images</h2>
      <div className="flex gap-2">
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="flex-grow"
        />
        <Button onClick={handleUpload} disabled={selectedFiles.length === 0}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;