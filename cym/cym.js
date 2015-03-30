exports.year_month = function(year, month) {

  if ( month > 12 ) {
    if ( month % 12 == 0 ) {
      year += (month - 12) / 12
      month = 12
    } else {
      year += Math.floor( month / 12 )
      month = month % 12
    }
  }

  return [year, month]
}

// var corrector = require("./cym.js")
// corrector.year_month(2011,14)