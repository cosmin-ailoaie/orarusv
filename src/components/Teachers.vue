<template>
  <div class="container">
    <h2>Profesori</h2>
    <div class="list" id="style-8">
      <ul>
        <li v-for="teacher in teachersList" :key="teacher.id">{{teacher.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachersList: [
        {
          id: "1",
          name: "Achiricesei Roxana"
        },
        {
          id: "2",
          name: "Afanasov Ciprian"
        },
        {
          id: "3",
          name: "Agrigoroaei Stefan"
        },
        {
          id: "4",
          name: "Alici Stelian"
        },
        {
          id: "5",
          name: "Albu Angela"
        },
        {
          id: "6",
          name: "Albu Eufrozina"
        },
        {
          id: "7",
          name: "Aldo de Sabata"
        },
        {
          id: "8",
          name: "Alexandru Nicolae Dumitru"
        },
        {
          id: "9",
          name: "Amarandei Dumitru"
        },
        {
          id: "10",
          name: "Amariei Sonia"
        },
        {
          id: "11",
          name: "Andrei Angela"
        },
        {
          id: "12",
          name: "Andrei Iulian"
        },
        {
          id: "13",
          name: "Andreis Maria"
        },
        {
          id: "14",
          name: "Antofiychuk Volodymyr"
        },
        {
          id: "15",
          name: "Apetri Anisoara"
        },
        {
          id: "16",
          name: "Apostol Laura Carmen"
        },
        {
          id: "17",
          name: "Ardeleanu Sanda-Maria"
        },
        {
          id: "18",
          name: "Arionesei Gabrila"
        },
        {
          id: "19",
          name: "Atanasoae Pavel"
        },
        {
          id: "20",
          name: "Atomei Oana"
        },
        {
          id: "21",
          name: "Avacaritei Daniel"
        },
        {
          id: "22",
          name: "Avram Sorin"
        },
        {
          id: "23",
          name: "Avramiuc Marcel"
        },
        {
          id: "24",
          name: "Badaluta Carmen"
        },
        {
          id: "25",
          name: "Baehre H."
        },
        {
          id: "26",
          name: "Baesu Camelia"
        },
        {
          id: "27",
          name: "Balan Alexandra Ligia"
        },
        {
          id: "28",
          name: "Balan Dinu"
        },
        {
          id: "29",
          name: "Balan Doru"
        },
        {
          id: "30",
          name: "Balan Ionut"
        },
        {
          id: "31",
          name: "Balan Lacramioara"
        }
      ]
    };
  }
};
</script>
<style scoped>
.container {
  /* position: relative; */
}
h2 {
  text-align: center;
  color: white;
}
.list {
  display: block;
  position: absolute;
  left: 40%;
  width: 40%;
  color: white;
  height: 50%;
  overflow: scroll;
  overflow-x: hidden;
}
ul li {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-justify: auto;
  color: white;
  cursor: pointer;
}
@media (max-width: 768px) {
  .list {
    left: 30%;
  }
}
ul {
  background-color: rgb(53, 52, 52);
  padding: 15px;
}
#style-8::-webkit-scrollbar-track {
  border: 1px solid black;
  background-color: #f5f5f5;
}

#style-8::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

#style-8::-webkit-scrollbar-thumb {
  background-color: #000000;
}
</style>