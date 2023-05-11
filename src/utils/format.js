export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  let str = "";
  minutes ? (str += `${minutes} min`) : null;
  remainingSeconds ? (str += ` ${remainingSeconds} sec`) : null;
  return str;
};
