export const capitalizeFirstLetter = (string) => {
  //negative values - '', null, undefined, 0, {}, []
  if (!string || typeof string !== `string`) {
    return "";
  }
  return string[0].toUpperCase() + string.slice(1);
};
