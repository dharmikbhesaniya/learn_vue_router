<template lang="">
    <div>
        <h1>{{ profile }}'s profile</h1>
    </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
    name: "profile",
    data() {
        return {
            profile: "",
        };
    },
    mounted() {
        const route = useRoute();
        // console.log("route", route.params.name);
        this.profile = route.params.name;
    },
};
</script>
<style lang=""></style>
