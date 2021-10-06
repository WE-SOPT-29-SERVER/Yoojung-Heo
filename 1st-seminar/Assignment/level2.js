const teammates = {
    members: [
        {
        "이름": "이솔",
        "사는곳": "수원시",
        "나이": 24,
        "취미": "클래식음악감상"
        },
        {
        "이름": "최영재",
        "사는곳": "용인시",
        "나이": 21,
        "취미": "신문 읽으며 브런치 즐기기"
        },
        {
        "이름": "문규원",
        "사는곳": "성남시",
        "나이": 23,
        "취미": "독서와 함께하는 티타임"
        },
        {
        "이름": "허유정",
        "사는곳": "용인시",
        "나이": 23,
        "취미": "차 마시면서 서예하기"
        },
    ],
    //arr.forEach( element => console.log(element))
    printName: function() {
        this.members.forEach( member =>
            console.log(`이름: ${member.이름}`)
        );
    },
    printAddress: function() {
        this.members.forEach (member =>
            console.log(`${member.이름}이 사는 곳: ${member.사는곳}`)
        );
    },
    printAge: function() {
        this.members.forEach( member =>
            console.log(`${member.이름}의 나이: ${member.나이}`)    
        );
    },
    printHobby: function() {
        this.members.forEach( member =>
            console.log(`${member.이름}의 취미: ${member.취미}`)    
        );
    },
};

teammates.printName();
teammates.printAddress();
teammates.printAge();
teammates.printHobby();