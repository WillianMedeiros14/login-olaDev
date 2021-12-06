import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { 
    Container,
    Title,
    TextInput,
    ContainerInputPassword,
    ButtonSeePassword,
    IconSeePassword,
} from './styles';

interface Props extends TextInputProps {
    title: string;
    activeInputPassword?: boolean;
}

export function Input({title, activeInputPassword, ...rest}:Props){

    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <Container>
            <Title>{title}</Title>
            {
                activeInputPassword ? 
                <ContainerInputPassword>
                    <TextInput
                        {...rest}
                        secureTextEntry={!showPassword}
                        activeInputPassword
                    />

                    <ButtonSeePassword onPress={() => setShowPassword(prevState => !prevState)}>
                        <IconSeePassword
                            name={showPassword ? 'md-eye' : 'md-eye-off'}
                            size={24}
                            color="#00000099"
                        />
                    </ButtonSeePassword>
                </ContainerInputPassword>
                :
                
                <TextInput
                    {...rest}
                    secureTextEntry={!showPassword}
                />
                
            }
        </Container>
    );
}