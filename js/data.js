/*
'boxer',0
'throw',1
'shield',2
'knight',3
'bomb',4
'warrior',5
'sliding',6
'berserker',7
'fairy',8
'wizard',9
 */

const qnaList = [
    {
        q: '1. 펭귄이 화가 난듯, 당신에게 다가옵니다. 당신의 선택은??',
        a:[
            {answer: 'a. 왜 화가 났는지 물어본다.',type:[2,4,9]},
            {answer: 'b. 펭귄과 맞서 싸운다.',type:[0,3,5,7]},
            {answer: 'c. 무서워! 도망간다.',type:[1,6,8]},
        ]
    },
    {
        q: '2. 배가 고픈 당신 앞에 생선이 있다. 당신의 선택은?',
        a:[
            {answer: 'a. 누군가의 생선을 함부로 먹을 수는 없어! 주인을 찾아준다.',type:[8,9,2]},
            {answer: 'b. 일단 내가 먼저 살아야해! 생선을 먹어버린다.',type:[0,7,6]},
            {answer: 'c. 땅에 떨어진 음식은 함부로 먹지 말라했어! 생선을 먹지 않는다.',type:[1,4,3,5]},
        ] 
    },
    {
        q: '3. 당신은 땅을 매입했다. 다음중 어떤 건물을 짓고 싶은가?',
        a:[
            {answer: 'a. 다같이 생선을 먹을 수 있도록, 생선 창고를 만든다.',type:[2,6]},
            {answer: 'b. 펭귄 마을을 보호하기 위해 감시탑을 설치한다.',type:[4,5,9]},
            {answer: 'c. 훈련장을 지어서 펭귄들을 훈련시킨다.',type:[0,3,7]},
            {answer: 'd. 모두가 쉴 수 있는 이쁜 정원을 만든다.',type:[8,1]},
        ]
    },
    {
        q: '4. 무더운 여름철 당신이 휴가를 즐기는 방법은?',
        a:[
            {answer: 'a. 여름에는 계곡이지! 시원한 계곡에 놀러가 수박을 먹는다.',type:[1,9]},
            {answer: 'b. 난 수영이 좋아! 수영장에서 물놀이를 즐긴다.',type:[3,6]},
            {answer: 'c. 더운날 움직이는건 싫어! 집에서 편하게 있는다.',type:[2,4,5,8]},
            {answer: 'd. 여름에는 땀이 나야지! 운동을 한다.',type:[0,7]},
        ]
    },
]

const infoList = [
    {
        name:'복서 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'투척 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'방페 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'기사 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'폭탄 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'무사 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'슬라이딩 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'광전사 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'요정 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
    {
        name:'마법사 펭귄',
        sub:'',
        desc:'펭귄에 대한 설명이 여기에 들어갈 예정입니다. 이건 어쩌구 저건 어쩌구',
        place:'',
    },
]