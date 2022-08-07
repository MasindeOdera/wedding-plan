<template>
  <div class="menu">
    <h2>Menu By Chillfood</h2>
    <section class="course">
      <h4>Finger Food</h4>
      <div class="serving">
        <p>pan tumaca, katalanisches tomatenbrot</p>
        <p>pan tumaca, catalan tomato bread</p>
      </div>
      <div class="serving">
        <p>wiiredli: chorizo-scheiben im feuerwok langsam im rotwein geschmort, dazu warme pide-fladenbrotstücke</p>
        <p>wiiredli: slices of chorizo slowly braised in red wine in a fire wok, served with pieces of warm pide flatbread</p>
      </div>
      <div class="serving">
        <p>ginfisch: auf wacholderästen feuergedämpfte stücke der bio-forelle/bio-saibling, mit mattegin beträufelt und mit einem tropfen brombeersenf genossen</p>
        <p>ginfisch: pieces of organic trout/organic char steamed on juniper branches, drizzled with mattegin and enjoyed with a drop of blackberry mustard</p>
      </div>
    </section>
    <section class="course">
      <h4>Main menu</h4>
      <div class="serving">
        <p>cholefleisch: metzgerstücke oder huftfleisch vom emmentaler piemonteserrind, direkt auf der kohle gebraten, zum selbst grillieren</p>
        <p>cholefleisch: butcher's pieces or hip meat from emmental piedmont beef, roasted directly on the charcoal, for grilling yourself</p>
      </div>
      <div class="serving">
        <p>für vegetarier: portobello-pilze mit bohnenkrautpesto</p>
        <p>for vegetarians: portobello mushrooms with savory pesto</p>
      </div>
      <div class="serving">
        <p>chillfood's risotto aus dem eisenwok, gekocht mit bio-brodo und dazu salbeibutter</p>
        <p>chillfood's risotto from the iron wok, cooked with organic brodo and sage butter</p>
      </div>
      <div class="serving">
       <p>ratatouille</p>
      </div>
    </section>
    <section class="course">
      <h4>Dessert</h4>
      <div class="serving">
        <p>feuergeschmorter heitischmarrn aus dem flachen eisenwok</p>
        <p>fire-braised heitischmarrn from the flat iron wok</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.menu {
  .course::after {
    content: "";
    border-bottom: 1px solid grey;
    width: 60%;
    display: block;
    margin: 10px auto;
  }
  .course:last-child::after {
    border-bottom: none;
  }
  .course {
    .serving {
      width: 80%;
      margin: 10px auto;
      padding: 2px;
      p {
      width: 70%;
      text-align: center;
      margin: auto;
      }
    }
  }
}
</style>
