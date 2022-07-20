import React, {useContext} from "react";
import {Flex, Text} from "components/ui";
import Context from "containers/context/context";
import {Button} from "./styled";

function ColorPicker() {
    const {color, setColor} = useContext(Context)
    return (
        <Flex direction={'column'} align={'flex-start'}>
            <Text weight={500}>
                Цвет
            </Text>

            <Flex gap={'12px'} margin={'20px 0 0'}></Flex>
        </Flex>
    )
}

export default ColorPicker