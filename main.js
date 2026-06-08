document.addEventListener('DOMContentLoaded', () => {
    const factCheckBtn = document.getElementById('fact-check-btn');
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const categoryList = document.getElementById('category-list');
    const qaContainer = document.getElementById('qa-container');
    const criticalThinkingSection = document.getElementById('critical-thinking-section');
    const themeSwitch = document.getElementById('checkbox');
    const quoteText = document.querySelector('.quote');
    const quoteAuthor = document.querySelector('.author');

    const quotes = [
        {
            text: "정치적으로, 진실은 자신이 좋아하지 않는다고 해서 사실적 진실을 다른 의견으로 취급하는 사람들에 의해 무력화됩니다.",
            author: "- 한나 아렌트"
        },
        {
            text: "악은 사유의 부재에서 온다. 스스로 생각하기를 포기할 때, 인간은 누구나 평범한 악이 될 수 있다.",
            author: "- 한나 아렌트"
        },
        {
            text: "선동은 논리적 사고가 멈춘 곳에서 시작된다. 비판적 거리를 두지 못하는 대중은 언제나 권력의 먹잇감이 된다.",
            author: "- 한나 아렌트"
        },
        {
            text: "사실에 대한 진실이 사라진 곳에는 허구와 기만이 그 자리를 차지하며, 이는 자유를 파괴하는 첫걸음이다.",
            author: "- 한나 아렌트"
        },
        {
            text: "비판적 사고가 없는 복종은 도덕적 책임감을 마비시킨다.",
            author: "- 한나 아렌트"
        },
        {
            text: "생각하지 않는 것이야말로 인간이 저지를 수 있는 가장 큰 죄악 중 하나이다.",
            author: "- 한나 아렌트"
        }
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
        '부정선거 음모론': [
            {
                title: '4.15 총선 부정선거 의혹',
                content: `
                    <h3>개요</h3>
                    <p>2020년 제21대 국회의원 선거 이후 일부 보수 진영과 유튜버들을 중심으로 제기된 음모론입니다. 통계적 비정상성, QR코드 조작, 투표지 분류기 해킹 등을 근거로 내세우고 있습니다.</p>
                    
                    <h3>주요 주장과 반박</h3>
                    <h4>1. 사전투표와 본투표의 득표율 차이가 너무 크다?</h4>
                    <p><strong>반박:</strong> 이는 '전략적 투표'와 '세대별 투표 성향'의 차이로 설명됩니다. 민주당 지지층은 사전투표에 적극적으로 참여한 반면, 통합당(현 국민의힘) 지지층은 당일 투표를 선호하는 경향이 뚜렷했습니다. 이는 통계학적으로 충분히 발생 가능한 현상입니다.</p>
                    
                    <h4>2. QR코드에 개인정보가 담겨 있다?</h4>
                    <p><strong>반박:</strong> 선관위가 사용한 QR코드는 숫자 31자리로 구성된 일련번호일 뿐입니다. 여기에는 일련번호, 선거명, 선거구명, 관할 선관위명만 포함되어 있으며 개인을 식별할 수 있는 정보는 전무합니다.</p>
                    
                    <h4>3. 배춧잎 투표지, 화살표 투표지 등 기이한 투표지 발견?</h4>
                    <p><strong>반박:</strong> 대법원 재검표 결과, 제기된 '조작 투표지' 증거들은 인쇄 과정의 단순 실수이거나 재검표 현장의 조명, 촬영 각도에 따른 착시임이 판명되었습니다. 실제 조작의 증거로 인정된 사례는 단 하나도 없습니다.</p>
                    
                    <h3>결론</h3>
                    <p>대법원은 2022년 7월, 선거무효 소송을 모두 기각하며 "부정선거의 증거가 없다"고 최종 판결했습니다. 60여 차례의 재검표 과정에서도 조작의 흔적은 발견되지 않았습니다.</p>
                `,
                references: [
                    { text: '대법원 2022. 7. 28. 선고 2020수30 판결', url: 'https://www.scourt.go.kr/' },
                    { text: '중앙선관위 4.15 총선 부정선거 의혹 해명 자료', url: 'https://www.nec.go.kr/' }
                ]
            }
        ],
        '5.18 민주화운동 왜곡': [
            {
                title: '북한군 개입설 (북한군 침투설)',
                content: `
                    <h3>개요</h3>
                    <p>5.18 광주 민주화운동 당시 북한군 특수부대(일명 광수)가 침투하여 폭동을 주도했다는 주장입니다. 주로 지만원 등 극우 논객들과 일부 유튜브 채널에서 유포됩니다.</p>
                    
                    <h3>진실</h3>
                    <h4>1. '광수'라고 지목된 사진의 인물들</h4>
                    <p><strong>반박:</strong> 지만원 측이 북한군 장성이라고 주장하며 제시한 사진 속 인물들은 실제 광주 시민들임이 확인되었습니다. 이들은 자신들의 사진이 북한군으로 둔갑한 것에 대해 법적 대응을 했으며, 지만원은 명예훼손으로 실형을 선고받았습니다.</p>
                    
                    <h4>2. 당시 군 기록 및 첩보</h4>
                    <p><strong>반박:</strong> 1980년 당시 계엄군, 중앙정보부, 보안사령부 등 모든 국가 기관의 기록에 북한군 개입 징후는 기록되어 있지 않습니다. 또한 미 정보당국(CIA) 역시 북한군의 특이 동태가 없었음을 확인했습니다.</p>
                    
                    <h3>영향</h3>
                    <p>이러한 가짜뉴스는 희생자와 유가족들에게 2차 가해를 가하며, 헌법적 가치를 훼손하는 행위입니다. 현재는 5.18 왜곡 처벌법에 의해 처벌 대상이 될 수 있습니다.</p>
                `,
                references: [
                    { text: '5.18 민주화운동 진상규명조사위원회 보고서', url: 'http://www.jinsang518.go.kr/' },
                    { text: '법원 "5.18 북한군 개입설은 허위" 지만원 실형 확정', url: '#' }
                ]
            }
        ],
        '이재명 관련 허위사실': [
            {
                title: '대장동 배임 및 자금 유출 의혹',
                content: `
                    <h3>개요</h3>
                    <p>이재명 대표가 성남시장 시절 대장동 개발 사업을 설계하며 민간 업자에게 과도한 이익을 몰아주고, 그중 일부를 뇌물이나 정치 자금으로 돌려받았다는 의혹입니다.</p>
                    
                    <h3>팩트 체크</h3>
                    <h4>1. 428억 약정설</h4>
                    <p><strong>반박:</strong> 김만배 등 대장동 일당이 이재명 측에게 428억 원을 주기로 약속했다는 주장입니다. 하지만 검찰 수사 과정에서도 이재명 대표 본인이 이를 인지했거나 직접 돈을 받았다는 구체적인 물증은 제시되지 못하고 있습니다.</p>
                    
                    <h4>2. 성남시 이익 환수</h4>
                    <p><strong>반박:</strong> 당시 이재명 시장은 성남시가 한 푼도 들이지 않고 약 5,500억 원 규모의 이익을 환수하도록 설계했습니다. 이는 당시 부동산 경기 침체 상황에서 공공이 확보할 수 있는 최대치였다는 평가와, 더 확보할 수 있었음에도 소홀히 했다는 비판이 공존합니다.</p>
                    
                    <h3>현재 상황</h3>
                    <p>현재 관련 재판이 진행 중이며, 법정 공방이 치열합니다. 의혹만으로 확정적 사실인 양 퍼뜨리는 행위는 주의가 필요합니다.</p>
                `,
                references: [
                    { text: '뉴스타파 대장동 사건 핵심 기록 기록', url: 'https://newstapa.org/' },
                    { text: '이재명 대표 측 공식 입장문', url: '#' }
                ]
            }
        ],
        '사회/문화적 선동': [
            {
                title: '난민/이민자 범죄율 음모론',
                content: `
                    <h3>개요</h3>
                    <p>특정 종교(주로 이슬람)나 국적의 외국인이 유입되면 범죄율이 폭등하고 국가 안전이 위험해진다는 공포 선동입니다. 에펨코리아, 유튜브 등에서 자주 보입니다.</p>
                    
                    <h3>데이터 분석</h3>
                    <p><strong>진실:</strong> 경찰청 통계에 따르면 외국인 범죄율은 내국인 범죄율보다 지속적으로 낮게 나타납니다. 특정 강력 범죄가 부각되어 보도되는 경향이 있으나, 통계적 사실과는 거리가 멉니다.</p>
                `,
                references: [
                    { text: '경찰청 경찰통계연보', url: 'https://www.police.go.kr/' }
                ]
            },
            {
                title: '여성가족부 폐지 및 페미니즘 왜곡',
                content: `
                    <h3>내용</h3>
                    <p>여성가족부가 남성을 차별하는 정책에만 예산을 쏟아붓는다는 식의 선동입니다. 실제 여가부 예산의 80% 이상은 가족, 청소년 지원, 한부모 가족 지원 등에 사용됩니다.</p>
                `,
                references: [
                    { text: '여성가족부 예산 개요', url: 'http://www.mogef.go.kr/' }
                ]
            }
        ],
        '외교/안보 음모론': [
            {
                title: '중국인 사전투표 조작설 및 선거 개입',
                content: `
                    <h3>개요</h3>
                    <p>국내 거주 중국인(조선족 포함)들이 대거 투표에 참여하여 선거 결과를 조작하거나, 중국 정부가 해킹을 통해 개표에 관여한다는 주장입니다.</p>
                    
                    <h3>진실</h3>
                    <h4>1. 외국인의 투표권</h4>
                    <p><strong>팩트:</strong> 대한민국 국회의원 선거와 대통령 선거에서 외국인은 투표권이 없습니다. 영주권을 취득한 지 3년이 지난 외국인은 '지방선거'에만 참여할 수 있으며, 이들 중 중국 국적자의 비율은 전체 유권자의 0.2% 수준에 불과해 대세를 결정짓기에는 역부족입니다.</p>
                    
                    <h4>2. 개표기 중국산 부품 조작설</h4>
                    <p><strong>팩트:</strong> 투표지 분류기에 사용된 일부 부품이 중국산이라는 이유로 조작 가능성이 제기되었으나, 하드웨어 부품의 원산지와 소프트웨어 조작은 별개의 문제입니다. 선관위는 모든 소프트웨어를 자체 개발하며 보안 검증을 거칩니다.</p>
                `,
                references: [
                    { text: '선거관리위원회 외국인 투표권 안내', url: '#' },
                    { text: '연합뉴스 팩트체크: 중국인 선거 개입설 검증', url: '#' }
                ]
            }
        ],
        '백신 및 보건 음모론': [
            {
                title: '코로나19 백신 마이크로칩 및 인구 조절설',
                content: `
                    <h3>내용</h3>
                    <p>백신에 마이크로칩이 들어있어 인간을 조종하거나, 빌 게이츠가 인구수를 줄이기 위해 백신을 퍼뜨렸다는 극단적인 음모론입니다.</p>
                    
                    <h3>반박</h3>
                    <p><strong>과학적 근거:</strong> 백신 주사 바늘을 통과할 수 있는 크기의 마이크로칩은 존재하지 않으며, 백신의 성분은 모두 공개되어 검증되었습니다. 이러한 주장은 과학적 근거가 전혀 없는 허구입니다.</p>
                `,
                references: [
                    { text: '질병관리청 백신 안전성 정보', url: '#' }
                ]
            }
        ],
        '유튜브/SNS 선동 방식': [
            {
                title: '극우 유튜버들의 수익 모델',
                content: `
                    <h3>선동의 알고리즘</h3>
                    <p>1. 자극적인 썸네일과 제목으로 클릭 유도<br>2. 분노와 증오를 유발하는 확인되지 않은 정보 나열<br>3. 시청자들의 후원금(슈퍼챗) 및 굿즈 판매 유도</p>
                    <p>이들은 사실 여부보다 조회수와 수익이 목적이기 때문에, 한 번 퍼뜨린 거짓말이 들통나도 사과하지 않고 또 다른 자극적인 소재로 넘어갑니다.</p>
                `,
                references: [
                    { text: '민언련 유튜버 모니터링 보고서', url: 'https://www.ccdm.or.kr/' }
                ]
            }
        ]
    };

    const criticalThinkingContent = {
        title: '비판적 사고력 기르기',
        content: `
            <p>비판적 사고는 정보를 맹목적으로 받아들이지 않고, 능동적으로 분석하고 평가하는 능력입니다. 다음은 일상에서 비판적 사고력을 기르는 몇 가지 방법입니다.</p>
            <ul>
                <li><strong>출처 확인하기:</strong> 정보는 어디에서 왔는가? 신뢰할 수 있는 기관이나 전문가가 제공한 정보인가?</li>
                <li><strong>교차 검증하기:</strong> 하나의 정보에만 의존하지 말고, 여러 다른 출처의 정보를 비교하여 사실 여부를 확인한다.</li>
                <li><strong>감정 배제하기:</strong> 특정 주장이 나의 감정이나 신념에 호소하더라도, 사실 관계는 냉정하게 분리하여 판단한다.</li>
                <li><strong>반론 탐색하기:</strong> 모든 주장에는 반대 의견이 있을 수 있다. 반대편의 논리와 근거는 무엇인지 적극적으로 찾아본다.</li>
                <li><strong>확증 편향 경계하기:</strong> 내가 이미 믿고 있는 것과 일치하는 정보만 선별적으로 받아들이는 경향을 주의해야 합니다.</li>
            </ul>
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
            });
            categoryList.appendChild(li);
        }
    }

    function displayQA(category) {
        if (!qaContainer) return;
        qaContainer.innerHTML = '';
        const items = factCheckData[category];
        if (!items) return;
        items.forEach(item => {
            const qaItem = document.createElement('div');
            qaItem.classList.add('qa-item');

            const title = document.createElement('h2');
            title.textContent = item.title;
            title.style.borderBottom = '2px solid #007bff';
            title.style.paddingBottom = '0.5rem';

            const articleContent = document.createElement('div');
            articleContent.classList.add('article-content');
            articleContent.innerHTML = item.content;

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

            qaItem.appendChild(title);
            qaItem.appendChild(articleContent);
            qaItem.appendChild(references);
            qaContainer.appendChild(qaItem);
        });
        qaContainer.scrollTop = 0;
    }

    function displayCriticalThinking() {
        if (!qaContainer) return;
        qaContainer.innerHTML = '';
        const content = document.createElement('div');
        content.classList.add('qa-item');
        content.innerHTML = `<h2>${criticalThinkingContent.title}</h2>${criticalThinkingContent.content}`;
        qaContainer.appendChild(content);
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

    if (factCheckBtn) {
        factCheckBtn.addEventListener('click', () => {
            if (landingPage) landingPage.style.display = 'none';
            if (mainContent) mainContent.style.display = 'flex';
            displayCategories();
            const categories = Object.keys(factCheckData);
            if (categories.length > 0) {
                displayQA(categories[0]);
                const firstLi = document.querySelector('#category-list li');
                if (firstLi) firstLi.classList.add('active');
            }
        });
    }

    if (criticalThinkingSection) {
        criticalThinkingSection.addEventListener('click', () => {
            displayCriticalThinking();
        });
    }
});
