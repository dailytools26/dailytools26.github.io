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
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
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
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
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
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
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
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
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
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
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
    category: 'tax',
    categoryLabel: {
      ko: '세금',
      en: 'Tax'
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
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '현재 포트폴리오를 목표 비중으로 조정하기 위해 추가 매수/매도해야 할 자금 규모를 계산합니다.',
      en: 'Calculate the buying or selling amount needed to adjust your current portfolio to target allocation.'
    },
    icon: '📊',
    tags: ['stock', 'rebalancing', 'portfolio', 'allocation', 'finance', '주식', '리밸런싱', '포트폴리오', '자산배분', '비중조정'],
    featured: false
  },
  {
    id: 'salary-tax-calculator',
    name: {
      ko: '근로소득 실수령액 계산기',
      en: 'Salary Net Pay Calculator'
    },
    category: 'tax',
    categoryLabel: {
      ko: '세금',
      en: 'Tax'
    },
    description: {
      ko: '월급이나 연봉을 입력하여 국민연금, 건강보험, 소득세 등을 공제한 실제 월 실수령액을 계산합니다.',
      en: 'Calculate your actual monthly net pay after deductions like national pension, health insurance, and income tax.'
    },
    icon: '💳',
    tags: ['tax', 'salary', 'income', 'net-pay', 'finance', '세금', '실수령액', '월급', '연봉', '근로소득', '4대보험'],
    featured: false
  },
  {
    id: 'freelancer-tax-calculator',
    name: {
      ko: '3.3% 프리랜서 세금 & 환급 계산기',
      en: '3.3% Freelancer Tax & Refund Calculator'
    },
    category: 'tax',
    categoryLabel: {
      ko: '세금',
      en: 'Tax'
    },
    description: {
      ko: '3.3% 프리랜서 사업소득의 원천징수 세액과 종합소득세 과세표준 구간에 따른 예상 환급/추가 납부액을 계산합니다.',
      en: 'Calculate the 3.3% withholding tax and estimated refund or additional tax for freelancers based on global income brackets.'
    },
    icon: '💼',
    tags: ['tax', 'freelancer', 'refund', 'finance', '세금', '프리랜서', '3.3', '종소세', '종합소득세', '환급금', '원천징수'],
    featured: false
  },
  {
    id: 'real-estate-acquisition-tax',
    name: {
      ko: '부동산 취득세 계산기',
      en: 'Real Estate Acquisition Tax Calculator'
    },
    category: 'real-estate',
    categoryLabel: {
      ko: '부동산',
      en: 'Real Estate'
    },
    description: {
      ko: '취득 가액, 면적, 다주택 및 조정대상지역 여부에 따라 부과되는 취득세 및 부가세를 계산합니다.',
      en: 'Calculate the acquisition tax and surtaxes on real estate purchases based on price, area, multi-home ownership, and regulations.'
    },
    icon: '🏠',
    tags: ['tax', 'real-estate', 'acquisition', 'house', 'finance', '세금', '부동산', '취득세', '다주택', '주택', '매매'],
    featured: false
  },
  {
    id: 'gift-inheritance-tax',
    name: {
      ko: '증여세 & 상속세 간이 계산기',
      en: 'Gift & Inheritance Tax Calculator'
    },
    category: 'tax',
    categoryLabel: {
      ko: '세금',
      en: 'Tax'
    },
    description: {
      ko: '인적 공제(배우자, 직계존비속 등)를 적용하고 과세표준별 누진세율을 반영하여 증여세와 상속세를 계산합니다.',
      en: 'Calculate gift and inheritance taxes by applying personal deductions and progressive tax brackets.'
    },
    icon: '🎁',
    tags: ['tax', 'gift', 'inheritance', 'finance', '세금', '증여세', '상속세', '공제', '가족', '상속'],
    featured: false
  },
  {
    id: 'retirement-tax-calculator',
    name: {
      ko: '퇴직소득세 계산기',
      en: 'Retirement Income Tax Calculator'
    },
    category: 'tax',
    categoryLabel: {
      ko: '세금',
      en: 'Tax'
    },
    description: {
      ko: '근속 연수와 퇴직금 총액을 기준으로 퇴직소득공제 및 연분연승법을 적용하여 세후 실수령 퇴직금을 계산합니다.',
      en: 'Calculate your net retirement pay by applying working year deductions and the simplified retirement tax formula.'
    },
    icon: '⏳',
    tags: ['tax', 'retirement', 'severance', 'finance', '세금', '퇴직금', '퇴직소득세', '실수령액', '퇴직공제'],
    featured: false
  },
  {
    id: 'commercial-vat-separator',
    name: {
      ko: '상업용 부동산 부가세 계산기',
      en: 'Commercial Property VAT Separator'
    },
    category: 'real-estate',
    categoryLabel: {
      ko: '부동산',
      en: 'Real Estate'
    },
    description: {
      ko: '상가나 건물 매매/임대 거래 시 부가세 면세인 토지분과 10% 과세인 건물분 공급가액 및 부가세를 안분하여 계산합니다.',
      en: 'Separate the exempt land portion and the 10% taxable building portion to calculate building VAT for commercial property transactions.'
    },
    icon: '🏢',
    tags: ['tax', 'vat', 'commercial', 'property', 'finance', '세금', '부가세', '부가가치세', '상가', '건물', '안분', '매매'],
    featured: false
  },
  {
    id: 'stock-price-average',
    name: {
      ko: '다중 매수 평단가 계산기',
      en: 'Multi-Buy Stock Average Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '여러 차례 매수한 주식들의 각 단가와 수량을 입력하여 최종 평균 단가와 총 투자금을 계산합니다.',
      en: 'Calculate your final average share price and total investment by entering prices and quantities for multiple purchases.'
    },
    icon: '🧮',
    tags: ['stock', 'average', 'finance', 'multi-buy', '주식', '평단가', '계산기', '다중매수', '물타기'],
    featured: false
  },
  {
    id: 'stock-quantity-calculator',
    name: {
      ko: '매수 가능 수량 계산기',
      en: 'Stock Buy Quantity Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '투자 자금과 매수 단가, 수수료를 입력하여 매수 가능한 최대 주식 수량과 남는 예수금을 계산합니다.',
      en: 'Calculate the maximum number of shares you can buy and the remaining balance based on budget, price, and fees.'
    },
    icon: '🛒',
    tags: ['stock', 'quantity', 'calculator', 'finance', '주식', '수량', '매수', '예수금', '수수료'],
    featured: false
  },
  {
    id: 'stock-yield-calculator',
    name: {
      ko: '주식 수익률 계산기',
      en: 'Stock Yield & Profit Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '매수가, 매도가, 수량 및 거래 수수료와 세금을 반영하여 실제 거래 순손익 및 수익률을 정밀 계산합니다.',
      en: 'Calculate the exact realized profit/loss and rate of return by factoring in buy/sell prices, fees, and taxes.'
    },
    icon: '📊',
    tags: ['stock', 'yield', 'profit', 'calculator', 'finance', '주식', '수익률', '손익', '수수료', '세금'],
    featured: false
  },
  {
    id: 'stock-target-price',
    name: {
      ko: '주식 목표가 계산기',
      en: 'Stock Target Price Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '현재 평단가 대비 목표하는 수익률(%) 또는 수익금에 도달하기 위한 매도 목표 가격을 계산합니다.',
      en: 'Calculate the target selling price per share to achieve your desired rate of return or profit amount.'
    },
    icon: '🎯',
    tags: ['stock', 'target', 'price', 'calculator', 'finance', '주식', '목표가', '익절', '매도', '목표수익률'],
    featured: false
  },
  {
    id: 'stock-compound-calc',
    name: {
      ko: '주식 복리 계산기',
      en: 'Stock Compound Interest Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '초기 원금에 매월 적립식 투자금과 목표 연복리 수익률을 더하여 기간별 미래 자산 규모를 예측합니다.',
      en: 'Simulate your future portfolio value based on initial capital, monthly deposits, and target annual compound growth rate (CAGR).'
    },
    icon: '⏳',
    tags: ['stock', 'compound', 'interest', 'cagr', 'finance', '주식', '복리', '시뮬레이터', '적립식', '자산'],
    featured: false
  },
  {
    id: 'stock-split-buy',
    name: {
      ko: '주식 분할매수 계산기',
      en: 'Stock Split Buy Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '총 투자 예산과 시작가를 기준으로 균등, 마틴게일, 피보나치 등 분할 기법별 매수 목표가와 비중을 산출합니다.',
      en: 'Design a phased buying strategy with target buy prices and share sizes using equal, Martingale, or Fibonacci distribution.'
    },
    icon: '🍰',
    tags: ['stock', 'split-buy', 'martingale', 'fibonacci', 'finance', '주식', '분할매수', '분할', '마틴게일', '피보나치', '평단조절'],
    featured: false
  },
  {
    id: 'stock-rotation-calc',
    name: {
      ko: '주식 순환매 시뮬레이터',
      en: 'Stock Rotation Simulator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '보유 중인 종목 A를 매도한 자금으로 종목 B를 교체 매수할 때의 매수 가능 수량과 최종 평단가 변화를 계산합니다.',
      en: 'Simulate selling Stock A and rolling the cash over to Stock B to see the new share count and average price impact.'
    },
    icon: '🔄',
    tags: ['stock', 'rotation', 'swap', 'portfolio', 'finance', '주식', '순환매', '종목교체', '갈아타기', '포트폴리오'],
    featured: false
  },
  {
    id: 'domestic-stock-tax-calculator',
    name: {
      ko: '국내주식 세금 및 수수료 계산기',
      en: 'Domestic Stock Tax & Fee Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '국내 주식 매매 시 발생하는 증권거래세와 증권사 수수료를 반영하여 최종 매매 순수익을 정밀 계산합니다.',
      en: 'Calculate the exact net profit and transaction costs for South Korean stocks, factoring in brokerage fees and transaction taxes.'
    },
    icon: '💸',
    tags: ['stock', 'tax', 'fee', 'korea', 'domestic', 'finance', '주식', '세금', '수수료', '증권거래세', '국내주식', '거래세'],
    featured: false
  },
  {
    id: 'dividend-yield-calculator',
    name: {
      ko: '배당수익률 & 목표 매수가 계산기',
      en: 'Dividend Yield & Target Price Calculator'
    },
    category: 'stocks',
    categoryLabel: {
      ko: '주식',
      en: 'Stocks'
    },
    description: {
      ko: '예상 배당금과 현재 주가로 배당수익률을 산출하거나, 원하는 목표 배당수익률을 달성하기 위한 적정 매수 주가를 산출합니다.',
      en: 'Calculate dividend yield based on payouts, or find the target purchase price to achieve a desired dividend yield.'
    },
    icon: '🪙',
    tags: ['stock', 'dividend', 'yield', 'target', 'price', 'finance', '주식', '배당', '배당금', '배당수익률', '목표가', '적정주가'],
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
