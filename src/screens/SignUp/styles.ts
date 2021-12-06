import styled from "styled-components/native";

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    
`;

export const Scroll = styled.ScrollView `
   
`;

export const ContainerImage = styled.View `
    align-items: center;
    margin-top: 35px;
    padding-top: 20px;
    margin-bottom: 86px;
    position: relative;
`;


export const ButtonGoback = styled.TouchableOpacity `
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`;


export const Main = styled.View `
    width: 100%;
    height: 100%;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 20px;
    justify-content: center;
`;

export const Title = styled.Text `
    font-size: 28px;
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.Roboto_700Bold};
    margin-bottom: 40px;
`;


export const Form = styled.View `
   
`;
