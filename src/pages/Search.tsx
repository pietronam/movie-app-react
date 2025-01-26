import { SearchContentHolder } from "@/components/SearchContentHolder";
import { Field } from "@/components/ui/field";
import { Box, Button, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
    searchQuery: string
}

const Search = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const [searchQuery, setSearchQuery] = useState<string>();

    const onSubmit: SubmitHandler<Input> = (Input) => { setSearchQuery(Input.searchQuery) }
    return (
        <Flex
            minH={"70vh"}
        >
            <VStack
                alignItems={"start"}
            >
                <Box
                    padding={5}
                    paddingLeft={10}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Flex>
                            <Field
                                invalid={!!errors.searchQuery}
                                errorText={errors.searchQuery?.message}>
                                <Heading color={"#ed7812"} size={"md"}>Search</Heading>
                                <Input
                                    {...register("searchQuery", { required: "Input a name to search" })}
                                />
                            </Field>
                        </Flex>
                        <Button
                                type="submit"
                                size="sm"
                                variant="subtle"
                                color={"#b6495f"}
                                bgColor={"#121122"}
                                marginTop={1}
                            >Submit</Button>

                    </form>
                </Box>
                {searchQuery && <SearchContentHolder URI={searchQuery} />}
            </VStack>
        </Flex>
    )
}

export default Search