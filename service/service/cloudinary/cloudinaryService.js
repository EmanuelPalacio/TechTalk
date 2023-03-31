import { v2 as cloudinary } from 'cloudinary';

export const uploadCloudinaryService = async (tempPath, folder, nameImage) => {
  const res = await cloudinary.uploader.upload(tempPath, {
    public_id: nameImage,
    folder: folder,
  });

  return res;
};

export const deleteCloudinaryService = async (id) => {
  const res = await cloudinary.uploader.destroy(id);

  return res;
};
