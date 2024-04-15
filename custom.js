function passwordGenerate(length,includeLowerCase,includeUpperCase,includeNumber,includeSymbol){
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase=lowercase.toUpperCase();
    const number = "0123456789";
    const symbol="!@#$%^&*()_-+=";
    let allowedChar="";
    let password="";
    
    allowedChar+=includeLowerCase?lowercase:"";
    allowedChar+=includeUpperCase?uppercase:"";
    allowedChar+=includeNumber?number:"";
    allowedChar+=includeSymbol?symbol:"";

    if(length<=0){
        return `length of password should be atleast 1`;
    }
    if(allowedChar.length === 0){
        return `atleast one character should be selected`;
    }
    for(i=0;i<length;i++){
        let indexOFchar = Math.floor(Math.random()*allowedChar.length);
        password+=allowedChar.charAt(indexOFchar);
    }

    return password;
}

const passwordLength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumber=true;
const includeSymbol=true;

const generatedPassword = passwordGenerate(passwordLength,includeLowerCase,includeUpperCase,includeNumber,includeSymbol);
console.log(`Generated Password: ${generatedPassword}`);