const academyMeta = {
  name: '卡塞尔学院',
  englishName: 'CASSEL ACADEMY',
  code: 'CA–07 / NOCTURNE',
  status: '招生档案开放',
  heroTitle: '在寂静之上，',
  heroHighlight: '辨认真正的火种。',
  description: '卡塞尔学院是一所面向未知的高等研究机构。我们训练观察、判断与行动，让每一种不合常理的天赋，都拥有被认真对待的坐标。'
};

const archiveStats = [
  { label: '成立档案', value: '1991', unit: '年' },
  { label: '在册校区', value: '04', unit: '处' },
  { label: '安全分级', value: 'Ⅲ', unit: '级' }
];

const departments = [
  {
    id: 'field-operations',
    code: 'DEPT. 01',
    englishName: 'FIELD OPERATIONS',
    name: '执行部',
    description: '训练现场判断、路线推演与应急协同。先保证每个人平安回到灯下，再谈任务是否完成。',
    detail: '记录每一次出发前的判断、每一次返回后的复盘。执行部相信，勇气必须和撤退路线一起被写进档案。'
  },
  {
    id: 'linguistic-archive',
    code: 'DEPT. 02',
    englishName: 'LINGUISTIC ARCHIVE',
    name: '龙文研究院',
    description: '从沉默的石壁、失传的语法和无法归类的回声中，建立一套可被后来者复核的记忆。',
    detail: '研究院负责保存无法被轻易翻译的证据，并为每一种新发现建立可回溯的词源、语境与风险等级。'
  },
  {
    id: 'material-alchemy',
    code: 'DEPT. 03',
    englishName: 'MATERIAL ALCHEMY',
    name: '炼金工坊',
    description: '材料、能量与边界的实验室。每一次配比都留下记录，因为偶然从来不是免检的答案。',
    detail: '工坊将未知拆解成温度、质地和反应时间，允许失败发生，但不允许失败没有留下可供复核的痕迹。'
  }
];

const calendarItems = [
  {
    date: '09.18',
    type: 'OPEN LECTURE / A–12',
    title: '天穹观测：如何阅读一场未发生的风暴',
    description: '面向所有对异常天气与异常直觉感兴趣的旁听者。',
    status: 'OPEN',
    open: true
  },
  {
    date: '10.04',
    type: 'ADMISSION / AUTUMN',
    title: '秋季入院档案开始收集',
    description: '请准备一份你无法向别人解释、但一直记得的观察记录。',
    status: 'OPEN',
    open: true
  },
  {
    date: '10.31',
    type: 'FIELD TEST / CLOSED',
    title: '北境回声计划 · 第四阶段',
    description: '本阶段仅向已通过内部评估的研究员开放。',
    status: 'CLOSED',
    open: false
  }
];

const contactDetails = [
  { label: 'ARCHIVE MAIL', value: 'archive@cassel-academy.example' },
  { label: 'FIELD LINE', value: '+86 021 6070 1991' },
  { label: 'VISITING HOURS', value: '周一至周五 · 09:00—18:00' }
];

module.exports = {
  academyMeta,
  archiveStats,
  departments,
  calendarItems,
  contactDetails
};
