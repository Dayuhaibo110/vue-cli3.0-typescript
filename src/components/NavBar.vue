<template>
  <div class="navBar">
    <el-submenu v-for='(parent, parentKey) in data' :key='parentKey' :index='parent.index' v-if='parent.children'>
      <template slot="title">
        <i :class="parent.icon"></i>
        <span> {{parent.title}}</span>
      </template>
      <navBar :data='parent.children'/>
    </el-submenu>

    <el-menu-item v-for='(last, lastKey) in data' :key='lastKey' :index='last.index' v-if='!last.children'>
      <i :class="last.icon" v-if='last.icon'></i>
      <span>{{last.title}}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props:{
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
})
export default class NavBar extends Vue {
}
</script>

<style scoped lang="scss">

</style>
