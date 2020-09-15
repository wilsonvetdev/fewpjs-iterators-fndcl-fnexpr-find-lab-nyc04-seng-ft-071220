
function superbowlWin(records) {
  let result = records.find( function(record) {
    return record.result === "W"
  })

  if(!!result) 
    { return result.year }  
}

