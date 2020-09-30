<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside style="background-color: rgba(255,255,255,0.62);"
                v-bind:style="{ width: widthAside + 'px' }">
        <!--        <el-radio-group v-model="isCollapse" @click="handleOpen">
                  <el-radio-button :label="false" @click.native="handleOpen"
                  >展开
                  </el-radio-button>
                  <el-radio-button :label="true" @click.native="handleClose">收起</el-radio-button>
                </el-radio-group>-->
        <!--        <el-button icon="el-icon-my-statistic" circle></el-button>-->
        <!--        <i class="el-icon-my-statistic" @click="turnOnOrOff"></i>-->
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <!--          <p>这是一段内容这是一段内容确定删除吗？</p>-->
          <div>
            <el-form :label-position="left" label-width="80px" :model="user">
              <el-form-item label="名称">
                <el-input v-model="user.name" disabled></el-input>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input v-model="user.age" disabled></el-input>
              </el-form-item>
            </el-form>
          </div>
          <!--          <div style="text-align: right; margin: 0">
                      <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                      <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
                    </div>-->
          <!--          <el-button slot="reference">click 激活</el-button>-->
          <el-avatar slot="reference" src="../static/img/icon/Wizard.ico"></el-avatar>
        </el-popover>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :default-active="this.$router.path" router
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
            <el-menu-item-group>
              <span slot="title">可视化</span>
              <el-menu-item index="/hello/charts">你好图表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item>
            <i :class="expand" @click="turnOnOrOff"></i>
          </el-menu-item>
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
        widthAside: 70,
        expand: 'el-icon-d-arrow-right',
        user: {
          name: 'hong',
          age: '25'
        }
      }
    },
    methods: {
      turnOnOrOff() {
        this.isCollapse = !this.isCollapse
        this.widthAside = this.isCollapse ? 70 : 200
        this.expand = this.isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #74afea;
    /*margin-top: 60px;*/
  }

  .el-icon-my-statistic {
    background: url('../static/img/icon/Wizard.ico') center no-repeat;
  }

  .el-icon-my-statistic:before {
    content: "\8d3a";
    font-size: 50px;
    visibility: hidden;
  }

  .el-icon-my-statistic:hover {
    cursor: pointer;
  }
</style>
