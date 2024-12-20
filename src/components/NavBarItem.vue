<template>
    <li :class="classItem">
        <router-link :to="link">{{ text }}</router-link>
    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            require: true
        },
        text: {
            type: String,
            require: true
        },
        classItem: {
            type: String,
            require: true,
        }
    }
}
</script>