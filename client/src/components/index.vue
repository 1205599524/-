<template>
<div>
    <headnav></headnav>
    <sidenav></sidenav>
    <router-view></router-view>
    
</div>
    
</template>>
<script>

import headnav from './headnav';
import sidenav from './sidenav'
export default {
    components:{headnav,sidenav}
}
</script>
<style scoped>

</style>