import { Box, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";

export default function Navbar() {
  return (
    <Box w="full" borderBottomWidth="0px" borderColor="gray.00">
      <Flex
        maxW="8xl"
        w="full"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        py="5"
        px={{ base: "5", xl: "0" }}
      >
        
        {/* <img src="/public/token.png" alt="Logo" style={{ width: "50px", height: "auto", marginRight: "10px" }} /> */}
        
        <Text fontWeight="bold" fontSize="4xl" color="#8BD7C3" alignSelf="center">
          JOSEPH DEX
        </Text>
        <ConnectWallet 
        style={{ padding: "10px 0px", fontSize: "18px" }}
        theme="dark" />
      </Flex>

      {/* Footer */}
      <Flex
        justifyContent="center"
        alignItems="center"
        py="2"
        // borderTopWidth="1px"
        // borderColor="gray.00"
        bottom="5"
        position="fixed"
        width="100%"
        // backgroundColor="white"
      >
        <Text fontSize="sm" color="#FEFEE8">
          Created by @Josephtran
        </Text>
      </Flex>
    </Box>
  );
}
