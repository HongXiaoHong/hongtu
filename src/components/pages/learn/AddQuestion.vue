<template>
  <div class="block">
    <el-form ref="form" :model="question" label-width="80px">
      <el-form-item label="题目名称">
        <el-input v-model="question.title"></el-input>
      </el-form-item>
      <el-form-item label="题目内容">
        <el-input type="textarea" v-model="question.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "AddQuestion",
    data() {
      return {
        question: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        axios.post("/api/question/add",
          this.question
        ).then(function (res) {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>

</style>
