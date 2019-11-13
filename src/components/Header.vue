<template>
  <div>
    <img src="../assets/logo.png" />
    <h1 class="primary">Orar USV</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background-color: rgb(135, 216, 243);
  padding: 15px;
}
h1 {
  display: inline;
  margin-left: 10%;
  position: absolute;
  top: 1%;
}

@media (max-width: 768px) {
  h1 {
    display: block;
    margin: 0%;
    position: relative;
    top: 0%;
  }
  div {
    padding: 0px;
  }
}
</style>
