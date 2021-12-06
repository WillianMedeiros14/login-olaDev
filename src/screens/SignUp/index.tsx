import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import Logo from '../../assets/image/logo.svg';
import IconGoBack from '../../assets/icon/iconGoBack.svg';

import { 
    Container,
    Scroll,
    ContainerImage,
    Main,
    Title,
    Form,
    ButtonGoback
} from './styles';

export function SignUp(){
    const navigation = useNavigation();
    
    return (
        <Container>
            <Scroll >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
            />
           
                <Main>
                    <ContainerImage>
                        <ButtonGoback onPress={() => navigation.goBack()}>
                            <IconGoBack />
                        </ButtonGoback>
                        <Logo />
                    </ContainerImage>

                    <Title>Create you account</Title>
                    
                    <Form>
                        <Input
                            title="Email"
                            placeholder="willian@gmail.com"
                            keyboardType="email-address"
                        />

                        <Input
                            title="Password"
                            placeholder="********"
                            activeInputPassword
                        />

                        <Input
                            title="Confirm password"
                            placeholder="********"
                            activeInputPassword
                        />

                        <Button 
                            title="Sign Up"
                        />

                    </Form>
                </Main>
            </Scroll>
        </Container>
    );
}