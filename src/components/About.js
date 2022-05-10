import Intro from './Intro';
import Container from '../styles/Container'
import Text from '../styles/Text'
import styled from 'styled-components'
import heroImage from '../img/Rectangle17.png'
import teamImage from '../img/unsplash_RiDxDgHg7pw.png'
import Flexbox from '../styles/Flexbox'

const IntroContainer = styled(Container)`
  padding-top: 20px;
  width: 100%;
  height: fit-content;
  background-color: ${props => props.theme === 'light' ? "#F7EDEA " : '#1B1B1B'};
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme === 'light' ? "#FAF8FF" : '#0D0D0D'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding ||'20px'};
`;

const HeroImage = styled.div`
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 75vw;
  height: 350px;
  border-radius: 10px;
  margin: 50px 0 20px 160px;
`;

const TextTheme = styled(Text)`
    width: 15vw;
    height: 35px;
    margin-top: 100px
    font-weight: 600;
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 50px;
    -webkit-transform: rotate(-90deg);
    position: absolute;
    top: 320px;
`;

const OurNo = styled(TextTheme)`
    position: absolute;
    top: 870px;
    left: 80vw;
`;

const OurTeam = styled(TextTheme)`
    position: absolute;
    top: 1400px;
    
`;

const OurPat = styled(TextTheme)`
    position: absolute;
    top: 2000px;
    left: 80vw;
`;

const Talk = styled(TextTheme)`
    position: absolute;
    top: 2340px;
    
`;

const Text1 = styled(Text)`
    font-size: 18px;
    font-weight: 400;
`;

const Par = styled(Text)`
    width: 75vw;
    height: 350px;
    margin: 50px 0 0 160px;
    font-size: 18px;
    font-weight: 400;
    margin-top: 50px;
`;

const Par2 = styled(Par)`
    margin-top: 150px;
`;

const FlexBox = styled(Flexbox)`
    margin: 0 0 50px -50px;  
`;

const FlexBox2 = styled(Flexbox)`
    margin: 0 45px 50px -50px;  
`;


const ImageFlexBox = styled(Flexbox)`
    margin: 350px 100px -10px 60px;  
`;

const ImageFlexBoxI = styled(Flexbox)`
    margin: -210px 100px 50px 60px;  
`;

const ImageFlexBox3 = styled(Flexbox)`
    margin: 250px 200px -10px 160px;  
`;

const ImageFlexBoxI3 = styled(Flexbox)`
    margin: -210px 200px 50px 160px;  
`;

const ImageFlexBoxB = styled(Flexbox)`
    margin: 300px 100px -10px 60px;  
`;

const ImageFlexBox3B = styled(Flexbox)`
    margin: 80px 200px -10px 160px;  
`;

const TeamImage = styled.div`
  background-image: url(${teamImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

const Box = styled.div`
  width: 150px;
  height: 70px;
  background-color: #F7EAF0;
  color: #000000;
  border: 1px solid #AC0C00;
  text-align: center;
  border-radius: 10px;
`;

const BoxB = styled(Box)`
  background-color: #00506D;
  color: #ffffff;
  border: 1px solid #00506D;
  text-align: center;
  border-radius: 10px;
  padding-top: 20px;
`;

const Button = styled.div`
  width: 250px;
  height: 50px;
  background-color: #AC0C00;
  color: #ffffff;
  border: 1px solid #AC0C00;
  text-align: center;
  margin: auto;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  padding-top: 20px;
  margin-top: -250px;
  margin-bottom: 150px;
`;


function About({background, themeswitch}) {
  return (
          <div>
              <IntroContainer theme={background}>
                <Intro background={background} themeswitch={themeswitch} />
             </IntroContainer> 
             <Section theme={background}>
                <TextTheme theme={background} as='h1'>About Drint.io </TextTheme>
                 <HeroImage src={heroImage} alt='Hero Image'/>
                 <Par theme={background} as='p' text-align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sit ridiculus elementum turpis quisque. Justo mauris nibh tellus ipsum purus vulputate tristique justo. Sagittis volutpat sed a nulla porttitor pellentesque a. Viverra id donec cursus sit ipsum mauris nec. Mattis turpis leo ultricies turpis. Congue mauris ornare id nibh condimentum. Auctor id dignissim amet, eget viverra quis. Fusce sed imperdiet pharetra sed egestas magna adipiscing. Etiam ultrices lorem tortor, ac duis luctus libero. Viverra quisque porttitor posuere tincidunt dolor velit. Nulla ac lectus vivamus mauris faucibus. Commodo, volutpat nisi tempus nec. Orci dolor lorem curabitur mattis venenatis, lorem. </Par> 


                 <FlexBox justify='space-evenly' align='center'>
                    <Text1 theme={background} as='p'> $659M </Text1> 
                    <Text1 theme={background} as='p'> 659k </Text1> 
                    <Text1 theme={background} as='p'> 5.1 million </Text1> 
                </FlexBox>
                 <FlexBox2 justify='space-evenly' align='center'>
                    <Text1 theme={background} as='p'> Trading Volume </Text1> 
                    <Text1 theme={background} as='p'> NFTs Created </Text1> 
                    <Text1 theme={background} as='p'> Total Users </Text1> 
                </FlexBox2>
                <OurNo theme={background} as='p'>Our Numbers</OurNo>


                <OurTeam theme={background} as='p'>Our Team</OurTeam>
                <ImageFlexBox justify='space-evenly' align='center'>
                    <Box theme={background}> <p padding-top='10px'>Mike Ferell <br /> CEO </p> </Box>   
                    <Box theme={background}> <p padding-top='10px'>Mike Ferell <br /> CEO </p> </Box>   
                    <Box theme={background}> <p padding-top='10px'>Mike Ferell <br /> CEO </p> </Box>   
                    <Box theme={background}> <p padding-top='10px'>Mike Ferell <br /> CEO </p> </Box>   
                </ImageFlexBox>
                <ImageFlexBoxI justify='space-evenly' align='center'>
                    <TeamImage src={teamImage} alt='Team Image'/>   
                    <TeamImage src={teamImage} alt='Team Image'/> 
                    <TeamImage src={teamImage} alt='Team Image'/> 
                    <TeamImage src={teamImage} alt='Team Image'/> 
                </ImageFlexBoxI>


                <ImageFlexBox3 justify='space-evenly' align='center'>
                    <Box theme={background}> <p padding-top='10px'>Mike Ferell <br /> CEO </p> </Box>   
                    <Box theme={background}> <p padding-top='10px'>Mike Ferell <br /> CEO </p> </Box>   
                    <Box theme={background}> <p padding-top='10px'>Mike Ferell <br /> CEO </p> </Box>   
                </ImageFlexBox3>
                <ImageFlexBoxI3 justify='space-evenly' align='center'>
                    <TeamImage src={teamImage} alt='Team Image'/>
                    <TeamImage src={teamImage} alt='Team Image'/>
                    <TeamImage src={teamImage} alt='Team Image'/>
                </ImageFlexBoxI3>


                <ImageFlexBoxB justify='space-evenly' align='center'>
                    <BoxB theme={background}> <p>SAHCO</p> </BoxB>   
                    <BoxB theme={background}> <p>SAHCO</p> </BoxB>   
                    <BoxB theme={background}> <p>SAHCO</p> </BoxB>   
                    <BoxB theme={background}> <p>SAHCO</p> </BoxB>   
                </ImageFlexBoxB>
                <ImageFlexBox3B justify='space-evenly' align='center'>
                    <BoxB theme={background}> <p>SAHCO</p> </BoxB>   
                    <BoxB theme={background}> <p>SAHCO</p> </BoxB>   
                    <BoxB theme={background}> <p>SAHCO</p> </BoxB>   
                </ImageFlexBox3B>
                <OurPat theme={background} as='p'>Our Patners</OurPat>


                <Talk theme={background} as='p'>Want to Talk?</Talk>
                <Par2 theme={background} as='p' text-align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis sit ridiculus elementum turpis quisque. Justo mauris nibh tellus ipsum purus vulputate tristique justo. Sagittis volutpat sed a nulla porttitor pellentesque a. Viverra id donec cursus sit ipsum mauris nec </Par2>
                <Button>Contact Us</Button> 
             </Section>

            
          </div> 
  );
}

export default About;