<template>
  <div id="app">
    <!-- Header -->
    <header id="header" class="alt">
      <span class="logo"><img src="images/Mainlogo2.png" alt="" /></span>
      <!-- <p>
        simply give
        <br /> -->
      <!-- built by
        <a href="https://twitter.com/ajlkn">@ajlkn</a>
        for
        <a href="https://html5up.net">HTML5 UP</a>
        . -->
      <!-- </p> -->
    </header>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li><a href="/" class="active">Home</a></li>

        <li><a href="/charitysindex">All Charities</a></li>
        <li><a href="/cartedproductsindex">Your Saved Charities</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
    <!-- Main -->
    <div id="main">
      <!-- Introduction -->
      <section id="intro" class="main">
        <router-view />
      </section>
    </div>

    <!-- Footer -->
    <footer id="footer">
      <section>
        <h2>Aliquam sed mauris</h2>
        <p>
          Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore
          veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
          tincidunt odio.
        </p>
        <ul class="actions">
          <li><a href="generic.html" class="button">Learn More</a></li>
        </ul>
      </section>
      <section>
        <h2>Etiam feugiat</h2>
        <dl class="alt">
          <dt>Address</dt>
          <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
          <dt>Phone</dt>
          <dd>(000) 000-0000 x 0000</dd>
          <dt>Email</dt>
          <dd><a href="#">information@untitled.tld</a></dd>
        </dl>
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter alt"><span class="label">Twitter</span></a>
          </li>

          <li>
            <a href="#" class="icon brands fa-github alt"><span class="label">GitHub</span></a>
          </li>
          <li>
            <a href="#" class="icon brands fa-dribbble alt"><span class="label">Dribbble</span></a>
          </li>
        </ul>
      </section>
      <p class="copyright">
        &copy; Untitled. Design:
        <a href="https://html5up.net">HTML5 UP</a>
        .
      </p>
    </footer>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
  </div>
</template>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  color: black;
}
</style>
