function solution(id_pw, db) {
    let login = db.filter(([id,pw])=> id === id_pw[0]);
    if(login.length === 0){
        return "fail";
    }else{
        return login[0][1] == id_pw[1] ? "login" : "wrong pw";
    }
}