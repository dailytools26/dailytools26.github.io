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
