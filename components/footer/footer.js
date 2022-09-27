import React from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer class="p-4 sm:p-6 bg-transparent">
      <div class="md:flex md:justify-around ">
        <div class="mb-6 md:mb-0">
          <Logo />
        </div>
        <div class="mb-6 md:mb-0 text-white self-center">
          <p className="">
            Student Driven Community here to <br></br>provide quality to web3
            space.
          </p>
          <ul className="flex gap-4 p-6 content-center">
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BlockchainSRM">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/blockchain-club-srm/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <GitHubIcon />
              </a>
            </li>
          </ul>
          <p>All rights reserved @blockchainsrm</p>
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
            About
          </h2>
          <ul class="text-white dark:text-white">
            <li class="mb-2">
              <a href="https://tailwindcss.com/" class="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" class="hover:underline">
                Our Events
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" class="hover:underline">
                Our Team
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" class="hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
            Support
          </h2>
          <ul class="text-white dark:text-white">
            <li class="mb-2">
              <a
                href="https://github.com/themesberg/flowbite"
                class="hover:underline "
              >
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">
                Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;