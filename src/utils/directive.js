
import Vue from 'vue'
import store from '@/store'

/**
 * 复制
 */

const copyNode = value => {
    if (!value) {
      return `<span></span>`;
    }
    return `
      <div class="g-copy" id="GCopy">
        <span title=${value} class='overflow-text'>${value}</span>
        <svg class="icon" aria-hidden="true">
          <title>单击复制</title>
          <use xlink:href="#icon-fuzhiyemian" />
        </svg>
      </div>
    `
}
const copyEvents = (binding) => {
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.setAttribute("value", binding.value);
  input.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
  }
  Vue.prototype.$message.success('复制成功')
  document.body.removeChild(input);
}
Vue.directive('copy', {
  bind: function (el, binding) {
    el.innerHTML = copyNode(el.innerHTML || binding.value)
    el.onclick = () => copyEvents(binding)
  },
  unbind: function (el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
})

Vue.prototype.$copy = function (value) {
  copyEvents({value: value})
}

/**
 * 权限按钮
 */
Vue.directive('rights', {
  inserted: function (el, binding) {
    if (!store.getters.directivePer.get(binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
})
