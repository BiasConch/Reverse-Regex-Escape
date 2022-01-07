function regexreverse() {
  
var FILE = SpreadsheetApp.openById("1fui6cFL0ofewIIBmA0fPKkr2Kyy-LBYuTGN2VrM4VVU");
var CONTENT = FILE.getSheetByName("Sheet1");
var counter = 0;
let SpecialCharacters = ['.','^', '$', '*', '+', '-', '?', '(', ')', '[', ']', '{', '}', '|', '—', '/', '\\'];


  for(var total = 2; total < 500; total = total + 1){
    //checks to see how many lines need to be checked until a null cell is found
      if(IOCValue != ""){
        var IOCValue = CONTENT.getRange("b"+total).getValue();
        counter = counter+1;
      }
      else if(IOCValue == ""){
        total = 500;
      }
      
  }
    

  for(var row = 2; row < counter+1; row = row + 1){
      //iterates through each line that is populated with an IOC
      IOCValue = CONTENT.getRange("b"+row).getValue();
      const IOCValueString = IOCValue.toString();

    for(let Character = 0; Character < IOCValueString.length; Character++){ 
      //checks each letter to see if escape is needed

      for(let i =0; i < SpecialCharacters.length; i++){
        //counter so that the array of SpecialCharacters can be incremented 
          if(IOCValueString[Character] == "\\" && IOCValueString[Character+1] == SpecialCharacters[i]){
              //checks to see if a SpecialCharacters is after a '\'
            var IOCValueString2 = IOCValueString.replace(IOCValueString[Character],"");
            var total = CONTENT.getRange("b"+row).setValue(IOCValueString2);
          }
        }
    
      }
         
  }

}




