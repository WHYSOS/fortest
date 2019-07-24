<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="15%" style="background-color: rgb(238, 241, 246)">
        <el-menu v-for="(item,index) in menuData" :key="index">
          <el-submenu index="index">
            <template slot="title">
              <i class="item.icon"></i>{{item.topTile}}
            </template>
            <el-menu-item-group >
              <el-menu-item
                v-for="childItem in item.child"
                :key="childItem.path"
                @click = "goto(childItem.path)"
              >
                {{childItem.title}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      menuData: [
        {
          topTile: '顶级菜单1',
          icon: 'el-icon-message',
          child: [
            {
              title: '路由1',
              path: '/home'
            },
            {
              title: '路由2',
              path: '/login'
            }
          ]
        },
        {
          topTile: '顶级菜单2',
          icon: 'el-icon-message',
          child: [
            {
              title: '路由1',
              path: '/home'
            }
          ]
        }
      ]
    }
  },
  methods: {
    goto (path) {
      console.log(path)
      this.$router.push(path)
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
