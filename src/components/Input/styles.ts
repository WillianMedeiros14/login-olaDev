import styled, { css } from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

interface Props {
    activeInputPassword?: boolean;
}

export const Container = styled.View<Props> `
    width: 100%;
    margin-bottom: 16px;
`;

export const Title = styled.Text `
    font-size: 11px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.Roboto_400Regular};
    margin-bottom: 4px;
`;

export const ContainerInputPassword = styled.View `
    width: 100%;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-width: 1px;
    border-color: rgba(37, 50, 116, 0.28);
    border-radius: 6px;
`;


export const TextInput = styled.TextInput<Props> `
    flex: 1;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    border-width: ${({ activeInputPassword }) => activeInputPassword ? '0px' :  '1px'};
    border-color:  rgba(37, 50, 116, 0.28);
    padding-top: 16px;
    padding-right: 20px;
    padding-bottom: 16px;
    padding-left: 20px;
`;

export const ButtonSeePassword = styled.TouchableOpacity`
    padding-top: 5px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
`;

export const IconSeePassword = styled(Ionicons)`
    
`;
