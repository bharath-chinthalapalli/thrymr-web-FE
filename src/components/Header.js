import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  appBarTransparent: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  appBarSolid: {
    backgroundColor: "rgba(47, 47, 46)",
  },
}))

export default function ButtonAppBar() {
  const [show, setShow] = useState(false)
  const classes = useStyles()

  const [navBackground, setNavBackground] = useState("appBarTransparent")
  const navRef = React.useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310
      if (show) {
        setNavBackground("appBarSolid")
      } else {
        setNavBackground("appBarTransparent")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const toggleMenu = () => {
    setShow(!show)
  }
  return (
    <div>
      <AppBar
        elevation={0}
        position="fixed"
        className={classes[navRef.current]}
      >
        <nav className="flex items-center justify-between flex-wrap w-full z-10 top-0 ">

        <div className="m-8">
            <Link to = '/'>
              <StaticImage
                src="../images/logo-thrymr.png"
                className="md:ml-6"
                width={224}
                formats={["auto", "webp", "avif"]}
                alt="Thrymr-logo"
                style={{ marginBottom: `0.45rem` }}
              />
            </Link>
          </div>

          {/* <Link to="/">
            {" "}
            <div className="flex items-center flex-shrink-0 text-white mx-6 ">
              <svg
                width="82"
                height="82"
                viewBox="0 0 32 32"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99219 15.713C6.99219 15.713 7.00663 10.0647 12.9434 8.25954C14.3301 7.83738 19.2847 7.26963 22.1303 12.4812C22.1303 12.4812 15.1824 17.1251 6.99219 15.713Z"
                  fill="#B1B1B0"
                />
                <path
                  d="M8.97168 21.2884C12.3806 25.1316 16.9885 23.7632 16.9885 23.7632C20.4408 22.7878 22.0298 20.3276 22.6364 18.2313C16.0641 23.3701 8.97168 21.2884 8.97168 21.2884Z"
                  fill="#B1B1B0"
                />
                <path
                  d="M6.71784 15.6839C6.71784 15.6839 3.00553 17.6346 5.04225 18.9157C5.49003 19.1922 8.09009 20.1676 15.9047 17.62C15.9047 17.62 20.3682 16.339 22.6649 14.4028C22.6649 14.4028 15.038 20.9537 4.4789 20.5315C3.14998 20.4733 -1.41457 19.7309 6.71784 15.6839Z"
                  fill="#90908F"
                />
                <path
                  d="M8.39355 21.0992C8.39355 21.0992 18.996 20.284 24.3839 15.3781C24.3839 15.3781 26.4062 13.4274 22.3617 12.6122C22.3617 12.6122 28.9629 12.3065 27.8796 14.6503C27.4173 15.6547 22.4483 20.9391 8.39355 21.0992Z"
                  fill="#676261"
                />
                <path
                  d="M26.247 17.6346C26.0881 18.9594 24.8892 19.9056 23.5747 19.7455C22.2458 19.5853 21.3069 18.3771 21.4658 17.0523C21.6247 15.7276 22.8236 14.7814 24.1525 14.9415C25.467 15.1016 26.4059 16.3099 26.247 17.6346Z"
                  fill="#F17622"
                />
              </svg>
              <span className="thrymr-logo">THRYMR SOFTWARE</span>
            </div>
          </Link> */}

          <div
            className=" flex-grow lg:flex lg:items-center lg:w-auto  lg:pt-0 headerText"
            id="nav-content"

          >
            <div className="list-reset xl:flex xl:mr-20 justify-end flex-1 items-center sm:hidden">
              <div className="mr-3">
                <Link
                  to="/"
                  id="1"
                  className="inline-block  text-white no-underline
                    hover:text-underline rounded py-2 px-4 "
                  activeClassName="clickBox"
                  // onChange={e => e.target}
                >
                  Home
                </Link>
              </div>

              <div className="mr-3">
                <Link
                  to="/Services"
                  id="2"
                  className="inline-block  text-white no-underline rounded py-2 px-4"
                  activeClassName="clickBox"
                >
                  Services
                </Link>
              </div>

              <div className="mr-3">
                <Link
                  to="/casestudies/"
                  id="2"
                  className="inline-block  text-white no-underline rounded py-2 px-4"
                  activeClassName="clickBox"
                >
                  Case Studies
                </Link>
              </div>

              {/* <div className="mr-3">
                <Link
                  to="/Careers"
                  id="2"
                  className="inline-block  text-white no-underline rounded py-2 px-4"
                  activeClassName="clickBox"
                >
                  Careers
                </Link>
              </div> */}

              <div className="mr-3">
                <Link
                  to="/contact/"
                  className="inline-block  text-white no-underline  rounded py-2 px-4 "
                  activeClassName="clickBox"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="xl:hidden mr-3">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-8 fill-white " viewBox="0 0 24 24 ">
                {!show ? (
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                ) : (
                  <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={`${
            show
              ? `absolute mini-menu w-full block px-2 py-2   z-10`
              : `hidden px-2 py-0`
          }   items-center `}
        >
          <div className="xl:hidden hover:bg-stone-800 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-8 fill-white " viewBox="0 0 24 24 ">
                {!show ? (
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                ) : (
                  <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                )}
              </svg>
            </button>
          </div>
          <Link
            to="/"
            className="hover:bg-stone-800 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2 "
            onClick={toggleMenu}
          >
         Home
          </Link>

          <Link
             to="/Services/"
            className="hover:bg-stone-800 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2 "
            onClick={toggleMenu}
          >
            Services
          </Link>

          <Link
            to="/casestudies/"
            className="hover:bg-stone-800 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2 "
            onClick={toggleMenu}
          >
            Case Study
          </Link>

          {/* <Link
            to="/Careers"
            className="hover:bg-stone-800 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2 "
          >
            Careers
          </Link> */}

          <Link
            to="/contact/"
            className="hover:bg-stone-800 transition duration-300 rounded px-2 py-2 block text-white my-1 mx-2 sm:ml-2 "
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </AppBar>
    </div>
  )
}
