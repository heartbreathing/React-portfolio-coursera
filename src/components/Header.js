import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY || 0;

   if (headerRef.current) {
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        // Scrolling up
        headerRef.current.style.transform = "translateY(0)";
      }
    }


    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // Add scroll event listener on mount
     window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Get the current URL without the hash
    const currentUrlWithoutHash = window.location.href.split("#")[0];

    // Update the URL with the new hash
    window.history.pushState({}, "", `${currentUrlWithoutHash}#${anchor}`);
    }
  };


  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={999}
    >
      <Box
        color="white"
        maxWidth="1280px"
        margin="0 auto"         
        >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              <a href={socials[0].url} children={<FontAwesomeIcon icon={socials[0].icon} size="2x"/>} />
              <a href={socials[1].url} children={<FontAwesomeIcon icon={socials[1].icon} size="2x"/>} />
              <a href={socials[2].url} children={<FontAwesomeIcon icon={socials[2].icon} size="2x"/>} />
              <a href={socials[3].url} children={<FontAwesomeIcon icon={socials[3].icon} size="2x"/>} />
              <a href={socials[4].url} children={<FontAwesomeIcon icon={socials[4].icon} size="2x"/>} />            
                    
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
               <a href="/#Projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
