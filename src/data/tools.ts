import type { Tool } from '../types/tool';

/**
 * ==========================================
 * 🛠️ 도구 데이터 중앙 관리소
 * ==========================================
 * 
 * 새로운 도구를 추가하려면 아래 배열에 객체를 추가하세요.
 * 다른 개발자들도 이 템플릿을 복사하여 자신만의 도구를 쉽게 추가할 수 있습니다.
 * 
 * [템플릿 예시]
 * {
 *   id: 'my-new-tool',             // URL: /category/my-new-tool
 *   name: {
 *     ko: '내 새로운 도구',
 *     en: 'My New Tool'
 *   },
 *   category: 'dev',               // URL: /dev/my-new-tool
 *   categoryLabel: {
 *     ko: '개발',
 *     en: 'Development'
 *   },
 *   description: {
 *     ko: '이 도구는 이런 작업을 합니다.',
 *     en: 'This tool does something awesome.'
 *   },
 *   icon: '✨',                      // 텍스트 기반 이모지 지원
 *   tags: ['tag1', 'tag2'],        // 검색 키워드
 *   featured: false                // true면 메인 상단 노출
 * }
 */

export const tools: Tool[] = [
  {
    id: 'string-length',
    name: {
      ko: '글자 수 세기',
      en: 'String Length Calculator'
    },
    category: 'text',
    categoryLabel: {
      ko: '텍스트',
      en: 'Text'
    },
    description: {
      ko: '공백을 포함하거나 제외한 문자열의 길이를 계산합니다.',
      en: 'Calculate the length of a string, with or without spaces.'
    },
    icon: '📏',
    tags: ['text', 'length', 'count', '글자수', '텍스트', '길이'],
    featured: true
  },
  {
    id: 'stock-average-calculator',
    name: {
      ko: '물타기 계산기',
      en: 'Stock Average Calculator'
    },
    category: 'finance',
    categoryLabel: {
      ko: '금융',
      en: 'Finance'
    },
    description: {
      ko: '추가 매수 시 최종 평균 단가와 총 투자 금액을 계산합니다.',
      en: 'Calculate the final average price and total investment when buying more shares.'
    },
    icon: '📉',
    tags: ['stock', 'average', 'finance', '주식', '물타기', '평단가', '계산기', '평균'],
  },
  {
    id: 'stock-position-size',
    name: {
      ko: '포지션 사이징 & 손절 계산기',
      en: 'Stock Position Sizing & Stop-Loss Calculator'
    },
    category: 'finance',
    categoryLabel: {
      ko: '금융',
      en: 'Finance'
    },
    description: {
      ko: '투자 자본, 감수할 리스크 비율, 손절 라인을 기준으로 적절한 매수 주식 수와 진입 규모를 계산합니다.',
      en: 'Calculate the appropriate number of shares and investment size based on capital, risk percentage, and stop-loss level.'
    },
    icon: '🛡️',
    tags: ['stock', 'risk', 'position', 'sizing', 'stop-loss', 'finance', '주식', '포지션', '사이징', '손절', '리스크', '자금관리'],
    featured: false
  },
  {
    id: 'stock-split-sell',
    name: {
      ko: '목표 수익률 & 분할 매도 계산기',
      en: 'Target Yield & Split Sell Calculator'
    },
    category: 'finance',
    categoryLabel: {
      ko: '금융',
      en: 'Finance'
    },
    description: {
      ko: '목표 수익률 또는 금액에 맞춰 단계별 분할 매도 가격과 예상 실현 수익을 시뮬레이션합니다.',
      en: 'Calculate target prices and expected profits for phased split selling according to your target yields.'
    },
    icon: '📈',
    tags: ['stock', 'split', 'sell', 'target', 'profit', 'finance', '주식', '분할매도', '수익률', '익절', '매도계산기'],
    featured: false
  },
  {
    id: 'stock-dividend-reinvest',
    name: {
      ko: '배당금 재투자(DRIP) 시뮬레이터',
      en: 'Dividend Reinvestment Simulator'
    },
    category: 'finance',
    categoryLabel: {
      ko: '금융',
      en: 'Finance'
    },
    description: {
      ko: '배당금 재투자 여부에 따른 장기 복리 효과와 미래 배당 소득 흐름을 시뮬레이션합니다.',
      en: 'Simulate the long-term compounding effects and future dividend cash flow based on reinvestment.'
    },
    icon: '💵',
    tags: ['stock', 'dividend', 'reinvest', 'drip', 'compound', 'finance', '주식', '배당', '재투자', '복리', '시뮬레이터', '배당금'],
    featured: false
  },
  {
    id: 'stock-srim-valuation',
    name: {
      ko: '적정 주가(S-RIM) 계산기',
      en: 'S-RIM Valuation Calculator'
    },
    category: 'finance',
    categoryLabel: {
      ko: '금융',
      en: 'Finance'
    },
    description: {
      ko: '사경인 회계사의 S-RIM 가치 평가 모델을 활용해 기업의 적정 주가와 안전 마진을 계산합니다.',
      en: 'Calculate the fair value and margin of safety of a company using the S-RIM valuation model.'
    },
    icon: '🧮',
    tags: ['stock', 'srim', 'valuation', 'fair-value', 'finance', '주식', '적정주가', '에스림', '사경인', '가치평가', '재무제표'],
    featured: false
  },
  {
    id: 'stock-tax-calculator',
    name: {
      ko: '해외 주식 양도소득세 계산기',
      en: 'Overseas Capital Gains Tax Calculator'
    },
    category: 'finance',
    categoryLabel: {
      ko: '금융',
      en: 'Finance'
    },
    description: {
      ko: '해외 주식 매매에 따른 예상 양도소득세를 계산하고 연말 절세를 위한 손실 확정 가이드를 제공합니다.',
      en: 'Calculate the estimated capital gains tax for overseas stocks and get year-end tax-saving guidelines.'
    },
    icon: '✈️',
    tags: ['stock', 'tax', 'overseas', 'finance', '주식', '양도소득세', '해외주식', '세금', '절세', '양도세'],
    featured: false
  },
  {
    id: 'stock-rebalancing-calculator',
    name: {
      ko: '포트폴리오 리밸런싱 계산기',
      en: 'Portfolio Rebalancing Calculator'
    },
    category: 'finance',
    categoryLabel: {
      ko: '금융',
      en: 'Finance'
    },
    description: {
      ko: '현재 포트폴리오를 목표 비중으로 조정하기 위해 추가 매수/매도해야 할 자금 규모를 계산합니다.',
      en: 'Calculate the buying or selling amount needed to adjust your current portfolio to target allocation.'
    },
    icon: '📊',
    tags: ['stock', 'rebalancing', 'portfolio', 'allocation', 'finance', '주식', '리밸런싱', '포트폴리오', '자산배분', '비중조정'],
    featured: false
  }
];

// 헬퍼 함수들
export const getToolsByCategory = (category: string) => 
  tools.filter(tool => tool.category === category);

export const getFeaturedTools = () => 
  tools.filter(tool => tool.featured);

export const getAllCategories = () => {
  const categories = new Map();
  tools.forEach(tool => {
    if (!categories.has(tool.category)) {
      categories.set(tool.category, tool.categoryLabel);
    }
  });
  return Array.from(categories.entries()).map(([slug, label]) => ({ slug, label }));
};
