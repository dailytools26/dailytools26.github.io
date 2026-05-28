export const languages = {
  ko: '한국어',
  en: 'English',
};

export const defaultLang = 'ko';

export const ui = {
  ko: {
    'nav.home': '홈',
    'nav.modules': '도구',
    'nav.github': 'GitHub',
    'hero.title': '웹 개발자를 위한\n필수 도구 모음',
    'hero.subtitle': '일상적인 개발 작업을 더 빠르고 편하게 만들어주는 도구들을 검색해보세요.',
    'search.placeholder': '도구 검색...',
    'search.shortcut': '⌘K',
    'category.all': '전체',
    'tool.downloads': '다운로드', // 예시
    'tool.goToTool': '도구 사용하기',
    'breadcrumb.home': '홈',
  },
  en: {
    'nav.home': 'Home',
    'nav.modules': 'Modules',
    'nav.github': 'GitHub',
    'hero.title': 'Essential Tools for\nWeb Developers',
    'hero.subtitle': 'Discover a collection of tools to supercharge your daily development tasks.',
    'search.placeholder': 'Search a tool...',
    'search.shortcut': '⌘K',
    'category.all': 'All',
    'tool.downloads': 'Downloads',
    'tool.goToTool': 'Go to Tool',
    'breadcrumb.home': 'Home',
  },
} as const;
