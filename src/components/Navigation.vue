<template>
  <div>
    <ul>
      <button
        v-for="(option) in options"
        :key="option.id"
        v-on:click="selectSpec(option.id)"
      >{{option.title}}</button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: 0,
      options: [
        {
          id: 0,
          title: "Studenti"
        },
        {
          id: 1,
          title: "Profesori"
        },
        {
          id: 2,
          title: "Sali"
        },
        {
          id: 3,
          title: "Facultati"
        },
        {
          id: 4,
          title: "Despre"
        }
      ]
    };
  },
  methods: {
    selectSpec(value) {
      this.values = value;
    }
  }
};
</script>

<style scoped>
button {
  display: block;
  width: 150px;
  height: 50px;
  border: 2px, solid, rgb(135, 216, 243);
  background-color: transparent;
  margin: 10px;
  padding: 10px;
}
button:hover {
  background-color: rgb(135, 216, 243);
}
</style>

