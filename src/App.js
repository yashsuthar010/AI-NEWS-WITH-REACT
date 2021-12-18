import React,{useEffect, useState} from 'react';
// import Homepage from './component/Homepage';
import Start from './component/Start';

import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
// import Newscard from './CardsPage.js/NewsCards';



const alankey = '7019628ea5599339fd5fcdc8aeb654c92e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);


  useEffect(() => {
    
    alanBtn({
        key: alankey,
        onCommand: ({command, articles, number}) => {
            if(command ==='newHeadlines'){
              setNewsArticles(articles);
              setActiveArticle(-1);
            }else if(command === 'highlight'){
              setActiveArticle((prevActiveArticle) => prevActiveArticle +1);
            }else if(command === 'open'){
              const parsedNumber = number.length >2 ? wordsToNumbers(number, {fuzzy:true}) : number;
              const article = articles[parsedNumber -1]
              if(parsedNumber>20){
                alanBtn().playText('please try that again');
              }else if(article){
                window.open(article.url, '_blank');
                alanBtn().playText('opening..')
              }
            }
          }
        })
      }, [])
    
  return (
    
    <div>
      <Start articles = {newsArticles} activeArticle={activeArticle}/>
    </div>
    )
  
  }

export default App;
