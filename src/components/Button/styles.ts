import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text `
    font-size: 17px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Roboto_700Bold};
    margin-top: 22px;
    margin-bottom: 22px;
`;

export const TextInput = styled.TextInput `
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    border-width: 1px;
    border-color: rgba(37, 50, 116, 0.28);
    padding-top: 16px;
    padding-right: 20px;
    padding-bottom: 16px;
    padding-left: 20px;;
`;