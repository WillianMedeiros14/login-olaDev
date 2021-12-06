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
    margin-bottom: 86px;
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

export const ContainerOptionSingUp = styled.View `
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`;


export const StrokeDetail = styled.Text `
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
`;

export const TextNoAccount = styled.Text `
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.Roboto_400Regular};
`;

export const ButtonSingUp = styled.TouchableOpacity `
  
`;

export const TextButtonSingUp = styled.Text `
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.Roboto_700Bold};
`;
  