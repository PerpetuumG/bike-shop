import React from 'react';
import {Wrapper, Flex, Title, Text, Hr, Button} from "components/ui";

function Product() {
    return (
        <section>
            <Wrapper>
                <Title withBorder margin={'70px 0 30px'}>
                    встречай нового короля
                </Title>
                <Text margin={'0 0 60px'}>
                    Fuel EX 9.8 поднимет вашу поездку на новый уровень с пакетом запчастей, который обеспечивает
                    высочайшую производительность.
                    Так же иы расширили наш размерный ряд, чтобы обеспечить удобство для всех райдеров. Вы можете
                    выбрать максимальный размер колес, который подойдет для вашей рамы: рамам XS доступны колеса 27,5
                    дюймов, на рамы S можно выбрать между 27,5 дюймов или 29 дюймов, а размерам от M до XL доступны
                    колеса 29 дюймов.
                    Fuel EX 9.8 - отличное вложение для одного велосипеда, который может все.
                </Text>
                <Flex gap={'30px'}>
                    <Flex flex={1}>
                        Slider
                    </Flex>
                    <Flex width={'470px'} direction={'column'} align={'flex-start'} justify={'space-between'}>
                        <Title withBorder>
                            fuel ex9.8<
                            /Title>
                        <Flex justify={'space-between'} width={'100%'} margin={'30px 0 20px'}>
                            <Text weight={500}>
                                2021
                            </Text>
                            <Text weight={500} color={'#b5b5b5'}>
                                Model 33408
                            </Text>
                        </Flex>
                        <Text color={'#020106'} weight={700} size={'26px'}>
                            $5.499.99-$5.999.99
                        </Text>
                        <Hr></Hr>
                        <Text margin={'5px 0'}>
                            Fuel EX 9.8 сочетает в себе легкую полностью карбоновую раму с деталями, выбранными с
                            учетом наилучшего соотношения цены и качества. Высококачественная подвеска FOX с
                            модернизированными передними и задними амортизаторами, карбоновые колеса с задней ступицей
                            Rapid Drive и сверхгладкая широкодиапазонная трансмиссия Shimano XT придают этой модели
                            дополнительные преимущества, которые вы заметите с первого нажатия педали.
                        </Text>
                        <Hr></Hr>
                        <Flex width={'100%'} align={'flex-start'}>
                            <Flex flex={1} justify={'flex-start'}>
                                ColorPicker
                            </Flex>
                            <Flex flex={1}>
                                SizePicker
                            </Flex>
                        </Flex>
                        CountPicker
                        <Button>
                            Оформить заказ
                        </Button>
                    </Flex>
                </Flex>
            </Wrapper>
        </section>
    )
}

export default Product