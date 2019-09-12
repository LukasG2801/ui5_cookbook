<template>
  <div class="grundlagen" style="margin-bottom: 100px;">
    <h1>Fiori & UI5</h1>
    <br/>
    <h2 class="rubik">Fiori</h2>
    <br/>
    <blockqoute class="justify">
        Mit SAP Fiori hat SAP einen Umbruch begonnen und versucht damit die Wertigkeit der Mensch-Maschine-Kommunikation deutlich zu erhöhen.
        SAP Fiori ist allgemein der Überbegriff für eine neue User-Experience, die auf gewissen Grundsätzen basiert, welche die Bedienung für Anwender besonders einfach gestalten soll.
        Um diesem Ziel gerecht zu werden, wurde mit SAP Fiori eine neue Designsprache eingeführt, die auf verschiedenen Prinzipien basiert.
        <br/>
        <br/>
        Fiori soll dem Anwender Oberflächen zur Verfügung stellen, die im Vergleich zur SAP GUI ansprechend und einfach bedient werden können.
        SAP Fiori bedient sich deshalb den etablierten Programmiersprachen HTML, JavaScript und CSS. Dadurch ergeben sich Möglichkeiten zur Gestaltung, die der einer Webseite entsprechen.
    </blockqoute>
    <figure>
        <img src="../assets/screenshot_launchpad.png" class="image"/>
        <figcaption>Anwender Launchpad in SAP Fiori</figcaption>
    </figure>
    <blockqoute>
        Die Abbildung zeigt den Screenshot eines Launchpads wie es ein Benutzer angezeigt bekommt.
        Was der Screenshot dabei anzeigt spielt keine Rolle, es soll nur die neue Oberfläche von SAP Fiori veranschaulicht werden.
    </blockqoute>
    <br/>
    <br/>
    <br/>
    <h2>UI5</h2>
    <br/>
    <blockqoute>
        SAP Fiori Apps sind grundsätzlich an Richtlinien und Designvorgaben von SAP gebunden. Nur so kann eine einheitliche Designsprache gewährleistet werden und sichergestellt werden, dass sich der Nutzer in jeder Fiori Anwendung direkt zurecht findet.
        Eine Fiori App wird deshalb nicht frei designed und entwickelt, sondern SAP stellt für die Entwicklung ein eigenes Framework zur Verfügung welches sich SAPUI5 nennt.
        <br/>
        <br/>
        Durch die Entwicklung mit diesem Framework wird nicht nur gewährleistet, dass alle Fiori Apps gleich aussehen, sondern das Framework verfolgt auch das Prinzip MVC, wodurch jede App strikt getrennt ist nach Modell, Anzeige und Steuerung. (Model, View, Controller)
        SAPUI5 stellt dem Entwickler dabei bereits vordefinierte Oberflächenelemente zur Verfügung. Auch die Strukturierung einer App wird so bereits von SAP vorgegeben. 
        SAP stellt für das Framework auch eine sehr umfangreiche Dokumentation zur Verfügung, die sich <a href="https://sapui5.hana.ondemand.com" target="blank">SAPUI5-SDK</a> nennt.
    </blockqoute>
  </div>
</template>

<script>
export default {
  name: 'grundlagen',
}
</script>

<style scoped>
    h2{
        font-family: 'Ubuntu';
    }

    h1{
        font-weight: lighter;
        margin-top: 20px;
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

    .justify{
        text-align: justify;
        line-height: 1.5;
    }


</style>