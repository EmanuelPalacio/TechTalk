export default function userDataAdapter(user, name, phone) {
  return {
    fullname: name || user.displayName,
    email: user.email,
    token: user.accessToken,
    userId: user.uid,
    profileImage: user.photoUrl,
    emailVerified: user.emailVerified,
    phone,
  };
}
