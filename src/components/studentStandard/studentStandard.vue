<template>
    <div>
        <datagrid  cols="Thefirstorderstudents,Thesecondorderstudents,cultivatesstudents,Studentsapplyfor" labels="一阶学员,二阶学员,特培学员,学员申请" ></datagrid>
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