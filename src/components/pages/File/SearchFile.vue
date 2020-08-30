<template>
  <div>
    <!--    <el-button type="primary" @click="getRandomImage">获取随机图片</el-button>
        <el-image src="/api/image/random/memory"></el-image>-->
    <el-carousel :interval="4000" type="card" height="800px" @change="trans">
      <el-carousel-item v-for="(url, index) in urls" :key="url + index" ref="randomImage">
        <h3 class="medium">
          <el-image :src="url"></el-image>
          <!--        <img src="/api/image/random/memory"/>-->
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "SearchFile",
    data() {
      let urls = [];
      let index = 0;
      for (; index < 6; index++) {
        urls.push("/api/image/random/memory/" + index);
      }
      console.log(urls)
      return {
        imageUrl: "/api/image/random/memory/" + new Date().getTime(),
        urls: urls
      }
    },
    mounted() {
      console.log("获取随机图片")
    },
    methods: {
      getRandomImage() {
        axios.get("/api/image/random/memory"
        ).then(function (res) {
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        });
      },
      trans(val) {
        console.log(val)
        console.log((val+1)%6)
        // console.log(this.$refs.randomImage)
        // console.log(this.$refs.randomImage[val].$children[0].src)

        this.$refs.randomImage[(val+1)%5].$children[0].src = "/api/image/random/memory/" + new Date().getTime();
      }
    }
  }


</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
