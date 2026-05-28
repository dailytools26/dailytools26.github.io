export interface Tool {
  /** 
   * URL에 사용될 고유 슬러그 (예: 'string-length') 
   * 영문 소문자와 하이픈만 사용 권장
   */
  id: string;
  
  /** 
   * 도구의 표시 이름
   */
  name: {
    ko: string;
    en: string;
  };
  
  /**
   * 카테고리 슬러그 (예: 'text', 'dev', 'math')
   */
  category: string;
  
  /**
   * 화면에 표시될 카테고리 이름
   */
  categoryLabel: {
    ko: string;
    en: string;
  };
  
  /**
   * 도구에 대한 짧은 설명 (리스트에 표시됨)
   */
  description: {
    ko: string;
    en: string;
  };
  
  /**
   * 아이콘 (이모지 또는 SVG 문자열)
   */
  icon: string;
  
  /**
   * 검색에 사용될 태그들
   */
  tags: string[];
  
  /**
   * 메인 화면 상단에 강조 표시할지 여부
   */
  featured?: boolean;
}
