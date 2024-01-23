import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack
      backgroundColor="white"
      borderRadius="8"
    >
      <VStack height={{ base: "0px", sm: "380px", md: "430px", lg: "490px", xl: "530px" }}>
        <Image
          src={imageSrc}
          alt="image"
          borderRadius="8"
        />
        <VStack px={4}>
          <Text color="black"
          >
            <Heading
              s='h5'
              size='sd'>{title}
            </Heading>
            {description}
            <Text>
              See more {' '}
              <FontAwesomeIcon icon={faArrowRight} size="1x"
              />
            </Text>
          </Text >

        </VStack>


      </VStack>

    </HStack>
  );
};

export default Card;
