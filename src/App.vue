<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside style="background-color: #7db0e3;"
                v-bind:style="{ width: widthAside + 'px' }">
        <el-radio-group v-model="isCollapse" @click="handleOpen">
          <el-radio-button :label="false" @click.native="handleOpen">展开</el-radio-button>
          <el-radio-button :label="true" @click.native="handleClose">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :default-openeds="['3']" :default-active="this.$router.path" router
                 :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-chicken"></i>
              <span slot="title">工具</span>
            </template>
            <el-menu-item-group>
              <span slot="title">生成系列</span>
              <el-menu-item index="/generate/date">日期生成</el-menu-item>
              <el-menu-item index="/generate/person">个人信息生成</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="文件">
              <el-menu-item index="/search/file">获取随机图片</el-menu-item>
              <el-menu-item index="/upload/file">文件上传</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">加解密</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-burger"></i>
              <span slot="title">记录生活记录美</span>
            </template>
            <el-menu-item-group>
              <span slot="title">生平</span>
              <el-menu-item index="/record/resume">简历</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-ice-cream"></i>
              <span slot="title">学习</span>
            </template>
            <el-menu-item-group>
              <span slot="title">题目</span>
              <el-menu-item index="/learn/brush/questions">刷题</el-menu-item>
              <el-menu-item index="/add/question">题目录入</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isCollapse: true,
        widthAside: 65
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log("handleOpen")
        this.widthAside = 200
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log("handleClose")
        this.widthAside = 65
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  .el-container {
    border: 0 !important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #74afea;
    /*margin-top: 60px;*/
  }

  .el-header {
    background-color: #669ee8;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  /*  .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }*/
</style>
