//promise 연습

//setTimeout(function(){}, timeout)
/*
promise는 resolve/reject 값을 담은 promise 자체를 리턴한다
resolve를 리턴할 때는 then을 통해서, reject를 리턴할 때는 catch를 통해서 반환값을 처리하면 된다
*/

const cook = (callback, timeout) => {
    setTimeout(callback, timeout);
}

const ramenRecipe = () => {
    return new Promise ((resolve, reject) => {
        cook(() => {
            console.log("[라면 진행상황]");
            resolve("[라면 만들기 시작]");
        }, 1000);
    });
};

const boilWater = (progress) => {
    return new Promise((resolve, reject) => {
        cook(() => {
            console.log("[라면] - 1. 물 끓이기 시작");
            resolve(`${progress} ---> [물 끓이기]`);
        }, 2000);
    });
};

const putTheRamenAndSoupPowder = (progress) => {
    return new Promise((resolve, reject) => {
        cook(() => {
            console.log("[라면] - 2. 라면과 스프 넣기 완료, 앞으로 3분간 끓이기 시작");
            resolve(`${progress} ---> [면과 스프 넣기 후 3분간 끓이기]`);
        }, 500);
    });
};

const delayThreeMinutes = (progress) => {
    return new Promise ((resolve, reject) => {
        cook(() => {
            console.log("[라면] - 3. 3분간 대기 시작");
             resolve(`${progress} ---> [라면 완성]`);
        }, 3000);
    });
};

ramenRecipe()
    .then(progress => boilWater(progress))
    .then(progress => putTheRamenAndSoupPowder(progress))
    .then(progress => delayThreeMinutes(progress))
    .then(progress => console.log(progress))

//promise 퀴즈 복습
/*
const members = require("./members");

const getOnline = members => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const onlineMembers = members.filter(m => m.location === "online");
            resolve(onlineMembers)
        }, 500);
    });
};

const getOffline = members => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const offlineMembers = members.filter(m => m.location === "offline");
            resolve(offlineMembers)
        }, 500);
    });
};

const getYB = members => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const ybMembers = members.filter(m => m.group === "YB");
            resolve(ybMembers);
        }, 500);
    });
};

const getOB = members => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const obMembers = members.filter (m => m.group === "OB");
            resolve(obMembers);
        }, 500);
    });
};

getOnline(members)
    .then(getOB)
    .then(console.log)

getOffline(members)
    .then(getYB)
    .then(console.log)
*/