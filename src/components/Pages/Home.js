import Parallex from "../BasicComp/Parallex"
import Container__18 from '../../images/Container__18.jpeg'
import Container__6 from '../../images/Container__6.jpeg'
import Container__1 from '../../images/Container__1.jpg'
import Container__2 from '../../images/Container__2.jpeg'
import Container__7 from '../../images/Container__7.jpeg'
import Article from "../BasicComp/Article"
import Article2 from "../BasicComp/Article2"
import { useEffect } from "react"

const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const dataToSend={
        parallexImage:Container__18,
        parallexTitle:'THE MARKET',
        parallexPara:'Bulls Make Money, Bears Make Money, Pigs Get Slaughtered',
        colorName: "white",
        parallexImage: Container__18,
        parallexTitle: "THE MARKET",
        parallexText: "Bulls make money, bears make money, pigs get slaughtered ",
        articleImage:Container__6,
        articleHeading:"",
        title1:'What is Investing ?',
        title2:'Why to Invest ?',
        title3:'Where to Invest ?',
        title4:'Why Stock Market ?',
        para1:'Investing is the act of allocating resources, usually money, with the expectation of generating an income or profit. You can invest in endeavors, such as using money to start a business, or in assets, such as purchasing real estate in hopes of reselling it later at a higher price.',
        para2:'Investing your money is as important as earning an income. Prudent investments help secure your life financially by achieving your financial goals for the present and the future. Investing helps you to generate a parallel stream of income, create more wealth, and earn returns to beat inflation.',
        para3:'You have numerous investment options to choose from. However, you have to ensure that you are investing in only those options that fall under your risk tolerance and serve your requirements.',
        para4:'Investing in share market gives you an opportunity to earn potentially higher returns on your investment. Thus, venturing here gives you a chance to compound your money in the long run and accumulate wealth for various life goals.',
        article2:{ 
          image1:Container__1,
          para1:"“Most people think the big money in crypto is in day trading, but the holy grail in cryptocurrency industry right now is spotting the gems before the public knows about it. Understanding pre-sale, public sale and pre-exchange purchase arrangements is so vital for massive profits.”",
          image2:Container__2,
          para2:"“A trader needs to be highly skilled and extremely lucky to beat the market consistently. If a trader is highly skilled but not lucky enough or extremely lucky but modestly skilled, he will beat the market occasionally but not consistently. Traders that are modestly skilled and modestly lucky will briefly beat the market but will be behind the market most of the time. Everybody else will lose money on a long-term basis, that is, 90% of the traders.”",
          image3:Container__7,
          para3:"“Humans are not machines. They analyze information through the lenses of their experience, knowledge, and cognitive biases. All of it makes their perception, their unique viewpoint.”",
          heading:"WHAT PROFESSIONAL TRADERS SAY",
          headingQuote:"\"In investing what is comfortable is rarely profitable.\""
        }

    }
    return (
        <div>
            <Parallex dataToSend={dataToSend}/>
            <Article dataToSend={dataToSend}/>
            <Article2 dataToSend={dataToSend}/>

            
        </div>
    )
}

export default Home
