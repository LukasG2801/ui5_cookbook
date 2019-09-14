<template>
  <div class="odata">
    <h1>OData</h1>
    <br/>
    OData ist ein Protokoll zum Austausch von Daten zwischen kompatiblen Softwaresystemen und beruht auf HTTP. 
    OData steht eigentlich für "Open Data Protocol" und wurde von Microsoft veröffentlicht. 
    OData basiert auf älteren Protokollen wie ODBC, JDBC und kann weiterführend mit Cloud-Diensten wie Azure, MySQL, Java und Rails genutzt werden.
    Im Umfeld von SAPUI5 wird das OData-Protokoll dazu genutzt um Daten aus dem SAP System an die SAPUI5-Anwendungen oder Fiori App zu übertragen und zum Konsum bereit zu stellen.
    Im jeweiligen SAP-System dessen Daten für die App genutzt werden sollen, wird also ein Webservice implementiert, der auf dem OData-Protokoll beruht und kann so von Außen aufgerufen werden. 
    <br/>
    <br/>
    Ein Webservice, der auf dem OData-Protokoll beruht, wird allgemein als REST-Webservice bezeichnet, da das OData-Protokoll auf dem sogenannten REST-Programmierparadigma aufbaut.
    Was REST genau bezeichnet, kann ich selbst nicht besser erklären als es <a href="https://de.wikipedia.org/wiki/Representational_State_Transfer" target="blank">hier</a> getan wird.
    Was allerdings von großer Bedeutung für die SAPUI5-Entwicklung ist, ist die Tatsache, dass das OData-Protokoll die Datenübertragung in verschiedenen Formaten erlaubt.
    <br/>
    <br/>
    <h2>Datenübertragung</h2>
    <br/>
    Generell erlaubt es das OData-Protkoll, Daten in verschiedenen Formaten zu übertragen. 
    Meiner Meinung nach sind allerdings nur das XML-Datenformat und das JSON-Datenformat für die Nutzung mit SAPUI5 geeignet. 
    Deshalb werde ich im Folgenden auch nur auf diese beiden Protokolle eingehen.
    <br/>
    <br/>
    <v-container fluid>
      <v-row>
        <v-col width="50%">
          <pre v-highlightjs>
            <code class="json" style="text-align: left;">
              {"widget": {
                "debug": "on",
                "window": {
                  "title": "Sample Konfabulator Widget",
                  "name": "main_window",
                  "width": 500,
                  "height": 500
                },
                "image"
              }}
            </code>
          </pre>
        </v-col>
        <v-col>
          <code></code>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'odata',
  data (){
    return{
      msg: 'Welcome'
    }
  }
}
</script>

<style scoped>
  h1{
    margin-top: 20px;
    font-weight: lighter;
  }
</style>