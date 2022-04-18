<!--常用页面-->
<template>
  <div class="g-page-card global-view-card">
    <!--筛选区域-->
    <div class="global-filter-card">
      <slot name="filter" />
    </div>

    <!--表格展示区域-->
    <div class="global-table-content">
      <el-table
        border
        v-loading="tableLoading"
        :data="tableData"
        :row-key="rowKey"
        :expand-row-keys="expandRowKey"
        @expand-change="
          (row, expandedRows) => {
            $emit('expand-change', row, expandedRows);
          }
        "
        @selection-change="(val) => $emit('selection-change', val)"
      >
        <template v-for="(item, index) in tableColumn">
          <el-table-column
            v-if="item.slotTemplate"
            :key="index"
            :type="item.type"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :fixed="item.fixed"
            :align="item.item"
            :class-name="
              item.slotTemplate === 'operation' ? 'table-cell-operation' : ''
            "
          >
            <template slot-scope="{ row }">
              <slot
                v-if="item.slotTemplate"
                :name="item.slotTemplate"
                v-bind:row="row"
              />
            </template>
          </el-table-column>

          <el-table-column
            v-else
            :key="index"
            :type="item.type"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :fixed="item.fixed"
            :align="item.item"
            :show-overflow-tooltip="item.showOverflowTooltip"
            v-loading="tableLoading"
          />
        </template>
      </el-table>

      <!--分页-->
      <GPagination
        :total="total"
        :currentPage.sync="page"
        :size.sync="size"
        @change="changePage"
      />
    </div>
  </div>
</template>

<script>
/**
 * 常用页面布局
 * slot
 *
 * name === 'filter'
 * 顶部筛选区域 常用做来展示筛选条件、搜索等
 *
 * name === 'table'
 * 表格区域 默认带有分页
 **/
import GPagination from "@/components/GPagination";
export default {
  name: "GBusiness",
  components: {
    GPagination,
  },
  props: {
    // 总条数
    total: {
      type: Number,
      default: 0,
    },
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 当前每页条数
    pageSize: {
      type: Number,
      default: 1,
    },
    // 表头
    tableColumn: {
      type: Array,
      default: () => [],
    },
    // 表格数据源
    tableData: {
      type: Array,
      default: () => [],
    },
    // 表格 loading
    tableLoading: {
      type: Boolean,
      default: false,
    },
    // 表格 展开Key
    rowKey: String,
    // 表格 展开Key
    expandRowKey: Array,
  },
  computed: {
    page: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("update:currentPage", value);
      },
    },
    size: {
      get() {
        return this.pageSize;
      },
      set(value) {
        this.$emit("update:pageSize", value);
      },
    },
  },
  methods: {
    changePage() {
      this.$emit("changePage", { page: this.page, size: this.size });
    },
  },
};
</script>

<style lang="scss" scoped>
.g-page-card {
  ::v-deep {
    .el-pagination {
      margin-top: 16px;
      text-align: right;
    }
    .table-cell-operation {
      .cell {
        overflow: inherit;
      }
    }
  }
}
</style>
