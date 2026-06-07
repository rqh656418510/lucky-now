<template>
  <view class="lottery-page">
    <view class="lottery-page__header">
      <text class="lottery-page__title">体彩开奖</text>
    </view>

    <scroll-view scroll-y class="lottery-page__list" :show-scrollbar="false">
      <LotteryResultCard v-for="item in lotteryResults" :key="item.id" :item="item" />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import LotteryResultCard from '@/components/LotteryResultCard.vue'
import { MOCK_LOTTERY_RESULTS } from '@/data/lottery-results'
import './index.scss'

const lotteryResults = MOCK_LOTTERY_RESULTS
</script>
