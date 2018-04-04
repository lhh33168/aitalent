<template>
    <div>
        <datagrid  cols="TrainingServices,Internshipservices,Recommendedwork" labels="培训服务,实习服务,工作推荐" ></datagrid>
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