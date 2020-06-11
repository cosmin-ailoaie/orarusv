<template>
  <div>
    <ul>
      <li>
        <a href="#" onclick="selecteazaFacultatea(1)"
          >Facultatea de Inginerie Electrică şi Ştiinţa Calculatoarelor</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(2)"
          >Facultatea de Inginerie Mecanică, Mecatronică şi Management</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(3)"
          >Facultatea de Educaţie Fizică şi Sport</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(4)"
          >Facultatea de Inginerie Alimentară</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(5)"
          >Facultatea de Istorie şi Geografie</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(6)"
          >Facultatea de Litere şi Ştiinţe ale Comunicării</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(7)"
          >Facultatea de Silvicultură</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(8)"
          >Facultatea de Ştiinţe Economice şi Administraţie Publică</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(9)"
          >Facultatea de Ştiinţe ale Educaţiei</a
        ><br />
      </li>
      <li>
        <a href="#" onclick="selecteazaFacultatea(10)"
          >Facultatea de Drept şi Ştiinţe Administrative</a
        ><br />
      </li>
      <li>
        <a href="#">Departamentul de Specialitate cu Profil Psihopedagogic: </a>
        <ul>
          <a href="#"></a>
          <li>
            <a href="#"></a
            ><a
              href="http://www.dppd.usv.ro/dppd2/pdf/2018/Niv%20I%20postuniv.pdf"
              >postuniversitar nivel 1</a
            >
          </li>
          <li>
            <a
              href="http://www.dppd.usv.ro/dppd2/pdf/2018/Niv%20II%20Postuniv.pdf"
              >postuniversitar nivel 2</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// vue
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

// component setup
@Component({ computed: mapGetters({}) })
export default class FacultiesComponent extends Vue {
  // private
  // private readonly APP: {} = APP;

  constructor() {
    super();
  }
}
</script>
<style scoped lang="scss"></style>
