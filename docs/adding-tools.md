# 새로운 도구 추가 가이드 (Adding a New Tool Guide)

이 프로젝트는 새로운 도구를 쉽게 추가하고 관리할 수 있도록 설계되었습니다. 
도구를 추가하려면 **1) 데이터 등록**, **2) UI 컴포넌트 생성**이라는 두 가지 단계만 거치면 됩니다.

---

## 1단계: 도구 데이터 등록 (`src/data/tools.ts`)

가장 먼저 할 일은 시스템에 도구의 정보를 등록하는 것입니다.
`src/data/tools.ts` 파일을 열고 `tools` 배열에 새로운 도구 객체를 추가합니다.

```typescript
export const tools: Tool[] = [
  // 기존 도구들...
  {
    id: 'my-new-tool',             // URL에 사용될 고유 슬러그 (예: /dev/my-new-tool)
    name: {
      ko: '내 새로운 도구',
      en: 'My New Tool'            // (참고: 영어는 미지원하므로 ko와 동일하거나 임의 입력)
    },
    category: 'dev',               // 카테고리 슬러그 (text, dev, color, convert 등)
    categoryLabel: {
      ko: '개발',
      en: 'Development'            // (참고: 영어는 미지원하므로 ko와 동일하거나 임의 입력)
    },
    description: {
      ko: '이 도구가 어떤 역할을 하는지 짧게 설명합니다.',
      en: 'A short description.'   // (참고: 영어는 미지원하므로 ko와 동일하거나 임의 입력)
    },
    icon: '✨',                      // 메인 화면과 상세 화면에 표시될 이모지
    tags: ['새로운', '도구', 'new', 'tool'], // 검색에 활용될 키워드들
    featured: false                // true로 설정 시 메인 페이지 카드 상단에 별표 표시
  }
];
```

> **💡 주의사항**
> `id` 필드는 URL 경로가 되므로 영문 소문자와 하이픈(`-`)만 사용하는 것을 권장합니다.
> 나중에 만들 UI 컴포넌트의 파일명과 **정확히 일치**해야 합니다.
> *현재 앱은 영어 번역 페이지를 제공하지 않으므로, 데이터 스키마 타입 유지를 위해 필요한 `en` 필드에는 `ko`와 동일한 텍스트 혹은 간단한 영문을 기입하시면 됩니다.*

> **🔍 SEO (검색엔진 최적화) 팁**
> `description`과 `tags` 필드는 사이트 검색뿐만 아니라, **검색엔진(구글, 네이버 등)**이 이 페이지가 어떤 도구인지 이해하는 데 직접적으로 사용됩니다.
> - **description**: 메타 설명(`meta description`)과 Open Graph 카드 설명으로 들어갑니다. 매력적이고 명확하게 적어주세요.
> - **tags**: 사람들이 이 도구를 찾기 위해 검색할 만한 키워드(예: '계산기', '변환' 등)를 최대한 많이 넣어주세요.

---

## 2단계: 도구 UI 컴포넌트 만들기 (`src/components/tools/`)

데이터를 등록했다면, 사용자가 실제로 조작할 인터랙티브 도구를 만들 차례입니다.
`src/components/tools/` 디렉토리 안에 `id`와 동일한 이름의 `.astro` 파일을 생성합니다.

예를 들어, `id`를 `my-new-tool`로 설정했다면:
👉 `src/components/tools/my-new-tool.astro` 파일을 만듭니다.

### 📐 도구별 최적의 레이아웃 설계 가이드 (Layout Guidelines)

도구의 성격과 다루는 데이터에 따라 사용자가 가장 편리하게 이용할 수 있는 레이아웃을 다르게 구성해야 합니다. 단순히 기본 템플릿을 일괄 적용하기보다, 도구의 기능과 입력/출력 형식을 고려하여 가장 직관적인 화면 배치를 적용해 주세요.

*   **좌우 1:1 분할 레이아웃 (Side-by-Side Layout)**
    *   **적합한 도구**: 입력값과 결과값을 나란히 비교하거나 동시에 보아야 하는 도구 (예: Base64 변환기, JSON 포맷터, 대소문자 변환기, 마크다운 미리보기 등)
    *   **디자인 가이드**: 화면 너비가 넓은 데스크톱 환경에서는 좌측에 입력창, 우측에 출력창을 1:1 비율로 배치하고, 모바일 화면에서는 자연스럽게 상하로 적층(Stacked)되도록 반응형 CSS를 작성합니다.
*   **중앙 단일 칼럼 레이아웃 (Centered Single Column Layout)**
    *   **적합한 도구**: 입력 폼이 단순하고 결과가 한눈에 들어오는 도구 (예: QR 코드 생성기, 무작위 비밀번호 생성기, 간단한 단위 계산기 등)
    *   **디자인 가이드**: 전체 화면 너비가 너무 넓어지면 인풋 필드가 비대해져 사용하기 어렵습니다. 최대 가로폭(`max-width: 600px` 등)을 제한하고 중앙 정렬하여 시인성을 높입니다.
*   **시각 프리뷰 + 우측 제어판 레이아웃 (Visual Preview & Control Panel)**
    *   **적합한 도구**: 시각적인 요소(색상, 그래픽, 그림자 등)의 실시간 변화를 모니터링하며 조절해야 하는 도구 (예: 컬러 픽커, CSS 그림자 생성기, 그래디언트 메이커 등)
    *   **디자인 가이드**: 결과물을 큼직하게 확인할 수 있는 미리보기 영역(Preview)을 한쪽에 크게 배치하고, 색상 조절 슬라이더나 인풋 등의 컨트롤 패널을 반대편(데스크톱 기준 우측 등)에 모아서 정렬합니다.

---

### 컴포넌트 템플릿 (복사해서 사용하세요)

영어 지원이 중단되었으므로 별도의 다국어 처리(`i18n` 유틸) 없이 한글 텍스트를 바로 작성하면 됩니다.

```astro
---
// 별도의 다국어 처리가 필요 없습니다.
const t = {
  placeholder: '입력값을 넣어주세요...',
  result: '결과:',
  button: '변환하기'
};
---

<!-- 3. 도구의 UI 구성 -->
<div class="tool-my-new-tool">
  <div class="input-group">
    <textarea id="my-input" placeholder={t.placeholder}></textarea>
    <button id="my-action-btn">{t.button}</button>
  </div>
  
  <div class="output-group">
    <p>{t.result}</p>
    <div id="my-output" class="output-box"></div>
  </div>
</div>

<!-- 4. 도구 전용 스타일 작성 -->
<style>
  .tool-my-new-tool {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  /* 전역 CSS 변수 활용 (var(--bg-primary), var(--accent) 등) */
  textarea {
    width: 100%;
    background: var(--bg-primary);
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 1rem;
    border-radius: var(--radius);
  }
  
  button {
    background: var(--accent);
    color: #000;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius);
    font-weight: bold;
    cursor: pointer;
  }
  
  .output-box {
    background: var(--bg-hover);
    padding: 1rem;
    border-radius: var(--radius);
    min-height: 100px;
  }
</style>

<!-- 5. 인터랙티브 로직 (바닐라 JS) -->
<script>
  // DOMContentLoaded를 사용하여 요소가 렌더링된 후 로직 실행
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('my-input') as HTMLTextAreaElement;
    const btn = document.getElementById('my-action-btn');
    const output = document.getElementById('my-output');

    if (!btn || !input || !output) return;

    btn.addEventListener('click', () => {
      // 변환 로직 예시
      const resultValue = input.value.toUpperCase(); 
      output.textContent = resultValue;
    });
  });
</script>
```

---

## 3단계: 확인하기

개발 서버가 켜져 있다면, 브라우저에서 메인 페이지로 이동해보세요.
1. 메인 화면의 그리드에 방금 추가한 도구가 잘 나오는지 확인합니다.
2. 도구 카드를 클릭해서 상세 페이지로 넘어갔을 때, 작성한 UI와 로직이 잘 동작하는지 테스트합니다.

🎉 축하합니다! 새로운 도구가 성공적으로 추가되었습니다.
