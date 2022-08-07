<template>
  <div class="menu">
    <h1>Menu</h1>
    <section class="course">
      <h4>Finger Food</h4>
      <p>pan tumaca, katalanisches tomatenbrot</p>
      <p>wiiredli: chorizo-scheiben im feuerwok langsam im rotwein geschmort, dazu warme pide-fladenbrotstücke</p>
      <p>ginfisch: auf wacholderästen feuergedämpfte stücke der bio-forelle/bio-saibling, mit mattegin beträufelt und mit einem tropfen brombeersenf genossen.</p>
    </section>
    <section class="course">
      <h4>Main menu</h4>
      <p>cholefleisch: metzgerstücke oder huftfleisch vom emmentaler piemonteserrind, direkt auf der kohle gebraten, zum selbst grillieren</p>
      <p>für vegetarier: portobello-pilze mit bohnenkrautpesto</p>
      <p>chillfood's risotto aus dem eisenwok, gekocht mit bio-brodo und dazu salbeibutter</p>
      <p>ratatouille</p>
    </section>
    <section class="course">
      <h4>Dessert</h4>
      <p>feuergeschmorter heitischmarrn aus dem flachen eisenwok</p>
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
    p {
    width: 70%;
    text-align: center;
    margin: auto;
    }
  }
}
</style>
