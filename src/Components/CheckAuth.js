const CheckAuth = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  // const refreshToken = localStorage.getItem("refreshToken");
  if (!token) {
    return false;
  }

  // try {
  //   // { exp: 12903819203 }
  //   const { exp } = decode(token);

  //   if (exp < new Date().getTime() / 1000) {
  //     return false;
  //   }
  // } catch (e) {
  //   return false;
  // }

  return true;
};
export default CheckAuth;
