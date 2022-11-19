<template>
    <div>
        <!-- this is for routing -->

        <h1>app.vue</h1>
        <router-link to="/">home</router-link
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/login">login</router-link
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/profile">profile</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>
