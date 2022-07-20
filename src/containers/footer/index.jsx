import React from 'react';
import {Wrapper, Flex} from "components/ui";
import {ReactComponent as Logo} from "assets/logo.svg";
import {ReactComponent as Twitter} from "assets/twitter.svg";
import {ReactComponent as Facebook} from "assets/facebook.svg";
import {ReactComponent as Telegram} from "assets/telegram.svg";
import {FooterSC, LinkContainer} from "./styled";

function Footer() {
    return (
        <FooterSC>
            <Wrapper height={'100%'}>
                <Flex height={'100%'} justify={'space-between'}>
                    <Logo></Logo>
                    <LinkContainer>
                        <a href="https://twitter.com" rel={'noreferrer'} target={'_blank'}><Twitter></Twitter></a>
                        <a href="https://facebook.com" rel={'noreferrer'} target={'_blank'}><Facebook></Facebook></a>
                        <a href="https://telegram.org" rel={'noreferrer'} target={'_blank'}><Telegram></Telegram></a>
                    </LinkContainer>
                </Flex>
            </Wrapper>
        </FooterSC>
    )
}

export default Footer