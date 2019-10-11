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
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="blue"
        @click="toTop">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>

      <v-divider></v-divider>
      
        <v-subheader>Menü</v-subheader>
        <v-list>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
            <v-list-item-content><router-link to="/home" class="link">Go to Home</router-link></v-list-item-content>
          </v-list-item>
          
          <v-list-group prepend-icon="mdi-basecamp">
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
          
          <v-list-group prepend-icon="mdi-code-braces" active-class="v-item--disabled">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Entwicklung</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content><router-link to="/tools" class="link router_margin">Tools</router-link></v-list-item-content>
            </v-list-item>
            
          </v-list-group>
          
          <v-list-group prepend-icon="mdi-code-tags">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>SAP WEB IDE</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content><router-link to="/webide_newproject" class="link router_margin">Neues Projekt anlegen</router-link></v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content><router-link to="/webide_projectfromtemplate" class="link router_margin"><i>Project from Template</i></router-link></v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content><router-link to="/webide_projectfromsample" class="link router_margin"><i>Project from Sample Application</i></router-link></v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group prepend-icon="mdi-cloud">
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

      <!--macht das Logo zu einem Link zur Homepage-->
      <router-link to="/home"><v-img :src="require('./assets/HatchfulExport-All (1)/logo_transparent.png')" max-height="120" max-width="120"  contain></v-img></router-link>
      <v-spacer></v-spacer>
      <router-link to="/impressum"><button style="color:white; margin-right: 20px;">Impressum</button></router-link>
      <a href="https://github.com/gieslerl/ui5_cookbook" target="blank" style="margin-right: 20px;"><v-icon dark>mdi-github-circle</v-icon></a>
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
      fab: true
    }),

    methods: {
      onScroll(e) {
        if(typeof window === 'undefined') return
        const top = window.pageYOffset || e.target.scrollTop || 0 
        this.fab = top > 20
      },
      toTop() {
        this.$vuetify.goTo(0)
      }
    }
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
