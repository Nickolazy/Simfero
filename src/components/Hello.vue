<template>
	<section class="hello-section">
    <div class="container">
      <div class="hello-section-flex">
        <h2>
          Simfero
        </h2>
        <h1>
          Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.  
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br> sed do
          eiusmod tempor incididunt ut labore et dolore magna<br> aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br> ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
      <button @click="closeHello()" class="hello-button">
        <ButtonArrow class="hello-button-arrow"/>
      </button>
    </div>
	</section>
</template>
	
<script setup lang="ts">
	import ButtonArrow from './svg/ButtonArrow.vue';

  import { defineEmits } from 'vue';

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  function closeHello() {
    emit('close');
}
</script>
	
<style scoped>
			
</style>
