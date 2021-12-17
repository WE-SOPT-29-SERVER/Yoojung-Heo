const members = require("./members");

/*
알고리즘 순서 
1. 멤버들을 OB와 YB로 분류하여 배열 생성
2. n개의 빈 배열(그룹)을 포함하는 배열 group 생성 
3. OB, YB 배열 셔플 - 피셔 예이츠 셔플
4. 그룹에 셔플된 OB 배열
5. OB가 배정된 그룹 셔플
6. 셔플된 OB 그룹에 YB 배열
7. 결과 출력
*/

// ob와 yb로 분류하기
const OBMembers = members.filter(o => o.group === "OB");
const YBMembers = members.filter(o => o.group === "YB");

// n개의 빈 배열을 포함하는 배열 group 만들기
const emptyGroup = [];
const mkGroup = n => {
    for (let i = 0; i < n; i ++) {
        emptyGroup[i] = []
    };
};
let groupNum = 5;
mkGroup(groupNum);

//모던 피셔-예이츠 셔플
const shuffle = arr => {
    const resultArr = [];
    while(arr.length) {
        const lastIdx = arr.length - 1;
        let roll = Math.floor(Math.random() * arr.length);
        let temp = arr[lastIdx];
        arr[lastIdx] = arr[roll];
        arr [roll] = temp;
        resultArr.push(arr.pop());
    }
    return resultArr;
};

// ob와 yb 모두 한번씩 섞기
const newOBMembers = shuffle(OBMembers);
const newYBMembers = shuffle(YBMembers);

while (newOBMembers.length) {
    for(i = 0; i < groupNum; i ++){
        emptyGroup[i].push(newOBMembers.pop())
        if(newOBMembers.length === 0) {
            break;
        };
    };
};
console.log(emptyGroup);

// ob멤버가 배정된 그룹 셔플하기
const assignedGroup = shuffle(emptyGroup);
console.log(assignedGroup);

// 셔플된 그룹에 yb멤버 배정하기
while(newYBMembers.length) {
    for(i = 0; i < groupNum; i ++) {
        assignedGroup[i].push(newYBMembers.pop())
        if(newYBMembers.length === 0) {
            break;
        };
    };
};

// 완성된 조 출력
console.log(assignedGroup);