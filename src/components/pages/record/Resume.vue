<template>
  <div class="block" id="resume">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp">
        <el-card>
          <h4>{{activity.content}}</h4>
          <p>{{activity.whoAndWhen}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  export default {
    name: "Resume",
    data() {
      return {
        activities: [{
          content: '*',
          whoAndWhen: 'Hong 提交于 2020/09/13 21:51',
          timestamp: '2018/06/01',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '*',
          whoAndWhen: 'Hong 提交于 2020/09/13 21:52',
          timestamp: '2018/09/17',
          color: '#0bbd87'
        }, {
          content: '*',
          whoAndWhen: 'Hong 提交于 2020/09/13 21:53',
          timestamp: '2019/09/27',
          size: 'large',
          type: 'warning',
          icon: 'el-icon-ice-cream-round'
        }, {
          content: '*',
          whoAndWhen: 'Hong 提交于 2020/09/13 21:54',
          timestamp: '2019/12/03',
          type: 'success',
          icon: 'el-icon-ice-cream-square'
        }]
      };
    }
  }
</script>

<style scoped>
  #resume {
    text-align: left;
  }
</style>
