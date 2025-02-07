import { Box, Link as ChakraLink, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { Link, Outlet } from "react-router";

function Base() {
    return (
        <Box
            bgColor={"#1B1833"}
            color={"#b6495f"}
            minH={"100vh"}
        >
            <Flex
                w="100%"
                bgColor={"#121122"}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Link to={""}>
                        <Heading
                            color="#ed7812"
                            fontWeight="bolder"
                            fontFamily=""
                            fontSize="4xl"
                            padding={10}>
                            MovieApp.
                        </Heading>
                    </Link>
                </Flex>
                <Box
                    w="1/5"
                ></Box>
            </Flex>
            <Outlet />
            <Flex
                w="100vw"
                bgColor={"#121122"}
                padding={10}
                direction="column"
                alignItems={"center"}
                justifyContent={"center"}
                gap="9">
                <Flex gap={6}>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialYoutube />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialInstagram />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialFacebook />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialTwitter />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialLinkedin />
                        </Icon>
                    </ChakraLink>
                </Flex>
                <Text>©Copyright MovieApp 2024.</Text>
            </Flex>
        </Box>
    )
}

export default Base