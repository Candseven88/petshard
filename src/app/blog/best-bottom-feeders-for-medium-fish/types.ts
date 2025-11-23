// 类型定义文件

export interface BottomFeeder {
  id: number;
  name: string;
  emoji?: string;
  imageUrl: string;
  size: string;
  compatibility: number; // 1-5 stars
  specialSkill: string;
  description: string;
  tankRequirement?: string;
  whyItWorks: string;
}

export interface Product {
  name: string;
  affiliateLink: string;
  features: string[];
  description: string;
  imageUrl?: string;
}

export interface ActionPlanItem {
  priority: number;
  title: string;
  description: string;
}

export interface ProTip {
  icon: string;
  text: string;
}
