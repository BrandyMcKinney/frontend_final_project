<template>
  <div section id="home" class="main special">
    <header class="major"></header>
    <ul class="features">
      <li>
        <span class="logo">
          <img src="images/llamasGiveTo.png" alt="" />
        </span>

        <h3>Hope</h3>
        <p>for change</p>
      </li>
      <li>
        <img src="images/people.png" alt="" />

        <!-- <span class="icon major style3 fa-copy"></span> -->
        <h3>Love</h3>
        <p>by showing care</p>
      </li>
      <li>
        <!-- <span class="icon major style5 fa-gem"></span> -->
        <img src="images/earth.png" alt="" />
        <h3>Support</h3>
        <p>through giving</p>
      </li>
    </ul>

    <footer class="major">
      <ul class="actions special">
        <li><a href="http://localhost:8080/signup" class="button">Get Started</a></li>
      </ul>

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
    </footer>
    <!-- </section> -->
  </div>
</template>
<style>
.image {
  opacity: 1;
  display: block;
  width: auto;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.features:hover .image {
  opacity: 0.3;
}

.features:hover .middle {
  opacity: 1;
}

.text {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
