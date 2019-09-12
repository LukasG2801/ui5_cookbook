<template>
  <div class="tools">
    <h1>Tools</h1>
    <br/>
    <h2>Tools zur Entwicklung des Frontend</h2>
    <v-container class="pa-2" fluid style="margin-bottom: 50px;">
      <v-row>
        <v-col>
          <v-card color="#385F73" dark>
            <v-card-text class="white--text">
              <div class="headline mb-2">SAP WEB IDE
              <v-icon dark style="float:right">mdi-code-tags</v-icon>
              </div>
              <br/>
              Die SAP WEB IDE ist eine online Entwicklungsumgebung von SAP, die für die Entwicklung von Fiori Apps verwendet werden kann.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card color="#1F7087">
            <v-card-text class="white--text">
              <div class="headline mb-2"><a href="https://code.visualstudio.com" target="blank" style="color:white">VS Code</a>
              <v-icon dark style="float:right">mdi-visual-studio-code</v-icon>
              </div>
              <br/>
              VS Code bzw. Visual Studio Code ist ein frei verfügbarer Quelltext Editor.
              Damit können UI5 Apps einfach so entwickelt werden, wie alle anderen Webanwendungen auch.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card color="#952175">
            <v-card-text class="white--text">
              <div class="headline mb-1">GitHub
              <v-icon dark style="float:right">mdi-github-circle</v-icon>
              </div>
              <br/>
              GitHub ist eine online Plattform, die das Versionsverwaltungssystem Git nutzt. 
              Entwicklungsprojekte können mit GitHub online gestellt werden.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <blockquote>
      Die drei Werkzeuge sind die von mir bevorzugten Tools um Fiori Apps zu entwickeln. 
      Ich benutze dabei die SAP WEB IDE weniger zur Programmierung sondern eher um Mockups und Klick-Dummys mit dem Layout-Editor zu erstellen. 
      Für die eigentliche Programmierung halte ich VS Code derzeit für geeigneter, denn die Bedienung ist wesentlich einfacher und auch die Oberfläche und das Design sind einfach ansprechender.
      Im Zusammenspiel mit VS Code nutze ich für die Versionsverwaltung die Plattform GitHub, welche meiner Meinung nach wohl die bekannteste Plattform für online Quellcode sein dürfte.
      Natürlich kann aber auch jedes andere Versionsverwaltungssystem für die Entwicklung genutzt werden. Genau genommen bietet die SAP Cloud Platform sogar eine eigene Möglichkeit um Git-Repositorys anzulegen und zu verwalten.
      Diese kann dafür meiner Meinung nach genauso verwendet werden, die Verwendung von GitHub ist einfach eine persönliche Vorliebe und Gewohnheit.
    </blockquote>
    <br/>
    <br/>
    <h2>Tools zur Entwicklung des Backend</h2>
    <v-container class="pa-2" fluid style="margin-bottom: 50px;">
      <v-row>
        <v-col>
        <blockquote style="margin-bottom: 100px;">
          Die normale Vorgehensweise für Fiori Apps ist generell, dass diese Daten aus dem SAP-System verarbeiten. 
          Die Datenbeschaffung erfolgt also im SAP-System selbst. Dadurch werden keine weiteren Tools benötigt und vorgestellt. Sinnvoller ist es, Transaktionen im SAP-System zu nennen, die 
          zu hilfreichen Werkzeugen führen. 
          <br/>
          <br/>
          Die einzelnen Transaktionen sind allerdings sehr komplex und sollten in eigenen Artikeln erklärt werden. Deshalb führen die Transaktionen in der Tabelle zu den entsprechenden Artikeln, 
          welche die Transaktionen jeweils einzeln ins genaueste betrachten und deren Funktionsweise erklären.
        </blockquote>
      </v-col>
      <v-col>
        <v-simple-table height="300px" dark>
          <thead>
            <tr>
              <th class="text-left">Transaktion</th>
              <th class="text-left">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><router-link style="color: white;" to="/segw">SEGW</router-link></td>
              <td>SAP Gateway Service Builder <i>Anlegen und Programmieren von OData-Services</i></td>
            </tr>
            <tr>
              <td>/IWFND/GW_CLIENT</td>
              <td>SAP Gateway Client <i>Testen von OData-Services</i></td>
            </tr>
            <tr>
              <td>/IWFND/MAINT_SERVICE</td>
              <td>Services aktivieren und verwalten</td>
            </tr>
            <tr>
              <td>/IWFND/ERROR_LOG</td>
              <td>Fehlerprotokoll des SAP Gateways</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'tools',
  data (){
    return{
      msg: 'Welcome'
    }
  }
}
</script>

<style scoped>
    h1{
        font-weight: lighter;
        margin-top: 50px;
    }

    h2{
      font-family: 'Ubuntu';
      margin-bottom: 50px;
      margin-top: 50px;
    }
    
    
    a{
      text-decoration: none;
    }

</style>