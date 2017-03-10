<template>
    <div class="chlid">
        {{msg}}
    </div>
</template>

<style>
    .chlid{
        background-color: blue;
    }
</style>

<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>
