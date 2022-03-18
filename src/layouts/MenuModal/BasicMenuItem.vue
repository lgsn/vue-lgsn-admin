<!--菜单-->
<template>

    <div v-if="!menu.hideMenu">
        <!--一级菜单-->
        <MenuItem v-if="hasChildrenMenu(menu.children)" :key="menu.name" :index="menu.name">
            <GIcon class="menu-icon anticon" :icon="menu.meta.icon" />
            <span>{{ menu.meta.title }}</span>
        </MenuItem>

        <!--包含子菜单-->
        <Submenu v-else :key="menu.name" :index="menu.name">

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
export default {
    name: "BasicMenuItem",
    components: {
        Submenu,
        MenuItem,
        BasicMenuItem
    },
    props: {
        menu: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        hasChildrenMenu(menus) {
            return !menus.length || menus.filter(v => v.hideMenu).length === menus.length
        }
    }
}
</script>

<style scoped>

</style>
