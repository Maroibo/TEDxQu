import "./Nav.css";
export default function Nav() {
  return (
    <nav className="desktop">
      <img src="../../public/TEDxQu-Logo.png" alt="" />
      <div className="options">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tedxqu">TEDxQU</a>
          </li>
          <li>
            <a href="/sponsors">Sponsors</a>
          </li>
          <li>
            <a href="/joinus">Join Us</a>
          </li>
          <li>
            <a href="https://linktr.ee/tedxqu?fbclid=PAAaYTcMfsNSmzEyYNfPkIjCKKuvIijTGlVZYsx1E-cIrLeew3JNh8epHklHc_aem_Ab7G7VqTaMpHePTqAZMhi0crcOhVzfDe25PoprRUjPc_4zOxpKGNCzBaT25AW9y3irc" target="_blank">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
