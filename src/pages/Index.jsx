import React from "react";
import { ChakraProvider, Box, Flex, Text, IconButton, Table, Thead, Tbody, Tr, Th, Td, Container, Heading, Spacer, Button, useColorModeValue } from "@chakra-ui/react";
import { FaSignInAlt, FaSignOutAlt, FaSun, FaWind, FaWater, FaBolt } from "react-icons/fa";

const assetsData = [
  { id: 1, type: "Water", kwh: 5000, cost: 3000, marketPrice: 3500 },
  { id: 2, type: "Wind", kwh: 8000, cost: 7200, marketPrice: 7500 },
  { id: 3, type: "Solar", kwh: 12000, cost: 10000, marketPrice: 11500 },
  { id: 4, type: "Spot Market", kwh: 15000, cost: 14000, marketPrice: 14500 },
];

const Index = () => {
  const iconMap = {
    Water: FaWater,
    Wind: FaWind,
    Solar: FaSun,
    "Spot Market": FaBolt,
  };

  const tableBg = useColorModeValue("gray.50", "gray.700");

  return (
    <ChakraProvider>
      <Box bg={useColorModeValue("gray.100", "gray.900")} minH="100vh">
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={6} bg="teal.500" color="white">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Electricity Bill Inventory
          </Heading>
          <Spacer />
          <IconButton icon={<FaSignInAlt />} aria-label="Sign In" variant="outline" />
          <IconButton
            ml={4}
            icon={<FaSignOutAlt />}
            aria-label="Sign Out"
            variant="outline"
            isDisabled // Assuming user is not signed in
          />
        </Flex>
        <Container maxW="container.xl" p={8}>
          <Table variant="simple" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Number</Th>
                <Th>Type</Th>
                <Th isNumeric>kWh</Th>
                <Th isNumeric>Current Cost ($)</Th>
                <Th isNumeric>Average Market Price ($)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {assetsData.map((asset, index) => (
                <Tr key={asset.id} bg={index % 2 === 0 ? tableBg : "inherit"}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Flex align="center">
                      {React.createElement(iconMap[asset.type], { mr: 2 })}
                      {asset.type}
                    </Flex>
                  </Td>
                  <Td isNumeric>{asset.kwh}</Td>
                  <Td isNumeric>{asset.cost}</Td>
                  <Td isNumeric>{asset.marketPrice}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
