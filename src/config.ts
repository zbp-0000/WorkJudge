export type dataType = {
  key: string
  label: string
  type: 'input' | 'select' | 'switch'
  placeholder: string
  value: string | boolean | null
  options?: Array<{ label: string; value: string | number }>
}

const hourData = [
  {
    label: '1小时',
    value: 1
  },
  {
    label: '2小时',
    value: 2
  },
  {
    label: '3小时',
    value: 3
  },
  {
    label: '4小时',
    value: 4
  },
  {
    label: '5小时',
    value: 5
  },
  {
    label: '6小时',
    value: 6
  },
  {
    label: '7小时',
    value: 7
  },
  {
    label: '8小时',
    value: 8
  },
  {
    label: '9小时',
    value: 9
  },
  {
    label: '10小时',
    value: 10
  },
  {
    label: '11小时',
    value: 11
  },
  {
    label: '12小时',
    value: 12
  },
  {
    label: '13小时',
    value: 13
  },
  {
    label: '14小时',
    value: 14
  },
  {
    label: '15小时',
    value: 15
  },
  {
    label: '16小时',
    value: 16
  },
  {
    label: '17小时',
    value: 17
  },
  {
    label: '18小时',
    value: 18
  },
  {
    label: '19小时',
    value: 19
  },
  {
    label: '20小时',
    value: 20
  },
  {
    label: '21小时',
    value: 21
  },
  {
    label: '22小时',
    value: 22
  },
  {
    label: '23小时',
    value: 23
  },
  {
    label: '24小时',
    value: 24
  }
]

export const data: dataType[] = [
  {
    key: 'dailyWage',
    label: '平均日薪酬',
    type: 'input',
    placeholder: '平均日薪为元（你又不是某爽）',
    value: null
  },
  {
    key: 'workingHours',
    label: '工作时长',
    type: 'select',
    placeholder: '工作时长',
    value: null,
    options: hourData
  },
  {
    key: 'commuting',
    label: '通勤时长',
    type: 'select',
    placeholder: '通勤时长',
    value: null,
    options: hourData
  },
  {
    key: 'slackOff',
    label: '摸鱼时长',
    type: 'select',
    placeholder: '不干活+吃饭+午休',
    value: null,
    options: hourData
  },
  {
    key: 'education',
    label: '学历系数',
    type: 'select',
    placeholder: '学历系数',
    value: null,
    options: [
      {
        label: '专科及以下',
        value: 0.8
      },
      {
        label: '普通本科',
        value: 1.0
      },
      {
        label: '高级本科',
        value: 1.2
      },
      {
        label: '普通硕士',
        value: 1.4
      },
      {
        label: '高级硕士',
        value: 1.6
      },
      {
        label: '普通博士',
        value: 1.8
      },
      {
        label: '高级博士',
        value: 2.0
      }
    ]
  },
  {
    key: 'surroundings',
    label: '工作环境系数',
    type: 'select',
    placeholder: '工作环境系数',
    value: null,
    options: [
      {
        label: '偏僻地区',
        value: 0.8
      },
      {
        label: '工厂户外',
        value: 0.9
      },
      {
        label: '普通',
        value: 1.0
      },
      {
        label: '体制内',
        value: 1.1
      }
    ]
  },
  {
    key: 'isomerism',
    label: '异性环境系数',
    type: 'select',
    placeholder: '异性环境系数',
    value: null,
    options: [
      {
        label: '没有',
        value: 0.9
      },
      {
        label: '不多不少',
        value: 1.0
      },
      {
        label: '很多',
        value: 1.1
      }
    ]
  },
  {
    key: 'simulRelation',
    label: '同事环境系数',
    type: 'select',
    placeholder: '同事环境系数',
    value: null,
    options: [
      {
        label: 'SB很多',
        value: 0.95
      },
      {
        label: '普通很多',
        value: 1.0
      },
      {
        label: '优秀很多',
        value: 1.05
      }
    ]
  },
  {
    key: 'certificate',
    label: '职业资格系数',
    type: 'select',
    placeholder: '职业资格系数',
    value: null,
    options: [
      {
        label: '无要求、二级',
        value: 1
      },
      {
        label: '建造造假监理',
        value: 1.05
      },
      {
        label: '建筑岩土结构',
        value: 1.1
      },
      {
        label: '主任医师、教授',
        value: 1.15
      }
    ]
  },
  {
    key: 'beOnDuty',
    label: '是否8:30前上班',
    type: 'switch',
    placeholder: '是否8:30前上班',
    value: false
  }
]
