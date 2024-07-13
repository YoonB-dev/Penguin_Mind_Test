const url = 'https://penguin-mind-test.netlify.app/'
function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '펭귄으로 보는 심리 테스트 결과';
    const shareDesc = infoList[resultAlt].name;
    const shareImg = url + 'img/pen' + parseInt(resultAlt)+1 + '.png';
    const shareURL = url + 'page/result_' + resultAlt + '.html';

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDesc,
        imageUrl: shareImg,
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
        },
        },
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
            },
        },
        ],
    });
}