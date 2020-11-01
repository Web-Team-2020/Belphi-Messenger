<template>
<div class="pos-f-t">
    <nav class="navbar navbar-light bg-warning">
        <form class="form-inline">
            <h3 id="mark"> Belphi - {{part_name}} </h3>
        </form>
        <button class="navbar-toggler">Back</button>
    </nav>
</div>    
</template>

<script>
export default {
    props: {
        part_name: ''
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
#mark {
    text-shadow: 2px 2px white;
    padding-left: 6px;
}
</style>