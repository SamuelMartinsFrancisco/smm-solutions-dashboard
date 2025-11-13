const checkListEquality = (first, second) => {
  debugger
  if (!Array.isArray(first) || !Array.isArray(second)) return false;
  debugger
  if (first.length !== second.length) return false;
  debugger
  for (let i = 0, len = first.length; i < len; i++) {
    if (second.some((item) => item !== first[i])) {
      debugger
      return false;
    }
  } 
  debugger
  return true;
}

export default checkListEquality;