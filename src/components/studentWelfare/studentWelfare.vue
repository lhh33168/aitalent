<template>
    <div>
        <datagrid  cols="Firstorderstudentwelfare,Secondorderstudentwelfare,cultivateswelfare" labels="一阶学员福利,二阶学员福利,特培学员福利" ></datagrid>
    </div>
</template>
<script>
    import datagrid from '../studenDatagrid/studenDatagrid.vue';
    export default{
         components: {
            datagrid
        }
    }
</script>