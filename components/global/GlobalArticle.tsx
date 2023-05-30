import React from "react";
import styled from "@emotion/styled";

const GlobalArticleContainer = styled.div`
  min-height: 580px;
  min-width: 90%;
  max-width: 980px;
  margin: 1% auto 6% auto;
  background: linear-gradient(#AB5252, #C4B218);
  border-radius: 10px;
  box-shadow: 0 0 20px 10px darkblue;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid;
    border-color: #E0D3AC;
    border-radius: 5px;
    background: linear-gradient(to bottom, #E0D3AC, pearlWhite);
  }
  &:before {
    content: '';
    position: absolute;
    top: 30px; 
    bottom: 30px; 
    left: 50%;
    border-left: 2px solid #E0D3AC;
  }
`;


const ScrollSection = styled.div`
  position: relative;
  background: #F2EEEE;
  border: 2px solid charcoal;
  padding: 20px;
  text-align: center;
  overflow-wrap: break-word;
  font-size: 1.2em;
  box-shadow: inset 0 0 5px #000;
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 50px;
    height: 20px;
    border: 2px solid charcoal;
    border-top: 0;
    border-bottom-left-radius: 100% 50px;
  }
  &:before {
    left: 10px;
    transform: rotate(7deg);
  }
  &:after {
    right: 10px;
    transform: rotate(-7deg);
  }
`;

const LeftSection = styled(ScrollSection)`
  width: 50%;
`;

const RightSection = styled(ScrollSection)`
  width: 50%;
`;


const Header = styled.h2`
 font-size: 1.6em;
 line-height: 1.8;
 font-weight: 600;
 text-align: center;
 margin: 5px auto;
`;

const Paragraph = styled.p`
  background-color: #958888;
  overflow-wrap: break-word;
  font-size: 1.1em;
  color: #F4F4E2;
  line-height: 1.8;
  border-radius: 8px;
  position: relative;
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    width: 10px;
    background: 
      linear-gradient(white 50%, rgba(255,255,255,0) 0%) top left/5px 1px repeat-y,
      linear-gradient(white 50%, rgba(255,255,255,0) 0%) bottom left/5px 1px repeat-y;
    box-shadow: 
      0 0 5px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  
  &:before {
    left: 5px;
  }
  
  &:after {
    right: 5px;
  }
`;
const List = styled.ul`
  background: linear-gradient(to bottom, #FDFEFA, #E8E8E8);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 1.1em;
  color: #333;
  margin: 10px 0;
  padding: 5px 15px;
  position: relative;
  background-color: white;
  border-bottom: 1px solid #ff7f7f;
`;




const GlobalArticle = ({ leftContent, rightContent }) => {
  return (
    <GlobalArticleContainer tabIndex={0}>
      <LeftSection>
        <Header>{leftContent?.header}</Header>
        <Paragraph>{leftContent?.paragraph}</Paragraph>
        <List>
          {leftContent?.listItems?.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
        </List>
      </LeftSection>
      <RightSection>
        <Header>{rightContent?.header}</Header>
        <Paragraph>{rightContent?.paragraph}</Paragraph>
        <List>
          {rightContent?.listItems?.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
        </List>
      </RightSection>
    </GlobalArticleContainer>
  );
};
 

export default GlobalArticle;
