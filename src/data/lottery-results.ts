import icon7xc from '@/assets/images/lottery/icon-7xc.png'
import iconDlt from '@/assets/images/lottery/icon_dlt.png'
import iconPl3 from '@/assets/images/lottery/icon-pl3.png'
import iconPl5 from '@/assets/images/lottery/icon-pl5.png'

export type BallVariant = 'blue' | 'gold' | 'purple' | 'orange'

export interface LotteryBall {
  value: string
  variant: BallVariant
}

export interface LotteryResult {
  id: string
  name: string
  icon: string
  issue: string
  date: string
  weekday: string
  balls: LotteryBall[]
  jackpot?: string
}

export const LOTTERY_ACTIONS = ['开奖公告', '历史开奖', '奖级表'] as const

export const MOCK_LOTTERY_RESULTS: LotteryResult[] = [
  {
    id: 'dlt',
    name: '超级大乐透',
    icon: iconDlt,
    issue: '第26062期',
    date: '06月06日',
    weekday: '周六',
    balls: [
      { value: '07', variant: 'blue' },
      { value: '15', variant: 'blue' },
      { value: '20', variant: 'blue' },
      { value: '24', variant: 'blue' },
      { value: '29', variant: 'blue' },
      { value: '04', variant: 'gold' },
      { value: '10', variant: 'gold' },
    ],
    jackpot: '7.38亿元',
  },
  {
    id: '7xc',
    name: '7星彩',
    icon: icon7xc,
    issue: '第26063期',
    date: '06月05日',
    weekday: '周五',
    balls: [
      { value: '5', variant: 'purple' },
      { value: '0', variant: 'purple' },
      { value: '7', variant: 'purple' },
      { value: '6', variant: 'purple' },
      { value: '6', variant: 'purple' },
      { value: '6', variant: 'purple' },
      { value: '5', variant: 'orange' },
    ],
    jackpot: '3.02亿元',
  },
  {
    id: 'pl3',
    name: '排列3',
    icon: iconPl3,
    issue: '第26147期',
    date: '06月06日',
    weekday: '周六',
    balls: [
      { value: '5', variant: 'purple' },
      { value: '9', variant: 'purple' },
      { value: '0', variant: 'purple' },
    ],
  },
  {
    id: 'pl5',
    name: '排列5',
    icon: iconPl5,
    issue: '第26147期',
    date: '06月06日',
    weekday: '周六',
    balls: [
      { value: '5', variant: 'purple' },
      { value: '9', variant: 'purple' },
      { value: '0', variant: 'purple' },
      { value: '5', variant: 'purple' },
      { value: '3', variant: 'purple' },
    ],
    jackpot: '1,814万元',
  },
]
