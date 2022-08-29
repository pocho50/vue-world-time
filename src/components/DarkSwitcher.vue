<script setup lang="ts">
const isDark = useDark()
const toogleDark = useToggle(isDark)
</script>
<template>
    <button i-carbon-sun dark:i-carbon-moon @click="toogleDark()">
        {{ isDark ? 'dark' : 'light' }}
    </button>
</template>