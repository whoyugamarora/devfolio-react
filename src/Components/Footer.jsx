import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="py-4 text-center bg-gray-100 dark:bg-gray-900">
      <p className="text-gray-800 dark:text-gray-200">
        Made with <FontAwesomeIcon icon={faHeart} className="text-purple-500" /> by Yugam Arora
      </p>
    </footer>
  );
};

export default Footer;
