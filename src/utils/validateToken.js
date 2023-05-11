export const isValid = () => {
  const expiryDate = JSON.parse(localStorage.getItem("expiryDate"));
  const currentTime = new Date().toISOString();
  if (expiryDate) {
    if (currentTime >= expiryDate) return false;
    return true;
  }
  return true;
};

export const reloadIfTokenIsNoLongerValid = () => {
  if (!isValid()) {
    alert("The session was ended! please login again!");
    localStorage.removeItem("userAuth");
    localStorage.removeItem("userCreds");
    localStorage.removeItem("expiryDate");
    location.reload();
  }
};

export const generateDateAfterSeconds = (seconds) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + seconds);
  const updatedDate = new Date(date);
  return updatedDate;
};
