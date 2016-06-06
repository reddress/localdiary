function epochToYMD(timestamp) {
  var d = new Date(timestamp);
  return d.getFullYear().toString() + "/" +
    pad((d.getMonth() + 1).toString()) + "/" + 
    pad(d.getDate().toString()) + " " +
    pad(d.getHours().toString()) + ":" +
    pad(d.getMinutes().toString()) + ":" + 
    pad(d.getSeconds().toString());
}

function YMDToEpoch(y, m, d, hh, mm, ss, ms) {
  return new Date(y, m-1, d, hh, mm, ss, ms).getTime();
}
