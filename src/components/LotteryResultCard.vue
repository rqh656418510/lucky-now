<template>
  <view class="lottery-card">
    <view class="lottery-card__head">
      <view class="lottery-card__title-row">
        <image class="lottery-card__icon" :src="item.icon" mode="aspectFit" />
        <text class="lottery-card__name">{{ item.name }}</text>
        <text class="lottery-card__issue">{{ item.issue }}</text>
        <text class="lottery-card__date">{{ item.date }} {{ item.weekday }}</text>
      </view>
    </view>

    <view class="lottery-card__balls">
      <view
        v-for="(ball, index) in item.balls"
        :key="`${item.id}-${index}`"
        class="lottery-card__ball"
        :class="`lottery-card__ball--${ball.variant}`"
      >
        <text class="lottery-card__ball-text">{{ ball.value }}</text>
      </view>
    </view>

    <text v-if="item.jackpot" class="lottery-card__jackpot">
      本期开奖后奖池: {{ item.jackpot }}
    </text>

    <view class="lottery-card__actions">
      <text v-for="action in actions" :key="action" class="lottery-card__action">
        {{ action }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { LotteryResult } from '@/data/lottery-results'
import { LOTTERY_ACTIONS } from '@/data/lottery-results'

defineProps<{
  item: LotteryResult
}>()

const actions = LOTTERY_ACTIONS
</script>
