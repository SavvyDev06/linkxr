import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={5}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder="dingus@email.com"
          variant="filled"
          mb={3}
          type="email"
          disabled="true"
        />
        <Input
          placeholder="**********"
          variant="filled"
          mb={6}
          type="password"
          disabled="true"
        />
        <Button mb={6} colorScheme="teal" disabled="true">
          Log in
        </Button>
        <Button onClick={toggleColorMode} disabled="true">
          Toggle Color Mode
        </Button>
        <Text fontStyle="italic" mt={4}>
          Disabled. Google & Facebook login coming on site launch.
        </Text>
      </Flex>
    </Flex>
  );
}
