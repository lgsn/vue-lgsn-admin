<!--菜单-->
<template>

    <div v-if="!menu.hideMenu">
        <!--一级菜单-->
        <BasicMenuLink v-if="hasChildrenMenu(menu.children)" :to="menu.path">
            <MenuItem :key="menu.name" :index="menu.name">
                <GIcon class="menu-icon anticon" :icon="menu.meta.icon" />
                <span>{{ menu.meta.title }}</span>
            </MenuItem>
        </BasicMenuLink>

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
    methods: {
        hasChildrenMenu(menus) {
            return !menus.length || menus.filter(v => v.hideMenu).length === menus.length
        }
    }
}
</script>

<style scoped>

</style>
