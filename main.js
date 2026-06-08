document.addEventListener('DOMContentLoaded', () => {
    const factCheckBtn = document.getElementById('fact-check-btn');
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const categoryList = document.getElementById('category-list');
    const qaContainer = document.getElementById('qa-container');
    const criticalThinkingSection = document.getElementById('critical-thinking-section');
    const themeSwitch = document.getElementById('checkbox');

    const factCheckData = {
        '부정선거음모론': [
            {
                question: '4.15 총선은 QR코드를 이용한 전자개표기 조작으로 이루어진 부정선거였다?',
                answer: '중앙선거관리위원회는 4.15 총선에서 사용된 QR코드는 개표 과정의 편의성과 정확성을 높이기 위한 단순 식별용이며, 어떠한 개인정보나 투표정보를 담고 있지 않다고 밝혔습니다. 또한, 전자개표기는 인터넷망에 연결되어 있지 않아 외부 해킹이 불가능하며, 투표지 분류 과정은 여러 명의 참관인과 위원들이 수작업으로 검증하는 절차를 거칩니다.',
                references: [
                    { text: '중앙선거관리위원회, 4.15 총선 관련 Q&A', url: 'https://www.nec.go.kr/' },
                    { text: 'JTBC 팩트체크, QR코드 음모론 검증', url: '#' },
                ]
            },
            {
                question: '투표용지가 미리 인쇄되어 특정 후보에게 유리하게 조작되었다?',
                answer: '투표용지는 선거일 직전에 각 지역 선관위의 엄격한 관리 하에 인쇄되며, 인쇄 수량과 배부 과정이 모두 기록되고 공개됩니다. 특정 후보에게 유리하게 미리 인쇄된 투표용지가 대량으로 발견되었다는 주장은 사실이 아니며, 관련 증거로 제시된 이미지나 영상은 대부분 조작되거나 다른 맥락에서 사용된 것입니다.',
                references: [
                    { text: '연합뉴스, 투표용지 인쇄 및 배부 절차 보도', url: '#' },
                ]
            }
        ],
        '이재명 가짜뉴스': [
            {
                question: '대장동 개발 사업의 모든 수익은 이재명과 그 측근들에게 돌아갔다?',
                answer: '대장동 개발 사업의 수익금 중 상당 부분은 성남시 공공개발이익으로 환수되어 공원 조성, 임대주택 공급 등 공공사업에 사용되었습니다. 민간사업자에게 과도한 이익이 돌아간 점은 비판의 대상이 되고 검찰 수사가 진행 중이지만, 사업 수익 전체가 특정 개인에게 돌아갔다는 주장은 사실과 다릅니다.',
                references: [
                    { text: '성남시청, 대장동 개발 사업 관련 공식 발표 자료', url: '#' },
                    { text: '뉴스타파, 대장동 개발 사업 수익 배분 구조 분석', url: '#' },
                ]
            },
            {
                question: '이재명 대표가 북한에 수백만 달러를 불법 송금했다?',
                answer: '이 주장은 쌍방울 그룹의 대북 송금 의혹에서 비롯되었으며, 검찰은 이재명 대표가 경기도지사 시절 방북 비용 대납 등을 목적으로 쌍방울이 북한에 돈을 보냈다고 보고 수사하고 있습니다. 하지만 이재명 대표 측은 이를 전면 부인하고 있으며, 현재 1심 재판이 진행 중인 사안으로 유무죄가 확정되지 않았습니다. 의혹 제기와 사실 확정은 구분해야 합니다.',
                references: [
                    { text: '법률신문, 쌍방울 그룹 대북송금 의혹 사건 경과', url: '#' },
                ]
            },
             {
                question: '국제마피아파 출신 조폭 박철민이 이재명에게 20억을 주었다?',
                answer: '박철민은 장기간 수감생활을 했고 이재명을 만난 적도 없으며 돈을 전달했다는 시기에는 다른 사건으로 수감중이었다는 사실이 밝혀졌습니다. 이 사건은 결국 이재명 대표를 음해하기 위한 조직적인 가짜뉴스임이 드러났습니다.',
                references: [
                    { text: '오마이뉴스, 장용진의 팩트체크', url: 'https://www.ohmynews.com/NWS_Web/Series/series_premium_pg.aspx?CNTN_CD=A0002882823' },
                ]
            }
        ],
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
                <li><strong>소크라테스식 질문법 (반론 제기):</strong> 어떤 주장을 접했을 때, 계속해서 \'왜?\', \'어떻게?\', \'만약 ~라면?\'과 같은 질문을 던져본다. 이 과정을 통해 더 이상 합리적인 반론을 제기할 수 없는 지점에 도달했을 때, 그 주장이 사실에 더 가까울 가능성이 높습니다. 이는 주장의 논리적 기반을 끝까지 파고들어 핵심적인 사실에 도달하려는 노력입니다.</li>
            </ul>
        `
    };

    function displayCategories() {
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
        qaContainer.innerHTML = '';
        const items = factCheckData[category];
        items.forEach(item => {
            const qaItem = document.createElement('div');
            qaItem.classList.add('qa-item');

            const question = document.createElement('h3');
            question.textContent = item.question;
            question.addEventListener('click', () => {
                const answer = qaItem.querySelector('.answer');
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });

            const answerContainer = document.createElement('div');
            answerContainer.classList.add('answer');
            
            const answerText = document.createElement('p');
            answerText.textContent = item.answer;

            const references = document.createElement('div');
            references.classList.add('references');
            references.innerHTML = '<h4>참고 자료</h4>';
            const refList = document.createElement('ul');
            item.references.forEach(ref => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = ref.text;
                a.href = ref.url;
                a.target = '_blank';
                li.appendChild(a);
                refList.appendChild(li);
            });
            references.appendChild(refList);

            answerContainer.appendChild(answerText);
            answerContainer.appendChild(references);
            qaItem.appendChild(question);
            qaItem.appendChild(answerContainer);
            qaContainer.appendChild(qaItem);
        });
    }

    function displayCriticalThinking() {
        qaContainer.innerHTML = '';
        const content = document.createElement('div');
        content.classList.add('qa-item');
        content.innerHTML = `<h2>${criticalThinkingContent.title}</h2>${criticalThinkingContent.content}`;
        qaContainer.appendChild(content);
        document.querySelectorAll('#category-list li').forEach(item => item.classList.remove('active'));
    }

    // Theme switching logic
    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    themeSwitch.addEventListener('change', switchTheme, false);

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeSwitch.checked = true;
        }
    }

    factCheckBtn.addEventListener('click', () => {
        landingPage.style.display = 'none';
        mainContent.style.display = 'flex';
        displayCategories();
        // Display the first category by default
        const firstCategory = Object.keys(factCheckData)[0];
        displayQA(firstCategory);
        document.querySelector('#category-list li').classList.add('active');
    });

    criticalThinkingSection.addEventListener('click', () => {
        displayCriticalThinking();
    });

});