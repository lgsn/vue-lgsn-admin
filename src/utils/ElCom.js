/**
 * @Description:
 * @author Chen Jing
 * @date 7:38 下午
 * Element-ui 常用组件
 */
import Vue from 'vue'
import GIcon from '@/components/GIcon'

import {
  Button,
  Input,
  Icon,
  Message,
  Select,
  Option,
  Loading,
  Form,
  FormItem,
  MessageBox
} from 'element-ui'

Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Loading)
Vue.component(GIcon.name, GIcon)
Vue.prototype.$ELEMENT = { size: 'small' }
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
