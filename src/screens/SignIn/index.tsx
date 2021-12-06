import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/image/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
    Container,
    Scroll,
    ContainerImage,
    Main,
    Title,
    Form,
    ContainerOptionSingUp,
    StrokeDetail,
    TextNoAccount,
    ButtonSingUp,
    TextButtonSingUp
} from './styles';

export function SignIn(){
    const navigation = useNavigation();

    function handlePageSignUp(){
        navigation.navigate("SignUp");
    }

    return (
        <Container>
         <Scroll >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
            />
           
                <Main>
                    <ContainerImage>
                        <Logo />
                    </ContainerImage>

                    <Title>Login</Title>
                    
                    <Form>
                        <Input
                            title="Email"
                            placeholder="willian@gmail.com"
                            keyboardType="email-address"
                        />

                        <Input
                            title="Password"
                            placeholder="********"
                        />

                        <Button 
                            title="Sign In"
                        />

                        <ContainerOptionSingUp>
                            <StrokeDetail>--- </StrokeDetail>
                            <TextNoAccount>Don't have an account?</TextNoAccount>
                            <ButtonSingUp onPress={handlePageSignUp}>
                                <TextButtonSingUp> Sign up</TextButtonSingUp>
                            </ButtonSingUp>
                            <StrokeDetail> ---</StrokeDetail>
                        </ContainerOptionSingUp>
                    </Form>
                </Main>
            </Scroll>
         
        </Container>
    );
}