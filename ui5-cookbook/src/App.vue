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
      <v-text-field
        solo
        prepend-inner-icon="search"
        label="Suche"
        class="ma-3"
      ></v-text-field>

      <v-divider></v-divider>
      
      <v-list dense nav>
        <v-subheader>Menü</v-subheader>
        
        <v-list-item> 
          <v-list-item-content>

              <router-link to="/foo" class="link">Go to Home</router-link>
  
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>

              <router-link to="/grundlagen" class="link">Grundlagen</router-link>

          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-img :src="require('./assets/logo.png')" max-height="45" max-width="45" contain></v-img>
      <v-toolbar-title class="lobster">UI5-Cookbook</v-toolbar-title>
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
    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
      <span class="px-4">Lukas Giesler</span>
    </v-footer>
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
  }

  a{
    text-decoration: none;
  }

  .link{
    color: black;
  }

</style>