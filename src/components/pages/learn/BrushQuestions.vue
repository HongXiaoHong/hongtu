<template>
  <div class="block" id="brush">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(question, index) in questions" :title="question.title" :name="index" :key="index">
        <div v-for="detail in question.content.split('|')">{{detail}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "BrushQuestions",
    data() {
      return {
        activeName: '1',
        questions: []
      };
    },
    mounted() {
      let _this = this
      axios.post("/api/question/query/today"
      ).then(function (res) {
        console.log(res);
        _this.questions = res.data;
        console.log(_this.questions)
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

<style scoped>
  #brush{
    text-align: left;
  }
</style>
