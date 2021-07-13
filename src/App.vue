<template>
  <div id="app">
    <header id="header" class="alt">
      <!-- <h1>GiveTo</h1> -->
      <p>
        <span class="logo">
          <img src="images/Mainlogo.png" alt="GiveTo logo black letters with white branches" />
        </span>

        <!-- <br /> -->
        <!-- built by
        <a href="https://twitter.com/ajlkn">@ajlkn</a> -->
      </p>
    </header>
    <nav id="nav">
      <ul>
        <li><a href="/" class="active">Home</a></li>
        <!-- <li><a href="/signup">Signup/Login</a></li> -->
        <!-- <li><a href="/login">Login</a></li> -->
        <li><a href="/charitysindex">All Charities</a></li>
        <li><a href="/cartedproductsindex">Your Saved Charities</a></li>
        <li><a href="/logout">Logout</a></li>
        <!-- <li><a href="/newcartedproduct">User Account Info</a></li> -->
      </ul>
    </nav>
    <router-view />
    <!-- Footer -->
    <!-- <footer id="footer">
      <section>
        <h2>Contact Us</h2>
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
        </ul>
      </section>
      <p class="copyright">
        &copy; Untitled. Design:
        <a href="https://html5up.net">HTML5 UP</a>
        .
      </p>
    </footer> -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
  </div>
</template>

<style>
/* #app {
  font-family: "Open Sans", sans-serif;
  color: black;
  background: linear-gradient(#eae7e2 25%, #feddd8 50%, #ceebe9 75%);
} */
</style>
