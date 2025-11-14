const checkListEquality = (first, second) => {
  if (!Array.isArray(first) || !Array.isArray(second)) return false;

  if (first.length !== second.length) return false;

  for (let i = 0, len = first.length; i < len; i++) {
    if (second.some((item) => item !== first[i])) {
      return false;
    }
  } 

  return true;
}

export default checkListEquality;