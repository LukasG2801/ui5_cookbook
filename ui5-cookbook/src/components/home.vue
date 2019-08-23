<template>
  <div class="home">
    
    <v-container class="pa-2" fluid>
    <v-row>
    <v-col>
    <!--Fiori & UI5 Card -->
    <v-card class="mx auto" max-width="344">
      
      <v-img src="../assets/logo_fiori.jpg" height="200px"></v-img>
      
      <v-card-title>
        <div>
          <p>Fiori & UI5</p>
        </div>
        <span class="grey--text subtitle-1">Worin besteht der Unterschied ?</span>
      </v-card-title>
      
      <v-card-actions>
        <v-btn text>Teilen</v-btn>
        <v-btn text to="/grundlagen" color="blue accent-4">Weiterlesen</v-btn>
        <!--<router-link to="grundlagen">Weiterlesen</router-link>-->
        <div class="flex-grow-1"></div>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
        </v-btn>
      </v-card-actions>
      
      <v-expand-transition>
        <div v-show="show">
          <v-card-text class="justify">
            Der Artikel soll einen Überblick darüber verschaffen, was SAPUI5 ist und wie es mit SAP Fiori
            in Zusammenhang steht. Was ist der Unterschied der beiden Begriffe ? Obwohl sie oft synonymhaft verwendet 
            werden, handelt es sich um verschiedene Bestandteile.
          </v-card-text>
        </div>
      </v-expand-transition>
    
    </v-card>
    </v-col>


    <v-col>
    <!--Tools Card -->
    <v-card class="mx auto" max-width="344">
      
      <v-img src="../assets/card_image_tools.jpg" height="200px"></v-img>
      
      <v-card-title>
        <div>
          <p>Tools zur Entwicklung</p>
        </div>
        <span class="grey--text subtitle-1">Hilfreich für die Entwicklung. </span>
      </v-card-title>
      
      <v-card-actions>
        <v-btn text>Teilen</v-btn>
        <v-btn text to="/tools" color="blue accent-4">Weiterlesen</v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="show1 = !show1">
          <v-icon>{{ show1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
        </v-btn>
      </v-card-actions>
      
      <v-expand-transition>
        <div v-show="show1">
          <v-card-text class="justify">
            Welche Tools oder auf deutsch Werkzeuge können verwendet werden für die Entwicklung von FIORI Apps ?
            Neben den SAP eigenen Entwicklungswerkzeugen können auch etablierte und verbreitetere Tools genutzt werden.
          </v-card-text>
        </div>
      </v-expand-transition>
    
    </v-card>
    </v-col>

    <v-col>
    <!--OData Card -->
    <v-card class="mx auto" max-width="344">
      
      <v-img src="../assets/card_image_odata.jpg" height="200px"></v-img>
      
      <v-card-title>
        <div>
          <p>OData-Services</p>
        </div>
        <span class="grey--text subtitle-1">OData als Bindeglied. </span>
      </v-card-title>
      
      <v-card-actions>
        <v-btn text>Teilen</v-btn>
        <v-btn text to="/odata" color="blue accent-4">Weiterlesen</v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="show2 = !show2">
          <v-icon>{{ show2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
        </v-btn>
      </v-card-actions>
      
      <v-expand-transition>
        <div v-show="show2">
          <v-card-text class="justify">
            OData-Services schlagen die Brücke zwischen dem Backend und dem Frontend. 
            Sie stellen Daten aus dem SAP-System zum Konsum nach Außen hin bereit.
          </v-card-text>
        </div>
      </v-expand-transition>
    
    </v-card>
    </v-col>

<v-col>
    <!--A Card -->
    <v-card class="mx auto" max-width="344">
      
      <v-img src="../assets/card_image_architektur.jpg" height="200px"></v-img>
      
      <v-card-title>
        <div>
          <p>Architektur einer Fiori App</p>
        </div>
        <span class="grey--text subtitle-1">Architektur und Aufbau einer FIORI App</span>
      </v-card-title>
      
      <v-card-actions>
        <v-btn text>Teilen</v-btn>
        <v-btn text to="/architecture" color="blue accent-4">Weiterlesen</v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="show3 = !show3">
          <v-icon>{{ show3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
        </v-btn>
      </v-card-actions>
      
      <v-expand-transition>
        <div v-show="show3">
          <v-card-text class="justify">
            Aus welchen Bestandteilen genau besteht eine FIORI App im Detail. Wie sind diese miteinander verknüpft und wie kommunizieren sie untereinander. 
          </v-card-text>
        </div>
      </v-expand-transition>
    
    </v-card>
    </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data (){
    return{
      msg: 'Welcome',
      show: false,
      show1: false,
      show2: false,
      show3: false
    }
  }
}
</script>

<style scoped>
  .justify{
    text-align: justify;
  }
</style>