<script setup lang="ts">
import { QcButtonProps } from '../../types/qc-button/props';

defineOptions({name:'QcButton'})
const props=withDefaults(defineProps<QcButtonProps>(),{})

</script>
<template>
<button class="qc-button" :data-type="props.type"></button>
</template>