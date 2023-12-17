function output() {
  var type = document.getElementById("numberSystem").value;
  var number = document.getElementById("number").value;
  var Binary = document.getElementById("showBinary");
  var Decimal = document.getElementById("showDecimal");
  var Octal = document.getElementById("showOctal");
  var HexaDecimal = document.getElementById("showHexaDecimal");
  

  if (number) {
    
    console.log(number);

    if (type === "Decimal") {

        Decimal.innerHTML =  number;
        Binary.innerHTML = decToBin(number);
        HexaDecimal.innerHTML = decToHex(number)
        Octal.innerHTML = decToOct(number);
    

    }else if(type === "Binary")
    {
        Binary.innerHTML = number;
        let result = binToDec(number);
        Decimal.innerHTML = result;
        HexaDecimal.innerHTML = decToHex(result);
        Octal.innerHTML = decToOct(result);

    }else if(type === "HexaDecimal")
    {
        HexaDecimal.innerHTML = number;
        result = hexToDec(number);
        Decimal.innerHTML = result;
        Binary.innerHTML = decToBin(result);
        Octal.innerHTML = decToOct(result);
        
    }else if(type === "Octal")
    {
         result = octToDec(number);
         Decimal.innerHTML = result;
         HexaDecimal.innerHTML = decToHex(result);
         Binary.innerHTML = decToBin(result);
         Octal.innerHTML = number;

    }


  }else{
    alert("Enter Number!");
  }
}

//Decimal functions

function decToBin(number) {
    let bin= "";
    while(parseInt(number) > 0){
        let remainder = parseInt(number)%parseInt(2);
        bin = remainder + bin;
        number = parseInt(number)/parseInt(2);

    }
 
    return bin;

}

function decToOct(number) {
    let oct = "";

    while(parseInt(number) > 0)
    {
        let remainder = parseInt(number)%parseInt(8);
        oct = remainder + oct;
        number = parseInt(number)/parseInt(8);
    }
  
  return oct;
}

function decToHex(number) {
    let hex = "";

    while(parseInt(number) > 0)
    {
        let remainder = parseInt(number)%parseInt(16);
        if(remainder === 10){ hex = "A" + hex; }
        else if(remainder === 11){ hex = "B" + hex; }
        else if(remainder === 12){ hex = "C" + hex; }
        else if(remainder === 13){ hex = "D" + hex; }
        else if(remainder === 14){ hex = "E" + hex; }
        else if(remainder === 15){ hex = "F" + hex; }
        else{ hex = remainder + hex; }

        number = parseInt(number)/parseInt(16);

    }
  
  return hex;

}

//Binary to Decimal

function binToDec(number){

    let dec = 0;
    let length = number.length -1;
    for(var i=length; i>=0; i--)
    {
        if(number[i] == 1)
        {
            dec = dec + Math.pow(2,parseInt(length - i));
        }
    }


    return dec;

}

//HexaDecimal to Decimal convert

function hexToDec(number){

    let dec = 0;
    length = number.length-1;

    for(var i=length; i>=0; i--)
    {
        if(number[i] == "A"){ dec = dec + ( 10 * Math.pow(16,length-i));}
        else if(number[i] == "B") { dec = dec + ( 11 * Math.pow(16,length-i)); } 
        else if(number[i] == "C") { dec = dec + ( 12 * Math.pow(16,length-i)); } 
        else if(number[i] == "D") { dec = dec + ( 13 * Math.pow(16,length-i)); } 
        else if(number[i] == "E") { dec = dec + ( 14 * Math.pow(16,length-i)); } 
        else if(number[i] == "F") { dec = dec + ( 15 * Math.pow(16,length-i)); } 
        else{ dec = dec + ( number[i] * Math.pow(16,parseInt(length-i))); } 
    }

    return dec;
}

//Octal to Decimal

function octToDec(number){

    let dec = 0;
    let length = number.length-1;

    for(i=length; i>=0; i--)
    {
        dec = dec + (number[i] * Math.pow(8, parseInt(length-i)));
    }

    return dec;

}


function nullInput(){
  document.getElementById("number").value = "";
  
  document.getElementById("showBinary").innerHTML = "Binary";
  document.getElementById("showDecimal").innerHTML = "Decimal";
  document.getElementById("showOctal").innerHTML = "Octal";
  document.getElementById("showHexaDecimal").innerHTML = "HexaDecimal";

}