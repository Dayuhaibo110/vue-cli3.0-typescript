<template>
  <el-table
    border
    :data="dataList"
    style="width: 100%"
    >
    <el-table-column
      v-for='(value, index) in tHeadList'
      :key='index'
      align='center'
      :prop='value.prop'
      :loading='loading'
      :width='value.width'
      :label="value.label">
      <template slot-scope="scope">
        <template v-if="value.prop === 'createdAt' || value.prop === 'updatedAt'">
          {{ stringToTime(scope.row[value.prop]) }}
        </template>
        <template v-else >
          {{scope.row[value.prop]}}
        </template>
      </template>
    </el-table-column>

    <slot name="self_section"></slot>
  </el-table>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import moment from 'moment';

@Component({
  props: {
    tHeadList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    dataList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  watch: {
    dataList(newVal:any, oldVal:any) {
      console.log(this);
      console.log(newVal);
      console.log(oldVal);
      // console.log('wang')
      // this.loading = false;
      // console.log('djasjdjasjdjasjdaskdjlkasjdkljaslk')
    }
  }

})

export default class CommonTable extends Vue {
  public loading = true;

  public stringToTime(str: string) {
    let newstr = moment(str).format('YYYY-MM-DD hh:mm');
    return newstr;
  }
}
</script>

