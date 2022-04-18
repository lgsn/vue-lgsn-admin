<template>
  <GTableData
    :page-size.sync="limit"
    :current-page.sync="page"
    :total="totalPage"
    :table-column="tableColumn"
    :table-loading="tableLoad"
    :table-data="tableData"
    @changePage="getDataList"
    @selection-change="selectionChangeHandle"
  >
    <template slot="filter">
      <el-form
        :inline="true"
        :model="dataForm"
        @keyup.enter.native="getDataList(1)"
      >
        <el-form-item>
          <el-input
            v-model="dataForm.userName"
            placeholder="输入用户名搜索"
            clearable
          />
        </el-form-item>

        <el-form-item>
          <el-button
            :loading="tableLoad"
            @click="getDataList(1)"
            icon="el-icon-search"
            type="primary"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </template>

    <!--状态-->
    <template v-slot:status="{ row }">
      <el-tag size="small" :type="row.status === 0 ? 'danger' : ''">
        {{ row.status === 0 ? "禁用" : "正常" }}
      </el-tag>
    </template>

    <!--操作-->
    <template v-slot:operation>
      <GBtnIcon icon="icon-bianji1" />
      <GBtnIcon icon="icon-shanchu1" />
    </template>
  </GTableData>
</template>

<script>
import GTableData from "@/components/GTableData";
import GBtnIcon from "@/components/GBtnIcon";
import { Tag } from "element-ui";
export default {
  name: "index",
  components: {
    GTableData,
    GBtnIcon,
    "el-tag": Tag,
  },
  data() {
    return {
      totalPage: 100,
      page: 1,
      limit: 10,
      dataForm: {
        userName: "",
      },
      tableColumn: [
        { type: "selection", width: 50 },
        { prop: "userId", label: "ID", width: 80 },
        { prop: "username", label: "用户名" },
        { prop: "email", label: "邮箱" },
        { prop: "mobile", label: "手机号" },
        { prop: "status", label: "状态", slotTemplate: "status" },
        { prop: "createTime", label: "创建时间", width: 180 },
        {
          prop: "operation",
          label: "操作",
          width: 150,
          slotTemplate: "operation",
          fixed: "right",
        },
      ],
      tableData: [],
      tableLoad: false,
      dataListSelections: [],
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    // 获取用户列表
    getDataList() {
      this.tableLoad = true;
      this.setTableInfo({
        list: [
          {
            userId: 1,
            username: "百万",
            email: "18888888888@qq.com",
            mobile: 18888888888,
            state: 0,
            createTime: "2022/03/06",
          },
          {
            userId: 2,
            username: "张三",
            email: "16666666666@qq.com",
            mobile: 16666666666,
            state: 1,
            createTime: "2022/03/06",
          },
          {
            userId: 3,
            username: "李四",
            email: "12222222222@qq.com",
            mobile: 12222222222,
            state: 1,
            createTime: "2022/03/06",
          },
        ],
        totalCount: 100,
      });
    },
    // 设置表格数据
    setTableInfo(data) {
      this.tableLoad = false;
      this.totalPage = data.totalCount;
      this.tableData = data.list;
    },
    // 选择表格中的某项 / 全选
    selectionChangeHandle(val) {
      this.dataListSelections = val;
    },
  },
};
</script>

<style lang="scss">
</style>