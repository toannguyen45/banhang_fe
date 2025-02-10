import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";

interface FileInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
  maxImages?: number;
}

const FileInput: React.FC<FileInputProps> = ({
  value,
  onChange,
  disabled,
  maxImages = 10,
}) => {
  const [images, setImages] = useState<string[]>(value || []);

  useEffect(() => {
    setImages(value);
  }, [value]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    if (images.length + files.length > maxImages) {
      alert(`Bạn chỉ có thể tải lên tối đa ${maxImages} hình ảnh`);
      return;
    }

    const uploadedImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "banhang");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/durkhdouw/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      uploadedImages.push(data.secure_url);
    }

    const newImages = [...images, ...uploadedImages];
    setImages(newImages);
    onChange(newImages);
  };

  const handleRemove = async (url: string) => {
    const publicId = url.split("/").pop()?.split(".")[0];
    if (publicId) {
      try {
        const response = await fetch("/api/deleteImage", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ public_id: publicId }),
        });

        if (response.ok) {
          const newImages = images.filter((image) => image !== url);
          setImages(newImages);
          onChange(newImages);
        } else {
          console.error("Error deleting image");
        }
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleUpload}
        disabled={disabled || images.length >= maxImages}
      />
      <div className="my-4 flex items-center gap-4">
        {images.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => handleRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image
              src={url}
              alt="image"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileInput;
