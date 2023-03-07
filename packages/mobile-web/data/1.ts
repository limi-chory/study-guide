import { AnswerType, TFtype } from "../components/Answer/types";
import { ProblemType, QuoteType } from "../components/Question/type";

interface Problem {
  problemType: ProblemType;
  problemText: string;
  answerType: AnswerType;
  options?: string[];
  descriptionTrue?: string;
  descriptionFalse?: string;
  answer: TFtype | number | number[] | string;
  quote?: QuoteType;
}

interface PostDataType {
  problemNumber: number;
  problems: Problem[];
}

export const data1: PostDataType = {
  problemNumber: 10,
  problems: [
    {
      problemType: ProblemType.SENTENCE,
      problemText: "역설적 표현을 포함하고 있다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다",
      descriptionFalse: "아니다",
      answer: TFtype.FALSE,
      quote: {
        text: "아침에서 밤이 되고, 밤에서 아침이 된다.",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "작품에서 화자가 표면에 나타난다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다",
      descriptionFalse: "아니다",
      answer: TFtype.TRUE,
      quote: {
        text: "여승(女僧)은 합장(合掌)하고 절을 했다\n가지취의 내음새가 났다\n쓸쓸한 낯이 녯날같이 늙었다\n나는 불경(佛經)처럼 서러워졌다",
        from: "백석, 「여승」",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "작품에서 ‘말을 건네는 어투’가 나타난다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다",
      descriptionFalse: "아니다",
      answer: TFtype.FALSE,
      quote: {
        text: "차단한 등불이 하나 빈 하늘에 걸려 있다\n내 홀로 어딜 가라는 슬픈 신호냐",
        from: "김광균, 「와사등」",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "감정이 이입된 표현이다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다",
      descriptionFalse: "아니다",
      answer: TFtype.TRUE,
      quote: {
        text: "산이 나를 보고 웃는다.",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "다음 작품에서 ‘반성적 태도’가 드러난다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다",
      descriptionFalse: "아니다",
      answer: TFtype.TRUE,
      quote: {
        text: "바람이 어디로부터 불어와\n어디로 불려 가는 것일까,\n\n바람이 부는데\n내 괴로움에는 이유가 없다.\n\n내 괴로움에는 이유가 없을까,\n\n단 한 여자를 사랑한 일도 없다.\n시대를 슬퍼한 일도 없다.",
        from: "윤동주, 「바람이 불어」",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "작품에서 드러나는 태도는?",
      answerType: AnswerType.SELECT,
      options: ["애상적 태도", "관조적 태도"],
      answer: 2,
      quote: {
        text: "산에는 꽃 피네\n꽃이 피네\n갈 봄 여름 없이\n꽃이 피네\n\n산에\n산에\n피는 꽃은\n저만치 혼자서 피어 있네",
        from: "김소월, 「산유화」",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "화자가 밑줄 친 대상에게 느끼는 감정은?",
      answerType: AnswerType.TF,
      descriptionTrue: "긍정적",
      descriptionFalse: "부정적",
      answer: TFtype.TRUE,
      quote: {
        text: "저 청청한 하늘\n저 흰 구름 저 눈부신 산맥\n왜 날 울리나\n날으는 <ul>새<ul>여\n묶인 이 가슴\n\n밤새워 물어뜯어도\n닿지 않는 밑바닥 마지막 살의 그리움이여\n피만이 흐르네\n더운 여름날의 썩은 피",
        from: "김수영, 「사령」",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "화자가 밑줄 친 대상에게 느끼는 감정은?",
      answerType: AnswerType.TF,
      descriptionTrue: "긍정적",
      descriptionFalse: "부정적",
      answer: TFtype.FALSE,
      quote: {
        text: "처마 끝에 서린 연기 따라\n포도순이 기어 나가는 밤, 소리 없이,\n가믈음 땅에 시며든 더운 김이\n등에 서리나니, 훈훈히\n아아, 이 애 몸이 또 <ul>달아 오르노나<ul>.\n가쁜 숨결을 드내쉬노니, 박나비처럼",
        from: "정지용, 「발열(發熱)」",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "나비는 바닷물에 젖어 고생한다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다.",
      descriptionFalse: "아니다.",
      answer: TFtype.TRUE,
      quote: {
        text: "청(靑)무우밭인가 해서 내려갔다가는\n어린 날개가 물결에 절어서\n공주(公主)처럼 지쳐서 돌아온다.",
        from: "김기림, 「바다와 나비」",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "3인칭 전지적 작가 시점이다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다.",
      descriptionFalse: "아니다.",
      answer: TFtype.FALSE,
      quote: {
        text: " 여인은 그의 얼굴이 재밌기라도 한 듯, 그를 보며 웃음을 지어 보였다.",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "시간의 흐름이 느리다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다.",
      descriptionFalse: "아니다.",
      answer: TFtype.TRUE,
      quote: {
        text: "어의 다녀와 아뢰기를,\n“평국의 병세는 위중하지 아니하옵기로 약을 가르쳐 쓰라 하옵고 왔사오나 또한 괴이한 일이 있어 수상하여이다.”\n하더라. 천자 놀라 묻기를,\n“무슨 연고가 있더냐.”\n어의 땅에 엎드려 아뢰기를,\n“평국의 맥을 보오니 남자의 맥이 아니오매 이상하여이다.”\n천자 그 말을 들으시고 이르기를,\n“평국이 여자면 어찌 적진에 나가 적진 십만 대병을 소멸하고 왔으리오. 평국의 얼굴이 도화색(桃花色)이요, 체격이 작고 약하여 혹 미심하거니와 아직은 누설하지 말라.”",
        from: "작자 미상, ｢홍계월전｣",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "인물의 성격을 짐작할 수 있다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다.",
      descriptionFalse: "아니다.",
      answer: TFtype.TRUE,
      quote: {
        text: "농삿집치고는 유난히도 말끔한 마루청, 먼지를 뒤집어쓰고 있지 않은 장독대, 울타리 너머로 보이는 길찬 장다리꽃들…… 그 어느 것 하나에도 그녀의 손이 안 간 곳이 없으리라 싶었다.",
        from: "김정한, ｢모래톱 이야기｣",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "사람들은 최씨에 대한 이생의 마음을 높이 평가했다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다.",
      descriptionFalse: "아니다.",
      answer: TFtype.TRUE,
      quote: {
        text: "두 사람은 서로 바라보며 하염없이 눈물을 흘렸다.\n“낭군님, 부디 안녕히 계십시오.”\n최씨는 말을 마치자 점점 사라지더니 마침내 종적을 감추었다.\n이생은 그녀의 유골을 거두어 부모의 무덤 곁에 장사 지내 주었다. 장례를 마치고 나서 이생도 최씨를 지극히 생각한 나머지 병을 얻어 서너 달 만에 세상을 떠났다.\n이 이야기를 들은 사람들은 슬퍼하고 탄식하면서 그 절의(節義)를 사모하지 않는 이가 없었다.",
        from: "김시습, ｢이생규장전｣",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "철수는 남자다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다.",
      descriptionFalse: "아니다.",
      answer: TFtype.FALSE,
      quote: {
        text: "철수는 군대를 가지 않는다.",
      },
    },
    {
      problemType: ProblemType.SENTENCE,
      problemText: "9세기에는 가사에 맞는 상대적인 음길이를 표시했다.",
      answerType: AnswerType.TF,
      descriptionTrue: "그렇다.",
      descriptionFalse: "아니다.",
      answer: TFtype.FALSE,
      quote: {
        text: "선은 음높이를 표시하는 실용적인 기호이다. 그런데 9세기경 에는 선을 사용하지 않고 가사 위에 간단한 기호로 음들 간의 상대적인 높낮이를 표시했기 때문에 정확한 높낮이는 재현할 수 없었다. 이후 11세기경부터 2선이나 4선 위에 음을 기록했고, 현재 사용하는 5선 악보는 14세기 무렵에 완성되었다.",
      },
    },
  ],
};
