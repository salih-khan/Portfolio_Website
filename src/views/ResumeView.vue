<template>
  <div>
    <iframe       :src="pdfSrc"
    width="100%" height="500px"></iframe>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
  setup() {
    return {
      pdfSrc: 'Pdf/Salih_khan_CV%202.pdf', // Relative path to the public folder
    };
  },
};
</script>   

<style scoped>

</style>
