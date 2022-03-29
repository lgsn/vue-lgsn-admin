<!--菜单-->
<template>

    <div v-if="!menu.hideMenu && !menu.onAccess">

        <!--一级菜单-->
        <BasicMenuLink v-if="hasChildrenMenu(menu.children, menu) && !menu.showRoot" :to="onlyOneChild.path">
            <MenuItem :key="onlyOneChild.name" :index="onlyOneChild.name">
                <GIcon class="menu-icon anticon" :icon="onlyOneChild.meta.icon" />
                <span>{{ onlyOneChild.meta.title }}</span>
            </MenuItem>
        </BasicMenuLink>

        <!--包含子菜单-->
        <Submenu v-else-if="hasChildrenAccess(menu.children)" :key="menu.name" :index="menu.name">

            <template slot="title">
                <GIcon class="menu-icon anticon" :icon="menu.meta.icon" />
                <span>{{ menu.meta.title }}</span>
            </template>

            <BasicMenuItem v-for="menuChildren in menu.children" :key="menuChildren.name" :menu="menuChildren" />

        </Submenu>

    </div>
</template>

<script>
import { Submenu, MenuItem } from 'element-ui'
import BasicMenuItem from './BasicMenuItem'
import BasicMenuLink from './BasicMenuLink'
export default {
    name: "BasicMenuItem",
    components: {
        Submenu,
        MenuItem,
        BasicMenuItem,
        BasicMenuLink
    },
    props: {
        menu: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            onlyOneChild: null
        }
    },
    methods: {
        hasChildrenMenu(menus, parent) {
            this.onlyOneChild = menus.length === 1 ? menus[0] : parent
            return !menus.length || menus.length === 1 || menus.filter(v => v.hideMenu || v.onAccess).length === menus.length
        },
        hasChildrenAccess(children) {
            return children.filter(v => !v.onAccess).length
        }
    }
}
</script>

<style scoped>

</style>
