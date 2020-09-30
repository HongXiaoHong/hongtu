import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/pages/Test'
import GenerateDate from '../components/pages/GenerateDate'
import SearchFile from '../components/pages/File/SearchFile'
import UploadFile from '../components/pages/File/UploadFile'
import Resume from '../components/pages/record/Resume'
import BrushQuestions from '../components/pages/learn/BrushQuestions'
import AddQuestion from '../components/pages/learn/AddQuestion'
import HelloCharts from '../components/pages/echart/HelloCharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/test',
      name: 'Test',
      component: Test
    },{
      path: '/generate/date',
      name: 'GenerateDate',
      component: GenerateDate
    },{
      path: '/search/file',
      name: 'SearchFile',
      component: SearchFile
    },{
      path: '/upload/file',
      name: 'UploadFile',
      component: UploadFile
    },{
      path: '/record/resume',
      name: 'Resume',
      component: Resume
    },{
      path: '/learn/brush/questions',
      name: 'BrushQuestions',
      component: BrushQuestions
    },{
      path: '/add/question',
      name: 'AddQuestion',
      component: AddQuestion
    },{
      path: '/hello/charts',
      name: 'HelloCharts',
      component: HelloCharts
    }
  ]
})
