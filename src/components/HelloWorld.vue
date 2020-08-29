<template>
  <div class="hello">
    <pre>

 .----------------.  .----------------.  .-----------------. .----------------.   .----------------.  .----------------.
| .--------------. || .--------------. || .--------------. || .--------------. | | .--------------. || .--------------. |
| |  ____  ____  | || |     ____     | || | ____  _____  | || |    ______    | | | |  _________   | || | _____  _____ | |
| | |_   ||   _| | || |   .'    `.   | || ||_   \|_   _| | || |  .' ___  |   | | | | |  _   _  |  | || ||_   _||_   _|| |
| |   | |__| |   | || |  /  .--.  \  | || |  |   \ | |   | || | / .'   \_|   | | | | |_/ | | \_|  | || |  | |    | |  | |
| |   |  __  |   | || |  | |    | |  | || |  | |\ \| |   | || | | |    ____  | | | |     | |      | || |  | '    ' |  | |
| |  _| |  | |_  | || |  \  `--'  /  | || | _| |_\   |_  | || | \ `.___]  _| | | | |    _| |_     | || |   \ `--' /   | |
| | |____||____| | || |   `.____.'   | || ||_____|\____| | || |  `._____.'   | | | |   |_____|    | || |    `.__.'    | |
| |              | || |              | || |              | || |              | | | |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' | | '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'   '----------------'  '----------------'

    </pre>
    <el-carousel :interval="4000" type="card" height="750px">
      <el-carousel-item v-for="item in 5" :key="item">
        <div class="block">
          <el-image :src="imgs[item]"></el-image>
        </div>
      </el-carousel-item>
    </el-carousel>


  </div>
</template>

<script>
  import logo from '../assets/logo.png'
  import '../css/test.css'

  export default {
    name: 'HelloWorld',
    data() {
      let imgs = []
      imgs.push(0)
      for (let i = 0; i < 5; i++) {
        imgs.push(require('../../static/img/' + i + '.png'))
      }
      return {
        src: logo,
        imgs: imgs,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
