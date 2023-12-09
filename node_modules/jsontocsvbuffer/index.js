function handle(data, options) {
  const delimiter = options.delimiter || ",";
  let header = "";
  for (const key in data[0]) {
    let keys = key.split(".");
    header = header + keys[keys.length - 1] + delimiter;
  }
  header = header + "\n";
  data.forEach((curr) => {
    for (const key in curr) {
      const value = curr[key] && String(curr[key]).replace(delimiter, ";");
      header = header + (value ?? "NA") + delimiter;
    }
    header = header + "\n";
  });
  return header;
}
module.exports = handle;
