const crypto = require ("crypto");
const password = "qwerty";

const hex = crypto.createHash("sha512") //"sha512" 알고리즘으로 변환한 해시값 반환
                    .update(password) //password: 변환할 문자열
                    .digest("hex"); //hex: 인코딩 알고리즘

const base64 = crypto.createHash("sha512")
                    .update(password)
                    .digest("base64");

//console.log("hex:", hex);
//console.log("\n");
//console.log("base64:", base64);

const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const iterations = 100000; //iteration 반복수
const keylen = 64; //원하는 digest 길이
const digest = "sha512";
const callback = (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex"));
};
crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);