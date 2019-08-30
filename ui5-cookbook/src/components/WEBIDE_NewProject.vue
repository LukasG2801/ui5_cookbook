<template>
  <div class="home">
    <h1>SAP WEB IDE <b>></b> Neues Projekt anlegen</h1>
    <br/>
    <v-container class="pa-2" fluid style="margin-bottom: 50px;">
      Die SAP WEB IDE ist die Entwicklungsumgebung für Fiori-Apps, die von SAP selbst zur Verfügung gestellt und weiterentwickelt wird.
      Dieses Kapitel soll erklären, wie mit der Entwicklung einer neuen Fiori-App begonnen werden kann und wie in der SAP WEB IDE eine neue App angelegt werden kann.
      <br/>
      <figure>
        <img src="../assets/webide_newproject/webide_start.png" class="image">
        <figcaption>Erster Bildschirm direkt nach der Anmeldung</figcaption>
      </figure>
      Der Screenshot zeigt den Startbildschirm nach der Anmeldung an der SAP WEB IDE. Um jetzt ein neues Projekt anzulegen, gibt es eigentlich drei Möglichkeiten. 
      Erstens kann man links in der Navigationsleiste über diesen Button  <img src="../assets/webide_newproject/webide_dev_button.png" style=" height: 25px; margin-bottom: 0; margin-left: 5px; margin-right: 5px;">  in den Arbeitsbereich abspringen. 
      <br/><br/>
      Die zweite Methode um eine neue Fiori-App anzulegen ist, dies direkt über die Kachel "Create a Project" zu tun. Hier werden eigentlich vier Möglichkeiten angezeigt, allerdings sind nur die ersten drei davon interessant um eine neue App anzulegen :
      <br/><br/>
      <ul class="margin-50">
        <li>
          Quick Start with Layout Editor
        </li>
        <li>
          New Project from Template
        </li>
        <li>
          New Project from Sample Application
        </li>
      </ul>
      <br/><br/>
      Welche davon am geeignetsten ist, muss situativ entschieden werden, der Unterschied wird aber im Laufe des Kapitels noch genauer erläutert.
      <br>
      Die dritte Möglichkeit ist der Absprung in den Entwicklungsbereich direkt über die Schaltfläche "Open My workspace" in der ersten Kachel. 
      <br/>
      PS: Ja mein Name ist Lukas ... 

      <h2>Im Arbeitsbereich</h2>
      Wenn ich entweder Methode 1 oder Methode 2 gewählt habe, dann sollte folgender Screen zu sehen sein: 
      <figure>
        <img src="../assets/webide_newproject/webide_workspace.png" class="image">
        <figcaption>Screenshot eines komplett leeren Arbeitsbereichs</figcaption>
      </figure>
    </v-container>
  </div>

</template>

<script>
export default {
  name: 'architecture',
  data (){
    return{
      msg: 'Welcome'
    }
  }
}
</script>

<style scoped>

    .margin-50 {
      margin-left: 50px;
    }

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

    .image{
        margin-top: 50px;
        width: 100%; 
        height: auto;
    }

    figcaption{
        font-style: italic;
        margin-bottom: 50px;
    }
</style>