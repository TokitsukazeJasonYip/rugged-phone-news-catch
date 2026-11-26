export const CATEGORIES = [
  {
    "key": "ai-models",
    "label": "新品",
    "section": "新品与更新",
    "guide": "三防手机正式发布、上市、预售，含地区、价格及供货信息。",
    "tagColor": "indigo"
  },
  {
    "key": "ai-products",
    "label": "系统与配件",
    "section": "新品与更新",
    "guide": "系统升级、固件、安全补丁、通讯和配件兼容性。",
    "tagColor": "turquoise"
  },
  {
    "key": "industry",
    "label": "行业",
    "section": "行业动态",
    "guide": "渠道、认证、召回、供应链、展会及品牌经营。",
    "tagColor": "orange"
  },
  {
    "key": "paper",
    "label": "实测",
    "section": "独立评测",
    "guide": "基于实物的防护、续航、通信、显示和热成像测试。",
    "tagColor": "violet"
  },
  {
    "key": "tip",
    "label": "使用指南",
    "section": "指南与观点",
    "guide": "可以复现的选购、维修及工作场景指南。",
    "tagColor": "green",
    "commentary": true
  },
  {
    "key": "opinion",
    "label": "观点",
    "section": "指南与观点",
    "guide": "有关三防手机市场和产品体验的评论。",
    "tagColor": "purple",
    "commentary": true
  }
] as const satisfies ReadonlyArray<{ key: string; tagColor: string; label: string; feedLabel?: string; section: string; guide: string; commentary?: true }>;
export const RELEASE: { category: string; tag: string; unit: string } | null = {category:"ai-models",tag:"新品发布",unit:"款新品"};
export const PLAIN_TERMS: readonly string[] = ["ip68","ip69k","mil-std-810h","ota","android","5g","nfc"];
export const ITEM_TYPES = ["model_release","product_launch","tool_or_prompt","research_paper","industry_event","opinion_analysis","tutorial_explainer"] as const;
export const CATEGORY_TAGS = ["新品发布","产品更新","实测","教程/实践","行业动态","政策/监管","观点","其他"] as const;
export const TOPIC_TAGS = ["续航","热成像","防护认证","系统更新","卫星通信","对讲","维修配件"] as const;
export const ENTITY_TAGS = ["Ulefone","OUKITEL","DOOGEE","AGM Mobile","Blackview","Unihertz","RugOne","8849"] as const;
export const TAG_SYNONYMS: Readonly<Record<string,string>> = {"发布":"新品发布","评测":"实测","固件":"系统更新"};
export const TAG_DISPLAY: Readonly<Record<string,string|null>> = {};
export const ENTITIES: Record<string, {name:string;displayTag:string|null;aliases:string[];orgNames?:string[];otherNames?:string[]}> = {
  "8849": {
    "name": "8849",
    "displayTag": "8849",
    "aliases": [
      "8849"
    ]
  },
  "ulefone": {
    "name": "Ulefone",
    "displayTag": "Ulefone",
    "aliases": [
      "Ulefone"
    ]
  },
  "oukitel": {
    "name": "OUKITEL",
    "displayTag": "OUKITEL",
    "aliases": [
      "OUKITEL"
    ]
  },
  "doogee": {
    "name": "DOOGEE",
    "displayTag": "DOOGEE",
    "aliases": [
      "DOOGEE"
    ]
  },
  "agm": {
    "name": "AGM Mobile",
    "displayTag": "AGM Mobile",
    "aliases": [
      "AGM Mobile"
    ]
  },
  "blackview": {
    "name": "Blackview",
    "displayTag": "Blackview",
    "aliases": [
      "Blackview"
    ]
  },
  "unihertz": {
    "name": "Unihertz",
    "displayTag": "Unihertz",
    "aliases": [
      "Unihertz"
    ]
  },
  "rugone": {
    "name": "RugOne",
    "displayTag": "RugOne",
    "aliases": [
      "RugOne"
    ]
  }
};
export const IDENTITY_LEXICON: ReadonlyArray<{id:string;name:string;patterns:RegExp[]}> = Object.entries(ENTITIES).map(([id,e])=>({id,name:e.name,patterns:[new RegExp("\\b"+(id==="agm"?"AGM(?: Mobile)?":e.name)+"\\b","i")]}));
export const PUBLISHER_DOMAINS: ReadonlyArray<{entityId:string;domains:readonly string[]}> = [
  {
    "entityId": "ulefone",
    "domains": [
      "ulefone.com"
    ]
  },
  {
    "entityId": "oukitel",
    "domains": [
      "oukitel.com"
    ]
  },
  {
    "entityId": "doogee",
    "domains": [
      "doogee.com"
    ]
  },
  {
    "entityId": "agm",
    "domains": [
      "agmmobile.com"
    ]
  },
  {
    "entityId": "blackview",
    "domains": [
      "blackview.hk"
    ]
  },
  {
    "entityId": "unihertz",
    "domains": [
      "unihertz.com"
    ]
  },
  {
    "entityId": "rugone",
    "domains": [
      "rugone.com"
    ]
  },
  {
    "entityId": "8849",
    "domains": [
      "8849tech.com"
    ]
  }
];
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{entityId:string;pattern:RegExp}> = [];
