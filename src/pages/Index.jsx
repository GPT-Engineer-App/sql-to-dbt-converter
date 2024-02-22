import React, { useState } from "react";
import { Box, Button, Container, Textarea, VStack, Heading, Code, Divider, useToast } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [sqlInput, setSqlInput] = useState("");
  const [dbtOutput, setDbtOutput] = useState("");
  const toast = useToast();

  const handleConvert = () => {
    try {
      // For the sake of example, we're replacing select statements with Jinja templated code
      const jinjaTemplate = sqlInput.replace(/select /gi, "{% set sql_query %}\nselect ").replace(/from /gi, "\nfrom ") + "\n{% endset %}\n\n{{ sql_query }}";
      setDbtOutput(jinjaTemplate);
    } catch (error) {
      toast({
        title: "Error converting SQL to dbt format",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (event) => {
    setSqlInput(event.target.value);
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="xl">
          SQL to dbt Converter
        </Heading>
        <Textarea placeholder="Enter your SQL code here..." size="lg" minHeight="200px" value={sqlInput} onChange={handleInputChange} />
        <Button rightIcon={<FaExchangeAlt />} colorScheme="teal" onClick={handleConvert}>
          Convert to dbt
        </Button>
        <Divider />
        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            dbt Jinja Output
          </Heading>
          <Code p={4} w="full" overflowX="auto" children={dbtOutput} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
