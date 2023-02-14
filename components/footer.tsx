export default function Header() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className=" p-6 mt-4 ">
      <div>
        <p className="text-center pb-3">
          &copy; MAW Web Services LLC. All Rights Reserved - {year}
        </p>
        <hr></hr>
        <div className="text-center  pt-3">
          <a href="/about">
            <span className=" hover:text-white hover:border-white">
              About |{" "}
            </span>
          </a>
          <a href="/contact">
            <span className=" hover:text-white hover:border-white">
              Contact |{" "}
            </span>
          </a>
          <a href="/privacy">
            <span className=" hover:text-white hover:border-white">
              Privacy Policy|{" "}
            </span>
          </a>
          <a href="/">
            <span className=" hover:text-white hover:border-white">
              Home |{" "}
            </span>
          </a>{" "}
          <a href="https://www.mwportfolio.online">
            <span className=" hover:text-white hover:border-yellow">
              About MAW Web Services
            </span>
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}
