<template>
    <header class="header detail-header">
        <h1 class="title">{{detail.toUpperCase()}}</h1>
    </header>
</template>

<script>
    export default {
        name: 'detailHeader',
        props : {
            detail : {
                String,
                default(){return ''}
            }
        }

    }
</script>

<style>
    .detail .header.detail-header {
        position: fixed;
        min-width: 1020px;
        margin-left: 180px;
        width: calc(100% - 180px);
        padding: 19px 40px;
        background-color: #fff;
        z-index: 100;
        border-bottom: 1px solid #d2d2d2;
    }

    .detail .header.detail-header .title {
        font-size: 38px;
        line-height: 42px;
        color: #333;
        padding-left: 0;
        font-family: 'Ubuntu-Medium';
        font-weight: 500;
        letter-spacing: -1.9px;
    }
</style>

