<template>
    <div class="alert">
        <p v-if="msg">{{ msg }}</p>
        <div class="alertNotifications">
            <p v-for="notification in notifications">
               {{ notification }} 
            </p>
        </div>
    </div>
</template>
<script>

export default{
    name: 'Alert',
    props:{
        msg: String,
        notifications: []  
    } 
}
 
</script>
<style scoped>
.alert{
    display: flex;
    height: 10%;
    justify-content: center;
    width: auto;
    padding: 1%;
    color: red; 
} 
</style>

