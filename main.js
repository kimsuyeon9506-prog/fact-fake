document.addEventListener('DOMContentLoaded', () => {
    const factCheckBtn = document.getElementById('fact-check-btn');
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const categoryList = document.getElementById('category-list');
    const qaContainer = document.getElementById('qa-container');
    const articleBody = document.getElementById('article-body');
    const currentCategoryTitle = document.getElementById('current-category-title');
    const siteHeader = document.getElementById('site-header');
    const criticalThinkingSection = document.getElementById('critical-thinking-section');
    const themeSwitch = document.getElementById('checkbox');
    const quoteText = document.querySelector('.quote');
    const quoteAuthor = document.querySelector('.author');
    const searchInput = document.getElementById('search-input');

    const quotes = [
        { text: "정치적으로, 진실은 자신이 좋아하지 않는다고 해서 사실적 진실을 다른 의견으로 취급하는 사람들에 의해 무력화됩니다.", author: "- 한나 아렌트" },
        { text: "악은 사유의 부재에서 온다. 스스로 생각하기를 포기할 때, 인간은 누구나 평범한 악이 될 수 있다.", author: "- 한나 아렌트" },
        { text: "선동은 논리적 사고가 멈춘 곳에서 시작된다. 비판적 거리를 두지 못하는 대중은 언제나 권력의 먹잇감이 된다.", author: "- 한나 아렌트" },
        { text: "사실에 대한 진실이 사라진 곳에는 허구와 기만이 그 자리를 차지하며, 이는 자유를 파괴하는 첫걸음이다.", author: "- 한나 아렌트" },
        { text: "비판적 사고가 없는 복종은 도덕적 책임감을 마비시킨다.", author: "- 한나 아렌트" },
        { text: "생각하지 않는 것이야말로 인간이 저지를 수 있는 가장 큰 죄악 중 하나이다.", author: "- 한나 아렌트" }
    ];

    function displayRandomQuote() {
        if (quoteText && quoteAuthor) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            quoteText.textContent = `"${randomQuote.text}"`;
            quoteAuthor.textContent = randomQuote.author;
        }
    }

    displayRandomQuote();

    const factCheckData = {
        '선거 및 민주주의': [
            {
                title: '4.15/4.10 총선 부정선거 의혹 및 2024 계엄령 사건',
                infobox: {
                    '발생 시기': '2020년 ~ 2024년',
                    '주요 키워드': '전자개표기 해킹, 사전투표 조작, QR코드',
                    '최종 판결': '대법원 기각 (증거 없음)',
                    '관련 법안': '공직선거법'
                },
                content: `
                    <h3>개요</h3>
                    <p>2020년 제21대 총선 이후 일부 극우 유튜버들과 정치권 일각에서 제기된 '부정선거 음모론'은 대한민국 민주주의의 근간인 선거 시스템에 대한 불신을 조장해 왔습니다. 특히 2024년 12월 3일, 윤석열 당시 대통령의 비상계엄 선포 과정에서 '선거 시스템 해킹'이 주요 명분으로 사용되면서 사회적 파장이 극에 달했습니다.</p>
                    
                    <h3>주요 선동 논리와 팩트체크</h3>
                    <h4>1. 사전투표와 본투표의 통계적 괴리?</h4>
                    <p><strong>반박:</strong> 음모론자들은 사전투표와 본투표의 정당별 득표율 차이가 통계적으로 불가능하다고 주장합니다. 그러나 이는 '세대별 투표 성향'과 '진영별 전략적 투표'의 결과입니다. 민주당 지지층은 사전투표에, 보수 지지층은 당일 투표에 집중하는 경향이 뚜렷하며, 이는 전 세계적으로 관찰되는 현상입니다. 대법원 재검표 결과, 수작업 검증 수치와 전자개표기 수치가 일치함이 확인되었습니다.</p>
                    
                    <h4>2. 2024년 계엄령과 '중국발 선관위 해킹설'</h4>
                    <p><strong>반박:</strong> 계엄 선포 직후 국방부와 일부 유튜버들은 "중국 해커가 선관위 서버를 장악하여 투표를 조작하고 있다"는 첩보를 근거로 내세웠습니다. 그러나 계엄군이 선관위에 진입하여 조사한 결과, 어떠한 외부 침입 흔적이나 조작 징후도 발견되지 않았습니다. 이는 헌법 파괴적 행위를 정당화하기 위한 전형적인 가짜뉴스였음이 드러났습니다.</p>
                    
                    <h3>정치적 칼럼: 선동이 파괴하는 신뢰</h3>
                    <p>선거 결과에 불복하는 행위는 민주주의의 기본 규칙을 무너뜨리는 가장 위험한 행동입니다. 검증되지 않은 의혹을 확산시켜 국민을 분열시키는 세력은 결과적으로 국가 시스템 자체를 마비시킵니다. 2026년 현재, 대한민국 사법부와 국제 선거 참관 기구들은 한국의 선거 시스템이 세계 최고 수준의 투명성을 유지하고 있음을 재차 확인했습니다.</p>
                `,
                references: [
                    { text: '대법원 2022. 7. 28. 선고 2020수30 판결문', url: '#' },
                    { text: '국회 계엄사령부 진상규명 보고서 (2025)', url: '#' }
                ]
            }
        ],
        '이재명 대통령 및 정부': [
            {
                title: '160조 비자금설 및 중국 도피 음모론',
                infobox: {
                    '유포 채널': '극우 유튜브 채널 J사 등',
                    '주요 주장': '해외 계좌 160조 은닉',
                    '조사 결과': '완전 허위 (근거 없음)',
                    '피해 규모': '사회적 혼란 및 명예훼손'
                },
                content: `
                    <h3>개요</h3>
                    <p>2025년 하반기부터 2026년 초까지 극우 유튜브 생태계를 휩쓴 가장 자극적인 가짜뉴스는 "이재명 대통령이 160조 원의 비자금을 중국과 싱가포르 계좌에 은닉했으며, 탄핵 직전 중국으로 탈출할 계획을 세우고 있다"는 내용입니다.</p>
                    
                    <h3>심층 분석 및 반박</h3>
                    <h4>1. 160조 원이라는 숫자의 비현실성</h4>
                    <p><strong>반박:</strong> 160조 원은 대한민국 한 해 예산의 약 1/4에 해당하는 천문학적인 금액입니다. 삼성전자와 같은 글로벌 기업의 시가총액과 비교해도 엄청난 이 자금을 개인 계좌에 은닉한다는 것은 국제 금융망의 감시 체계(FATF 등) 하에서 사실상 불가능합니다. 관련 증거로 제시된 '금융거래 내역서'는 폰트와 로고가 조작된 조잡한 위조품으로 판명되었습니다.</p>
                    
                    <h4>2. 중국 밀항 및 망명설</h4>
                    <p><strong>반박:</strong> "전용기를 타고 중국으로 도주할 준비를 마쳤다"는 주장은 지지층의 공포심을 극대화하기 위한 전형적인 공작적 선동입니다. 국가 원수의 동선은 경호처와 국방부에 의해 24시간 관리되며, 이러한 시나리오는 현대 국가 시스템상 실현 불가능합니다.</p>
                    
                    <h3>사회적 파장</h3>
                    <p>이러한 가짜뉴스는 단순한 루머를 넘어 국정에 대한 극도의 불신을 야기합니다. 전문가들은 이를 '상업적 목적의 증오 비즈니스'로 규정하며, 조회수를 위해 국가의 안정성을 제물로 삼는 유튜버들의 행태를 강력히 비판하고 있습니다.</p>
                `,
                references: [
                    { text: '국제금융감독기구(FATF) 자금세탁방지 보고서', url: '#' },
                    { text: '검찰청 사이버수사대 가짜뉴스 유포자 기소 내역', url: '#' }
                ]
            }
        ],
        '역사 왜곡 및 프레임': [
            {
                title: '5.18 민주화운동 북한군 개입설 (광수 음모론)의 종말',
                infobox: {
                    '주동자': '지만원 (수감 중)',
                    '핵심 주장': '북한군 600명 침투',
                    '법적 결과': '징역 2년 확정',
                    '역사적 정의': '국가 공식 인정 민주화운동'
                },
                content: `
                    <h3>개요</h3>
                    <p>5.18 민주화운동 당시 북한군 특수부대가 광주에 침투하여 폭동을 주도했다는 주장은 수십 년간 대한민국 현대사를 오염시켜 온 악질적인 역사 왜곡입니다. 2026년 현재, 이 주장은 사법적, 학술적, 사회적으로 완전히 매장되었습니다.</p>
                    
                    <h3>왜곡의 구조와 진실</h3>
                    <h4>1. '광수'라고 지목된 인물들의 정체</h4>
                    <p><strong>반박:</strong> 왜곡론자들은 당시 사진 속 시민들을 북한군 장성들과 대조하며 '광수'라는 번호를 매겼습니다. 하지만 조사 결과, 사진 속 인물들은 버스 운전사, 평범한 주부, 학생 등 광주 시민들임이 본인들의 증언과 가족들의 확인을 통해 100% 입증되었습니다. 지만원은 이에 대한 명예훼손 혐의로 실형을 선고받았습니다.</p>
                    
                    <h4>2. 당시 미군 및 계엄군 기록</h4>
                    <p><strong>반박:</strong> 1980년 당시 한미연합사 및 미국 정보기관은 북한의 움직임을 철저히 감시하고 있었으며, 대규모 북한군 이동 징후는 전혀 없었다고 공식 기록하고 있습니다. 전두환 신군부조차 당시 조사에서 북한군 개입은 없었다고 결론 내린 바 있습니다.</p>
                    
                    <h3>역사적 교훈</h3>
                    <p>역사를 왜곡하여 민주주의의 가치를 훼손하는 행위는 헌법 정신에 위배됩니다. 가짜뉴스가 역사라는 성역을 침범할 때 사회는 방향을 잃게 됩니다. 우리는 '5.18 왜곡 처벌법'을 통해 역사의 진실을 수호하고 있습니다.</p>
                `,
                references: [
                    { text: '5.18 민주화운동 진상규명조사위원회 최종 보고서', url: '#' }
                ]
            }
        ],
        '외교 및 국가 안보': [
            {
                title: '한중 관계와 "종중(從中)" 프레임의 허구',
                content: `
                    <h3>개요</h3>
                    <p>정부의 실용적 외교 정책을 '중국에 나라를 갖다 바치는 사대주의'로 몰아세우는 선동입니다. 이는 복잡한 국제 정세를 흑백논리로 단순화하여 유권자의 반중 정서를 자극하려는 의도를 담고 있습니다.</p>
                    
                    <h3>심층 분석</h3>
                    <p>대한민국의 외교는 한미동맹을 축으로 하면서도 최대 무역국인 중국과의 경제적 협력을 포기할 수 없는 구조입니다. 이를 '친중'으로 낙인찍는 것은 국가 이익을 고려하지 않은 정파적 공격입니다. 특히 2026년 현재 강화된 반도체 공급망 협력은 미중 사이에서의 정교한 균형 외교의 결과이지, 결코 굴종 외교가 아닙니다.</p>
                `,
                references: [
                    { text: '외교부 2026 외교 백서', url: '#' }
                ]
            }
        ],
        '경제 및 민생 가짜뉴스': [
            {
                title: '국가 부채 1000조 돌파와 국가 파산설',
                content: `
                    <h3>내용</h3>
                    <p>국가 부채가 1000조 원을 넘어 나라가 곧 망할 것처럼 공포를 조성하는 선동입니다. 하지만 국가 부채는 '자산'과 'GDP 규모'를 함께 고려해야 합니다. 한국의 GDP 대비 부채 비율은 여전히 OECD 평균보다 낮으며, 안정적으로 관리되고 있습니다. 공포 마케팅은 소비 심리를 위축시키고 경제 활력을 저해하는 자해적 선동입니다.</p>
                `,
                references: [
                    { text: '기획재정부 국가 채무 관리 지침', url: '#' }
                ]
            }
        ],
        'AI 및 딥페이크 선동': [
            {
                title: 'AI로 조작된 정치인 발언 영상의 실체',
                content: `
                    <h3>개요</h3>
                    <p>2026년 대통령 선거와 지방선거 과정에서 AI 딥페이크를 이용한 가짜 발언 영상이 대량 유포되었습니다. 정치인이 하지도 않은 말을 하는 것처럼 꾸며 지지층의 이탈을 노리는 수법입니다.</p>
                    
                    <h3>대응 방안</h3>
                    <p>기술적으로 생성된 영상은 미세한 입 모양의 불일치나 배경 왜곡이 존재합니다. 무엇보다 공식 채널이 아닌 출처 불명의 SNS 영상은 일단 의심해야 합니다. 정부는 AI 생성물에 워터마크 표시를 의무화하는 법안을 시행 중입니다.</p>
                `,
                references: [
                    { text: '과학기술정보통신부 AI 윤리 가이드라인', url: '#' }
                ]
            }
        ],
        '보건 및 공공 정책': [
            {
                title: '2025 의료 개혁과 "의료 붕괴" 선동',
                content: `
                    <h3>진실</h3>
                    <p>지역 필수의료 강화를 위한 의대 정원 확대 정책을 '한국 의료의 종말'로 묘사하는 주장이 있으나, 이는 기득권 보호를 위한 과장된 공포입니다. 정부는 점진적 인력 확충과 수가 체계 개편을 통해 의료 서비스의 질을 높이려는 계획을 추진 중이며, 응급실 뺑뺑이 등 고질적 문제를 해결하려는 의지를 보이고 있습니다.</p>
                `,
                references: [
                    { text: '보건복지부 필수의료 정책 패키지', url: '#' }
                ]
            }
        ],
        '사회 갈등과 젠더': [
            {
                title: '페미니즘과 "남성 역차별" 기획 선동',
                content: `
                    <h3>분석</h3>
                    <p>일부 온라인 커뮤니티를 중심으로 성평등 정책을 남성 탄압으로 규정하는 적대적 프레임이 유행하고 있습니다. 이는 2030 세대의 성별 갈등을 정치적으로 이용하려는 의도가 강하며, 실제 정책 데이터를 보면 한부모 가족 지원 등 대다수 정책이 성별과 관계없이 취약 계층을 향하고 있음을 알 수 있습니다.</p>
                `,
                references: [
                    { text: '여성가족부 성인지 예산 보고서', url: '#' }
                ]
            }
        ],
        '노동 및 시민사회': [
            {
                title: '노조 활동의 "간첩단" 연루설 프레임',
                content: `
                    <h3>반박</h3>
                    <p>정당한 노동권 행사를 '북한의 지령을 받은 파괴 활동'으로 몰아가는 구시대적 색깔론입니다. 법원에서 일부 개인의 일탈은 처벌받을 수 있으나, 노동계 전체를 간첩 집단으로 매도하는 것은 헌법이 보장한 노동 3권을 무력화하려는 시도입니다.</p>
                `,
                references: [
                    { text: '고용노동부 노사 관계 통계', url: '#' }
                ]
            }
        ],
        '종교 및 사이비': [
            {
                title: '정치권과 사이비 종교 유착 음모론',
                content: `
                    <h3>진실</h3>
                    <p>특정 정치인이 사이비 교주와 은밀한 관계라는 주장은 선거철마다 반복되는 단골 메뉴입니다. 구체적인 증거 없이 '영적 교감' 운운하는 주장은 무속 신앙에 대한 혐오를 정치적 공격 수단으로 삼는 것에 불과합니다.</p>
                `,
                references: [
                    { text: '대선 후보 검증 보도 모음', url: '#' }
                ]
            }
        ],
        '교육 및 교과서': [
            {
                title: '역사 교과서의 "좌편향" 세뇌 주장의 허구',
                content: `
                    <h3>내용</h3>
                    <p>검인정 교과서들이 아이들을 공산주의자로 만든다는 주장은 교육 현장을 정치화하려는 시도입니다. 교과서 집필은 수십 명의 역사학자들의 교차 검토를 거치며, 국가 교육과정 가이드라인을 엄격히 준수합니다.</p>
                `,
                references: [
                    { text: '교육부 교육과정 평가 보고서', url: '#' }
                ]
            }
        ],
        '재난 및 안전': [
            {
                title: '이태원 참사 기획설 및 배후 음모론',
                content: `
                    <h3>비판</h3>
                    <p>비극적인 참사조차 정치적 공작으로 해석하는 음모론은 유가족들에게 씻을 수 없는 상처를 줍니다. 참사의 원인은 부실한 안전 관리와 행정적 무능에 있지, 결코 '마약 수사 방해'나 '고의적 유도'가 아님이 수사 결과를 통해 밝혀졌습니다.</p>
                `,
                references: [
                    { text: '이태원 참사 특별조사위원회 보고서', url: '#' }
                ]
            }
        ],
        '기후 및 에너지': [
            {
                title: '탈원전 정책으로 인한 "전기료 폭탄" 선동',
                content: `
                    <h3>반박</h3>
                    <p>전기료 상승은 국제 천연가스 및 석탄 가격의 급등 때문이지, 원전 비율의 소폭 조정 때문이 아닙니다. 재생 에너지로의 전환은 글로벌 RE100 추세에 따른 생존 전략이며, 원전을 '유일한 구원'으로 묘사하는 것은 에너지 안보를 왜곡하는 것입니다.</p>
                `,
                references: [
                    { text: '산업통상자원부 에너지 수급 계획', url: '#' }
                ]
            }
        ],
        '사법 및 검찰': [
            {
                title: '사법부의 "좌경화" 및 판사 공격 프레임',
                content: `
                    <h3>비판</h3>
                    <p>자신들에게 불리한 판결이 나오면 해당 판사의 출신 학교나 연구모임을 거론하며 '좌빨 판사'라고 공격하는 행태는 법치주의를 파괴하는 심각한 도전입니다. 판결은 법리와 증거에 따를 뿐입니다.</p>
                `,
                references: [
                    { text: '법원행정처 사법 독립 수호 성명', url: '#' }
                ]
            }
        ],
        '언론 및 미디어': [
            {
                title: '"기레기" 프레임과 언론 자유 위축',
                content: `
                    <h3>분석</h3>
                    <p>모든 주류 언론을 '거짓말쟁이'로 몰아넣고 유튜브만 믿으라는 주장은 전형적인 고립주의 선동입니다. 언론의 비판적 기능을 마비시키면 권력 감시는 불가능해집니다.</p>
                `,
                references: [
                    { text: '기자협회 언론 자유 수호 보고서', url: '#' }
                ]
            }
        ],
        '유튜브 생태계': [
            {
                title: '증오를 파는 비즈니스: 슈퍼챗의 함정',
                content: `
                    <h3>내용</h3>
                    <p>극우 유튜버들이 더 자극적인 정보를 내뱉을수록 더 많은 후원금이 쏟아지는 구조는 '가짜뉴스 공장'을 유지하는 동력입니다. 이들에게 진실은 돈보다 중요하지 않습니다.</p>
                `,
                references: [
                    { text: '미디어오늘 유튜버 수익 구조 취재', url: '#' }
                ]
            }
        ],
        '부동산 및 자산': [
            {
                title: '2026 부동산 대폭락 시나리오의 허구',
                content: `
                    <h3>내용</h3>
                    <p>내 집 마련을 꿈꾸는 서민들에게 "곧 집값이 1/10 토막 난다"며 공포를 심어주는 선동입니다. 시장 변동성은 존재하나, 체계적인 대출 규제와 공급 정책 하에서 파멸적 폭락 가능성은 매우 낮습니다.</p>
                `,
                references: [
                    { text: '국토교통부 주택 시장 동향 보고서', url: '#' }
                ]
            }
        ],
        '인구 및 소멸': [
            {
                title: '"대한민국 멸망" 인구 절벽 공포 마케팅',
                content: `
                    <h3>비판</h3>
                    <p>저출산 문제는 심각하나, 이를 '국가 소멸'이라는 확정적 미래로 묘사하여 체념을 유도하는 것은 무책임합니다. 사회 구조 개혁과 이민 정책 등을 통해 변화된 사회에 적응하려는 노력이 필요합니다.</p>
                `,
                references: [
                    { text: '통계청 인구 추계 보고서', url: '#' }
                ]
            }
        ],
        '가짜뉴스 판별법': [
            {
                title: '팩트체크 리터러시: 당신은 낚이고 있는가?',
                content: `
                    <h3>가이드</h3>
                    <p>1. 제목에 느낌표가 많거나 "충격", "단독"이 남발되는가?<br>2. 정보의 출처가 "익명의 관계자" 혹은 "해외 커뮤니티"인가?<br>3. 그 뉴스가 당신의 분노를 지나치게 자극하는가?<br>이 세 가지 중 하나라도 해당한다면, 그것은 가짜뉴스일 가능성이 높습니다.</p>
                `,
                references: [
                    { text: '팩트체크넷 시민 교육 자료', url: '#' }
                ]
            }
        ],
        '비판적 사고론': [
            {
                title: '확증 편향과 에코 체임버의 감옥',
                content: `
                    <h3>이론</h3>
                    <p>자신이 믿고 싶은 것만 보는 '확증 편향'은 당신을 알고리즘의 노예로 만듭니다. 반대편의 주장을 일부러 찾아 읽는 습관만이 진실의 균형을 잡아줄 수 있습니다.</p>
                `,
                references: [
                    { text: '인지심리학: 생각의 오류 보고서', url: '#' }
                ]
            }
        ]
    };

    const criticalThinkingContent = {
        title: '비판적 사고 가이드: 민주 시민의 무기',
        content: `
            <p>가짜뉴스는 당신의 무지를 파고드는 것이 아니라, 당신의 '확신'을 파고듭니다. 비판적 사고는 그 확신을 의심하는 용기입니다.</p>
            <h3>1. 소크라테스식 질문 던지기</h3>
            <p>"이 주장의 근거는 무엇인가?", "이 정보로 이득을 보는 사람은 누구인가?", "만약 이 정보가 거짓이라면 어떤 결과가 초래되는가?" 끊임없이 질문하십시오.</p>
            <h3>2. 교차 검증의 생활화</h3>
            <p>진실은 결코 단 하나의 유튜브 영상 안에 담겨 있지 않습니다. 최소한 세 군데 이상의 서로 다른 성향의 언론사 기사를 비교하십시오.</p>
            <h3>3. 감정의 폭주 제어하기</h3>
            <p>어떤 정보를 접했을 때 피가 거꾸로 솟는 분노를 느낀다면, 그 즉시 읽기를 중단하십시오. 선동가는 당신의 분노를 먹고 자랍니다.</p>
        `
    };

    function displayCategories() {
        if (!categoryList) return;
        categoryList.innerHTML = '';
        for (const category in factCheckData) {
            const li = document.createElement('li');
            li.textContent = category;
            li.addEventListener('click', () => {
                displayQA(category);
                document.querySelectorAll('#category-list li').forEach(item => item.classList.remove('active'));
                li.classList.add('active');
                searchInput.value = ''; // Clear search when category selected
            });
            categoryList.appendChild(li);
        }
    }

    function createInfobox(data) {
        if (!data) return '';
        let html = '<aside class="infobox"><div class="infobox-title">요약 정보</div><table>';
        for (const [key, value] of Object.entries(data)) {
            html += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
        html += '</table></aside>';
        return html;
    }

    function displayQA(category) {
        if (!articleBody || !currentCategoryTitle) return;
        currentCategoryTitle.textContent = category;
        articleBody.innerHTML = '';
        
        const items = factCheckData[category];
        if (!items) return;

        items.forEach(item => {
            const articleItem = document.createElement('article');
            articleItem.classList.add('article-item');

            const title = document.createElement('h2');
            title.textContent = item.title;

            const infoboxHtml = createInfobox(item.infobox);
            
            const articleContent = document.createElement('div');
            articleContent.classList.add('article-content');
            articleContent.innerHTML = infoboxHtml + item.content;

            const references = document.createElement('div');
            references.classList.add('references');
            references.innerHTML = '<h4>참고 자료 및 출처</h4>';
            const refList = document.createElement('ul');
            if (item.references) {
                item.references.forEach(ref => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.textContent = ref.text;
                    a.href = ref.url;
                    a.target = '_blank';
                    li.appendChild(a);
                    refList.appendChild(li);
                });
            }
            references.appendChild(refList);

            articleItem.appendChild(title);
            articleItem.appendChild(articleContent);
            articleItem.appendChild(references);
            articleBody.appendChild(articleItem);
        });
        qaContainer.scrollTop = 0;
    }

    function displayCriticalThinking() {
        if (!articleBody || !currentCategoryTitle) return;
        currentCategoryTitle.textContent = "비판적 사고 가이드";
        articleBody.innerHTML = `
            <article class="article-item">
                <div class="article-content">
                    ${criticalThinkingContent.content}
                </div>
            </article>
        `;
        document.querySelectorAll('#category-list li').forEach(item => item.classList.remove('active'));
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('change', switchTheme, false);
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeSwitch) themeSwitch.checked = true;
        }
    }

    factCheckBtn.addEventListener('click', () => {
        landingPage.style.display = 'none';
        mainContent.style.display = 'flex';
        siteHeader.style.display = 'block';
        displayCategories();
        const categories = Object.keys(factCheckData);
        if (categories.length > 0) {
            displayQA(categories[0]);
            const firstLi = document.querySelector('#category-list li');
            if (firstLi) firstLi.classList.add('active');
        }
    });

    criticalThinkingSection.addEventListener('click', () => {
        displayCriticalThinking();
    });

    // Simple Search Functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredCategories = Object.keys(factCheckData).filter(cat => 
            cat.toLowerCase().includes(query) || 
            factCheckData[cat].some(item => item.title.toLowerCase().includes(query))
        );

        categoryList.innerHTML = '';
        filteredCategories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            li.addEventListener('click', () => {
                displayQA(category);
                document.querySelectorAll('#category-list li').forEach(item => item.classList.remove('active'));
                li.classList.add('active');
            });
            categoryList.appendChild(li);
        });
    });

});
