<template>
<div class="menu-wrap">
<ul>
 
  </ul>
</div>
</template>

<script>

  export default {
    data() {
      return {
        data: [{
          label: 'home',
          href:"dddd",
     
        },
        {
          label:'end'

        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    },
    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-wrap{width:200px;}
</style>
