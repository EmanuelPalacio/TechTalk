import { ref, set } from 'firebase/database';
import { realtimeDB } from '../firebase';

export default function addUser({
  fullname,
  email,
  userId,
  profileImage,
  emailVerified,
  phone,
}) {
  set(ref(realtimeDB, `users/${userId}`), {
    fullname,
    email,
    emailVerified,
    phone,
    profileImage:
      profileImage ||
      'https://firebasestorage.googleapis.com/v0/b/techtalk-b404c.appspot.com/o/default%2FimageProfileMenDefault.png?alt=media&token=f9289176-8629-40fd-8b8b-64c22cf187e7&_gl=1*96eyo1*_ga*MTc4MzcxOTM2OS4xNjg1NDk0MDQ3*_ga_CW55HF8NVT*MTY4NjUxNTAwOS4xOC4xLjE2ODY1MTc3OTUuMC4wLjA.',
    contacts: {},
    userId,
  });
}
