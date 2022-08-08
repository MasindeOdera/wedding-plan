<template>
  <div class="ceremony">
    <h1>Ceremony</h1>
    <div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>Einzug / Entrance</h2>
      <p>Lied / Musik: Christina Perri – A Thousand Years</p>
      <p>Song / Music: Christina Perri – A Thousand Years</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <p>Begrüssung / Greeting</p>
      <p>Gebet / Prayer</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>Lied / Song</h2>
      <p>Hillsong – Lord I Give You My Heart</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <p>Lesung / Reading</p>
      <p>Predigt / Sermon</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>Lied / Song</h2>
      <p>Peter Gabriel – The Book of Love</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>Trauakt / Act of Marriage</h2>
      <p>Einleitung / Introduction</p>
      <p>Trauversprechen / Wedding vows</p>
      <p>Frage des Pfr. / Questions from the Father</p>
      <p>Ringübergabe / Exchange Rings</p>
      <p>Segen - Spruch / Blessing - Speach</p>
      <p>Kuss / Kiss</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>Lied / Song</h2>
      <p>Elton John – Your Song</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <p>Fürbittegebet / Intercession Prayer</p>
      <p>Unser Vater / Our Father</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <p>Kollekte Ukraine Hilfe/ Collection Ukraine help</p>
      <p>Mitteilungen (durch Trauzeugen) / Messages (from Bridal Party)</p>
      <p>Segen / Blessings</p>
      <p>Lied / Song: Gölä – Keni Träne meh</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>Auszug / Exit</h2>
    </div>
  </div>
</div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.ceremony {
//The actual timeline (the vertical ruler)
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

// The actual timeline (the vertical ruler)
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #2c3e50;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

// Container around content
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

// The circles on the timeline
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #2c3e50;
  border: 4px solid #42b983;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

// Place the container to the left
.left {
  left: 0;
}

// Place the container to the right
.right {
  left: 50%;
}

// Add arrows to the left container (pointing right)
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #42b983;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #42b983;
}

// Add arrows to the right container (pointing left)
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #42b983;
  border-width: 10px 10px 10px 0;
  border-color: transparent #42b983 transparent transparent;
}

// Fix the circle for containers on the right side
.right::after {
  left: -16px;
}

// The actual content
.content {
  padding: 20px 30px;
  background-color: #42b983;
  position: relative;
  border-radius: 6px;
}

// Media queries - Responsive timeline on screens less than 600px wide
@media screen and (max-width: 600px) {
  // Place the timelime to the left
  .timeline::after {
  left: 31px;
  }

  // Full-width containers
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }

  // Make sure that all arrows are pointing leftwards
  .container::before {
  left: 60px;
  border: medium solid #42b983;
  border-width: 10px 10px 10px 0;
  border-color: transparent #42b983 transparent transparent;
  }

  // Make sure all circles are at the same spot
  .left::after, .right::after {
  left: 15px;
  }

  // Make all right containers behave like the left ones
  .right {
  left: 0%;
  }
}
}
</style>
