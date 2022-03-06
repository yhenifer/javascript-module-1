function userCheker (userName, userType){
    const frisLetter = userName.charAt(0);
    const userLength = userName.length;
    const isValidLength = userLength >= 5 && userLength <= 10;
    const isSuperuser = userType === "admin" || userType === "manager"
    
    if (isSuperuser || (frisLetter === userName.charAt(0).toUpperCase() && isValidLength)){
        return "username Valid" ;
    }
    else {
        return "Username invalid"
    }
    }

console.log (userCheker("yhenifer","manager"));