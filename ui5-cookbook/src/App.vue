<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    >
      <br/>
      <v-text-field
        solo
        prepend-inner-icon="search"
        label="Suche"
        class="ma-3"
      ></v-text-field>

      <v-divider></v-divider>
      
        <v-subheader>Menü</v-subheader>
        <v-list>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
            <v-list-item-content><router-link to="/home" class="link">Go to Home</router-link></v-list-item-content>
          </v-list-item>
          
          <v-list-group prepend-icon="mdi-basecamp" isActive="false" value="false">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Grundlagen</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content><router-link to="/grundlagen" class="link router_margin">Fiori & UI5</router-link></v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content><router-link to="/architecture" class="link router_margin">Architektur</router-link></v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content><router-link to="/odata" class="link router_margin">OData</router-link></v-list-item-content>
            </v-list-item>
          </v-list-group>
          
          <v-list-group prepend-icon="mdi-code-braces" value="true" active-class="v-item--disabled">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Entwicklung</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content><router-link to="/tools" class="link router_margin">Tools</router-link></v-list-item-content>
            </v-list-item>
          </v-list-group>
          
          <v-list-group prepend-icon="mdi-code-tags" value="true">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>SAP WEB IDE</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content><router-link to="/webide_newproject" class="link router_margin">Neues Projekt anlegen</router-link></v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group prepend-icon="mdi-cloud" value="true">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>SAP Cloud Plattform</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
        
        </v-list>        

    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
      color="blue accent-4"
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        dark
      ></v-app-bar-nav-icon>

      <v-img :src="require('./assets/HatchfulExport-All (1)/logo_transparent.png')" max-height="120" max-width="120"  contain></v-img>
      <!--<v-toolbar-title class="lobster">UI5-Cookbook</v-toolbar-title>-->
      <v-spacer></v-spacer>
      <img src="./assets/germany.svg" height="20px" width="20px"/>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs10>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!--<v-footer
      :inset="footer.inset"
      app
      dark
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
      <span class="px-4">Lukas Giesler</span>
      <span class="px-4"><v-icon>mdi-format-section</v-icon>Impressum</span>
    </v-footer>-->
  </v-app>
</template>
    
<script>
  export default {
    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default',
        clipped: true,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
    }),
  }
</script>

<style scoped>
  .lobster{
    font-family: "Lobster";
    color: white;
  }

  a{
    text-decoration: none;
  }

  .link{
    color: black;
  }

  .router_margin{
    margin-left: 25%;
  }
</style>
