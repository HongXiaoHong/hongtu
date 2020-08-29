<template>
  <div class="block">
    <span class="demonstration">设置默认时间</span>
    <el-date-picker
      v-model="defaultDate"
      type="datetime"
      value-format="yyyy-MM-dd hh:mm:ss"
      format="yyyy-MM-dd hh:mm:ss"
      placeholder="选择日期时间"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "GenerateDate",
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        "format": "yyyy-MM-dd",
        defaultDate: new Date()
      }
    }
  }
</script>

<style scoped>

</style>
