import './Navbar.css'

const Navbar = () => {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>01</span>Home
            </a>
          </li>
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>02</span>About Us
            </a>
          </li>
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>03</span>Events
            </a>
          </li>
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>04</span>Hall Of Fame
            </a>
          </li>
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>05</span>Gallery
            </a>
          </li>
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>06</span>Sponsors
            </a>
          </li>
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>07</span>Our Team
            </a>
          </li>
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              <span>08</span>Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
