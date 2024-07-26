import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingsPanel = ({ settings, onSettingsChange }) => {
  const handleChange = (key, value) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="color">Color</Label>
          <Input
            id="color"
            type="color"
            value={settings.color}
            onChange={(e) => handleChange("color", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pattern">Pattern</Label>
          <Select
            value={settings.pattern}
            onValueChange={(value) => handleChange("pattern", value)}
          >
            <SelectTrigger id="pattern">
              <SelectValue placeholder="Select a pattern" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stripes">Stripes</SelectItem>
              <SelectItem value="dots">Dots</SelectItem>
              <SelectItem value="floral">Floral</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="size">Size</Label>
          <Select
            value={settings.size}
            onValueChange={(value) => handleChange("size", value)}
          >
            <SelectTrigger id="size">
              <SelectValue placeholder="Select a size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;