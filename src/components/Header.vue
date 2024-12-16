<template>
  <div class="header-container">
    <div class="header">
      <h6>Home</h6>
      <h6>About</h6>
      <h6>Contact</h6>
    </div>
  </div>
</template>


<script>
export default {
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  display: flex; /* Makes the container a flexbox */
  justify-content: center; /* Centers the header horizontally */
  align-items: center; /* Centers vertically, if necessary */
  width: 100%; /* Ensures the container spans the full width of the page */
}

.header {
  display: inline-flex; /* Makes the header width fit its content */
  gap: 3rem; /* Space between items */
  background: #eee;
  padding-inline: 3rem; /* Optional: Adds space around the content inside the header */
  border-radius: 7.5rem;
}

.header h6 {
  padding-inline: 0.25rem; /* Optional: Adds space around h6 elements */
}
</style>



