import { Text, Box, Flex, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { Outlet, Link as RouterLink } from "react-router";

function Base() {
    return (
        <Box
            bgColor={"#1B1833"}
            color={"#AB4459"}
            minH={"100vh"}
        >
            <Flex
                w="100%"
                bgColor={"#121122"}
            >
                <Flex
                    w="1/5"
                    h="20"
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Text
                        color="#ed7812"
                        fontWeight="bolder"
                        fontFamily=""
                        fontSize="4xl">
                        MovieApp
                    </Text>
                </Flex>
                <Flex
                    w="3/5"
                    alignItems={"center"}
                    gap="4"
                    fontWeight={"semibold"}
                    marginTop={2}
                >
                    <RouterLink to={""}>Other Page</RouterLink>
                    <RouterLink to={""}>Other Page</RouterLink>
                    <RouterLink to={""}>Other Page</RouterLink>
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
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialYoutube />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialInstagram />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialFacebook />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ">
                        <Icon color="#ed7812" w={9} h={9}>
                            <TiSocialTwitter />
                        </Icon>
                    </ChakraLink>
                    <ChakraLink href="https://youtu.be/dQw4w9WgXcQ">
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