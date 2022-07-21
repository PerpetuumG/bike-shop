import React, {useState, useContext} from "react";
import {Flex, Button, Title, Text} from "components/ui";
import TextField from "components/TextField";
import Context from "containers/context/context";

import {BorderContainer} from "./styled";

import Checkout from "assets/checkout.png";

const Tabs = ['Оформить заказ', 'Проверить статус заказа']

function Form() {
    const {size, color, count} = useContext(Context)

    const [selectedTab, setSelectedTab] = useState(0)

    const [submitIsDone, setSubmitDone] = useState('')

    const [status, setStatus] = useState()

    const [formData, setFormData] = useState({
        name: {
            value: '',
            error: false
        },
        email: {
            value: '',
            error: false
        },
        phone: {
            value: '',
            error: false
        },
        date: {
            value: new Date().toISOString().replace(/T.+/g, ''),
            error: false
        }
    })

    const [deliveryNumber, setDeliveryNumber] = useState({
        value: '',
        error: false
    })

    const onChangeFormData = (key) => (e) => {
        setFormData((prev) => ({...prev, [key]: {...prev[key], value: e.target.value}}))
    }

    const onChangeDelivery = (e) => {
        setDeliveryNumber((prev) => ({...prev, value: e.target.value}))
    }

    const validateFormData = () => {
        let obj = {...formData}
        Object.keys(obj).forEach((key) => obj[key].error = !obj[key].value)
        setFormData(obj)

        return Object.keys(obj).every(key => !obj[key].error)
    }

    const onSubmitFormData = (e) => {
        e.preventDefault()
        if (validateFormData()) {
            fetch('http://localhost:3000/bike-request', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset = UTF - 8'
                },
                body: JSON.stringify({
                    'name': formData.name.value,
                    'date': formData.date.value,
                    'email': formData.email.value,
                    'phone': formData.phone.value,
                    size,
                    color,
                    count
                })
            }).then(res => res.json()).then(({id}) => setSubmitDone(`Ваш код заказа ${id}`))
        }
    }

    const validateDelivery = () => {
        setDeliveryNumber((prev) => ({...prev, error: !prev.value}))
    }
    const onSubmitDelivery = (e) => {
        e.preventDefault()
        if (validateDelivery()) {
            fetch(`http://localhost:3000/bike-request/${deliveryNumber.value}`)
                .then(res => {
                    setStatus(deliveryNumber.value ? res.status : '')
                })
        }
    }

    return (
        <BorderContainer>
            <Flex>
                {Tabs.map((tab, index) => (
                    <Flex flex={1} key={tab}>
                        <Button
                            width={'100%'}
                            color={selectedTab === index ? '#282828' : '#fff'}
                            background={selectedTab === index ? '#fff' : '#020106'}
                            onClick={() => setSelectedTab(index)}
                        >
                            {tab}
                        </Button>
                    </Flex>
                ))}
            </Flex>
            {selectedTab === 0 && (
                <Flex padding={'60px 80px'} direction={'column'}>
                    <img src={Checkout} alt=""/>
                    <Title margin={'30px 0 100px'}>fuel ex 9.8</Title>
                    <form onSubmit={onSubmitFormData}>
                        <TextField
                            placeholder={'ФИО'}
                            errorLabel={'Пожалуйста, введите ваше ФИО.'}
                            error={formData['name'].error}
                            value={formData['name'].value}
                            onChange={onChangeFormData('name')}
                        ></TextField>
                        <TextField
                            placeholder={'E-mail'}
                            errorLabel={'Пожалуйста, введите ваш E-mail.'}
                            error={formData['email'].error}
                            value={formData['email'].value}
                            onChange={onChangeFormData('email')}
                        ></TextField>
                        <TextField
                            placeholder={'Телефон'}
                            errorLabel={'Пожалуйста, введите номер телефона.'}
                            error={formData['phone'].error}
                            value={formData['phone'].value}
                            onChange={onChangeFormData('phone')}
                        ></TextField>
                        <TextField
                            disabled
                            placeholder={'Дата доставки'}
                            errorLabel={'Пожалуйста, укажите дату доставки.'}
                            error={formData['date'].error}
                            value={formData['date'].value}
                            onChange={onChangeFormData('date')}
                        ></TextField>
                        {submitIsDone || <Button type={"submit"}>Оформить заказ</Button>}
                    </form>
                </Flex>
            )}
            {selectedTab === 1 && (
                <Flex padding={'60px 80px'} direction={'column'}>
                    <Text margin={'30px 0 100px'}>Введите номер заказа,
                        что бы узнать о его статусе:</Text>
                    <form action={''} onSubmit={onSubmitDelivery}>
                        <TextField
                            placeholder={'номер заказа'}
                            errorLabel={'Пожалуйста, введите код заказа.'}
                            error={formData['phone'].error}
                            value={formData['phone'].value}
                            onChange={onChangeDelivery}
                        ></TextField>
                        <Button>получить информацию</Button>
                        <p>
                            {({
                                200: 'Заказ ожидает отправки',
                                400: 'Неверный код заказа',

                            }[status] || '')}
                        </p>
                    </form>
                </Flex>
            )}

        </BorderContainer>
    )
}

export default Form