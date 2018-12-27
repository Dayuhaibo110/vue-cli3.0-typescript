<template>
  <div class="Table-with-pagination">
    <CommonTable>

    </CommonTable>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommonTable from './CommonTable.vue';
import Pagination from './Pagination.vue';


@Component({
  components: {
    CommonTable,
    Pagination,
  },
  props:{

  }
})
export default class TableWithPagination extends Vue {
}
</script>

<style scoped lang="scss">

</style>
