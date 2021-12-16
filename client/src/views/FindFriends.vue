<template>

  <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Find a JS framework">
      <o-autocomplete rounded expanded v-model ="handle" :list="filteredDataArray" placeholder="e.g. jQuery" icon="search" clearable @select="option => selected = option">
        <template v-slot:empty>No results found</template>
      </o-autocomplete>
    </o-field>
  </section>
  
</template>

<script>import { Search } from "../services/posts"
  export default {
    data() {
      return {
        list: [],
        handle: '',
        selected: null
      }
    },
    async mounted(){
        this.list = await Search();
    },
    computed: {
      filteredDataArray() {
        return this.list.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(this.handle.toLowerCase()) >= 0
          )
        })
      }
    }
  }
</script>