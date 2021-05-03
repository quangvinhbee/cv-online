import Link from "next/link";
export function Contact() {
  return (
    <div className="">
      <div className="header-session">
        <h3>Please contact me</h3>
        <ul>
          <li className="cursor-pointer">
            <Link href="mailto:lamquangvinh44@gmail.com">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="https://www.facebook.com/quangvinhbee/">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="https://www.linkedin.com/in/lam-quang-vinh-666a18120/">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="https://telegram.me/NoName160699">
              <i class="fa fa-telegram" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="https://github.com/quangvinhbee">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
      <footer>
        <div className="copyright">
          <small>© Lam Quang Vinh</small>
        </div>
      </footer>
    </div>
  );
}
