import {
  deleteCloudinaryService,
  uploadCloudinaryService,
} from '../../service/cloudinary/cloudinaryService.js';
import { updateUser } from '../../service/database/index.js';

const cloudinaryUserImage = async (req = request, res = response) => {
  const { userId } = req.params;
  const { path, originalname } = req.file;
  const { image } = req.user;
  try {
    const { url, public_id } = await uploadCloudinaryService(
      path,
      'User profile image',
      originalname,
    );

    const user = await updateUser(userId, {
      image: {
        url,
        id: public_id,
      },
    });

    image.id && deleteCloudinaryService(image.id);

    res.status(200).json({
      ok: true,
      msg: 'Successful file upload',
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
export default cloudinaryUserImage;
