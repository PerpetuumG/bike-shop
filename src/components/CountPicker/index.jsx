import React, {useContext} from "react";
import {Flex, Text} from "components/ui";
import {Button, Input} from "./styled";
import Context from "containers/context/context";


function CountPicker() {
    const {count, setCount} = useContext(Context)
    return (
        <Flex justify={'flex-start'} margin={'20px 0 30px'}>
            <Text weight={500} margin={'0 30px 0 0'}>
                Количество
            </Text>

            <Flex>
                <Button>-</Button>
                <Input></Input>
                <Button>+</Button>
            </Flex>
        </Flex>
    )
}

export default CountPicker