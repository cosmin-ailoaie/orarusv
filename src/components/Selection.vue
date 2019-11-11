<template>
  <div>
    <div>
      <h2>{{selection}}</h2>
    </div>
    <div>
      <select name="specialization" class="test">
        <option
          v-for="(item, index) in specialization"
          :key="index"
          value="item"
          v-on:click="console.log('test')"
        >{{item.name}}</option>
      </select>
    </div>
    <div>
      <select class="test" name="listOfClassies" size="6">
        <option v-for="(item, index) in listOfClassies" :key="index" value="item">{{item.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "selection",
  props: {
    selection: String
  },
  data() {
    return {
      selectedID: Number,
      specialization: [
        {
          id: 0,
          name: "Facultatea de Inginerie Electrică şi Ştiinţa Calculatoarelor"
        },
        {
          id: 1,
          name: "Facultatea de Inginerie Mecanică, Mecatronică şi Management"
        },
        {
          id: 2,
          name: "Facultatea de Educaţie Fizică şi Sport"
        },
        {
          id: 3,
          name: "Facultatea de Inginerie Alimentară"
        },
        {
          id: 4,
          name: "Facultatea de Istorie şi Geografie"
        },
        {
          id: 5,
          name: "Facultatea de Litere şi Ştiinţe ale Comunicării"
        },
        {
          id: 6,
          name: "Facultatea de Silvicultură"
        },
        {
          id: 7,
          name: "Facultatea de Ştiinţe Economice şi Administraţie Publică"
        },
        {
          id: 8,
          name: "Facultatea de Ştiinţe ale Educaţiei"
        },
        {
          id: 9,
          name: "Facultatea de Drept şi Ştiinţe Administrative"
        }
      ],
      listOfClassies: [
        { id: 0, name: "3133A" },
        { id: 1, name: "3133B" },
        { id: 2, name: "3134A" },
        { id: 3, name: "3134B" }
      ]
      // listOfClassies: [
      //   {
      //     id: 0,
      //     classies: [
      //       { id: 0, name: "3111A" },
      //       { id: 1, name: "3111B" },
      //       { id: 2, name: "3112A" },
      //       { id: 3, name: "3112B" },
      //       { id: 4, name: "3113A" },
      //       { id: 5, name: "3113B" },
      //       { id: 6, name: "3114A" },
      //       { id: 7, name: "3114B" },
      //       { id: 8, name: "3115A" }
      //     ]
      //   },
      //   {
      //     id: 1,
      //     classies: [
      //       { id: 0, name: "4711A" },
      //       { id: 1, name: "4711B" },
      //       { id: 2, name: "4712A" },
      //       { id: 3, name: "4712B" },
      //       { id: 4, name: "4713A" },
      //       { id: 5, name: "4713B" },
      //       { id: 6, name: "4714A" },
      //       { id: 7, name: "4714B" },
      //       { id: 8, name: "4715A" }
      //     ]
      //   }
      // ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  width: 400px;
  margin: 10px;
}
</style>
