const natural = require("natural");

function processQuery(query) {
  query = query.toLowerCase();

  return {
    cheap: query.includes("sasta") || query.includes("cheap"),
    latest: query.includes("latest") || query.includes("new"),
    color: query.match(/red|blue|black|white/),
    storage: query.match(/128|256|512/),
    iphoneTypo: natural.JaroWinklerDistance(query, "iphone") > 0.8
  };
}

module.exports = processQuery;
