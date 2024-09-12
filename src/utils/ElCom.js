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
  MessageBox,
  Table,
  TableColumn,
  Pagination
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
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
