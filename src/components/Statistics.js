import Intro from './Intro';
import Container from '../styles/Container'
import styled from 'styled-components'
import Text from '../styles/Text'
import Flexbox from '../styles/Flexbox'
import lineImage from '../img/Line4.png'
import clientD from '../img/clientD.png'
import clientB from '../img/clientB.png'

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

const HTheme = styled(Text)`
    margin-top: 100px
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-left: 20%;
    margin-bottom: 50px;
`;

const Par = styled(Text)`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin: -30px 0 50px 10%;
`;

const Par1 = styled(Text)`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 30px;
`;

const Par2 = styled(Par1)`
    font-size: 18px;
`;

const Par4 = styled(Par2)`
    margin-left: -65px;
`;

const Par5 = styled(Par2)`
    margin-right: -20px;
`;

const Par6 = styled(Par2)`
    margin-right: -40px;
`;

const Par3 = styled(Par2)`
    margin-left: -80px;
`;

const FlexBox = styled(Flexbox)`
    margin: 30px 0px 50px -50px;  
`;

const InnerFlex = styled(Flexbox)`
    margin-left: -70px;  
`;

const Line = styled.div`
  background-image: url(${lineImage});
  width: 90%;
  height: 1px;
  margin: -20px 0 0 50px;
`;

const Line2 = styled(Line)`
  margin-top: -45px;
`;

const ClientD = styled.div`
  background-image: url(${clientD});
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin-top: 10px;
`;

const ClientB = styled(ClientD)`
  background-image: url(${clientB});
`;


function Statistics({background, themeswitch}) {
  return (
    <div>
        <IntroContainer theme={background}>
            <Intro background={background} themeswitch={themeswitch} />
        </IntroContainer>
        <Section theme={background}>
            <HTheme> Top NFTs </HTheme>
            <Par>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget.</Par>

            <FlexBox justify='space-evenly' align='center'>
                    <Par1 theme={background}> Collection</Par1> 
                    <Par1 theme={background}> Volume </Par1> 
                    <Par1 theme={background}> 24h % </Par1> 
                    <Par1 theme={background}> 7h % </Par1> 
                    <Par1 theme={background}> Floor Price </Par1> 
                    <Par1 theme={background}> Owners </Par1> 
                    <Par1 theme={background}> Item </Par1> 
            </FlexBox>
            <Line src={lineImage} alt='Line Image'/>
            
            <FlexBox justify='space-evenly' align='center'>
                    <InnerFlex align='left'>
                    <Par2 theme={background} padding='0px 5px'> 1 &nbsp;</Par2>
                    <ClientD src={clientD} alt='client' padding='0px 5px' />
                    <Par2 theme={background} padding='0px 10px'> &nbsp; @Creator</Par2>
                    </InnerFlex>
                    <Par3 theme={background}> 10,453.67</Par3> 
                    <Par4 theme={background}> +23.45 %</Par4> 
                    <Par4 theme={background}> +13.22 % </Par4> 
                    <Par2 theme={background}> 7.23</Par2> 
                    <Par5 theme={background}> 6.2K </Par5> 
                    <Par6 theme={background}> 9.8K </Par6> 
            </FlexBox>
            <Line2 src={lineImage} alt='Line Image'/>

            <FlexBox justify='space-evenly' align='center'>
                    <InnerFlex align='left'>
                    <Par2 theme={background} padding='0px 5px'> 1 &nbsp;</Par2>
                    <ClientB src={clientB} alt='client' padding='0px 5px' />
                    <Par2 theme={background} padding='0px 10px'> &nbsp; @Creator</Par2>
                    </InnerFlex>
                    <Par3 theme={background}> 10,453.67</Par3> 
                    <Par4 theme={background}> +23.45 %</Par4> 
                    <Par4 theme={background}> +13.22 % </Par4> 
                    <Par2 theme={background}> 7.23</Par2> 
                    <Par5 theme={background}> 6.2K </Par5> 
                    <Par6 theme={background}> 9.8K </Par6> 
            </FlexBox>
            <Line2 src={lineImage} alt='Line Image'/>

            <FlexBox justify='space-evenly' align='center'>
                    <InnerFlex align='left'>
                    <Par2 theme={background} padding='0px 5px'> 1 &nbsp;</Par2>
                    <ClientD src={clientD} alt='client' padding='0px 5px' />
                    <Par2 theme={background} padding='0px 10px'> &nbsp; @Creator</Par2>
                    </InnerFlex>
                    <Par3 theme={background}> 10,453.67</Par3> 
                    <Par4 theme={background}> +23.45 %</Par4> 
                    <Par4 theme={background}> +13.22 % </Par4> 
                    <Par2 theme={background}> 7.23</Par2> 
                    <Par5 theme={background}> 6.2K </Par5> 
                    <Par6 theme={background}> 9.8K </Par6> 
            </FlexBox>
            <Line2 src={lineImage} alt='Line Image'/>

            <FlexBox justify='space-evenly' align='center'>
                    <InnerFlex align='left'>
                    <Par2 theme={background} padding='0px 5px'> 1 &nbsp;</Par2>
                    <ClientB src={clientB} alt='client' padding='0px 5px' />
                    <Par2 theme={background} padding='0px 10px'> &nbsp; @Creator</Par2>
                    </InnerFlex>
                    <Par3 theme={background}> 10,453.67</Par3> 
                    <Par4 theme={background}> +23.45 %</Par4> 
                    <Par4 theme={background}> +13.22 % </Par4> 
                    <Par2 theme={background}> 7.23</Par2> 
                    <Par5 theme={background}> 6.2K </Par5> 
                    <Par6 theme={background}> 9.8K </Par6> 
            </FlexBox>
            <Line2 src={lineImage} alt='Line Image'/>

            <FlexBox justify='space-evenly' align='center'>
                    <InnerFlex align='left'>
                    <Par2 theme={background} padding='0px 5px'> 1 &nbsp;</Par2>
                    <ClientB src={clientB} alt='client' padding='0px 5px' />
                    <Par2 theme={background} padding='0px 10px'> &nbsp; @Creator</Par2>
                    </InnerFlex>
                    <Par3 theme={background}> 10,453.67</Par3> 
                    <Par4 theme={background}> +23.45 %</Par4> 
                    <Par4 theme={background}> +13.22 % </Par4> 
                    <Par2 theme={background}> 7.23</Par2> 
                    <Par5 theme={background}> 6.2K </Par5> 
                    <Par6 theme={background}> 9.8K </Par6> 
            </FlexBox>
            <Line2 src={lineImage} alt='Line Image'/>

            <FlexBox justify='space-evenly' align='center'>
                    <InnerFlex align='left'>
                    <Par2 theme={background} padding='0px 5px'> 1 &nbsp;</Par2>
                    <ClientD src={clientD} alt='client' padding='0px 5px' />
                    <Par2 theme={background} padding='0px 10px'> &nbsp; @Creator</Par2>
                    </InnerFlex>
                    <Par3 theme={background}> 10,453.67</Par3> 
                    <Par4 theme={background}> +23.45 %</Par4> 
                    <Par4 theme={background}> +13.22 % </Par4> 
                    <Par2 theme={background}> 7.23</Par2> 
                    <Par5 theme={background}> 6.2K </Par5> 
                    <Par6 theme={background}> 9.8K </Par6> 
            </FlexBox>
            <Line2 src={lineImage} alt='Line Image'/>

            <FlexBox justify='space-evenly' align='center'>
                    <InnerFlex align='left'>
                    <Par2 theme={background} padding='0px 5px'> 1 &nbsp;</Par2>
                    <ClientB src={clientB} alt='client' padding='0px 5px' />
                    <Par2 theme={background} padding='0px 10px'> &nbsp; @Creator</Par2>
                    </InnerFlex>
                    <Par3 theme={background}> 10,453.67</Par3> 
                    <Par4 theme={background}> +23.45 %</Par4> 
                    <Par4 theme={background}> +13.22 % </Par4> 
                    <Par2 theme={background}> 7.23</Par2> 
                    <Par5 theme={background}> 6.2K </Par5> 
                    <Par6 theme={background}> 9.8K </Par6> 
            </FlexBox>
            <Line2 src={lineImage} alt='Line Image'/>
            
        </Section>
    </div>
  );
}

export default Statistics;