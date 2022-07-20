import React, {useContext} from "react";
import {Flex, Text} from "components/ui";
import {Label, Input, Checked} from "./styled";
import Context from "containers/context/context";

function SizePicker() {
    const {size, setSize} = useContext(Context)
    return (
        <Flex direction={'column'} align={'flex-start'}>
            <Text weight={500}>
                Размер
            </Text>

        </Flex>
    )
}

export default SizePicker