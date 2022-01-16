import React from "react";
import '../CSS/NewsFetcher.css'
import '../CSS/GridLayouts.css'


class NewsFetcher extends React.Component{

    constructor(props)
    {
        super(props);

        
        
        this.state={
            NewsTitle:[],
            NewsDescription:[],
            NewsContent:[],
            NewsUrl:[],
            NewsImage:[],
            NewsSourceName:[],
            NewsPublishedAt:[],
            searchKey:this.props.searchKey
        }
    }


        //use State does not work in class component so we use componentDidUpdate function 

        componentDidUpdate(prevProps)
        {
            if(this.props.searchKey!==prevProps.searchKey)
            {
                this.setState({searchKey:this.props.searchKey})
                this.FetchNews();
            }
        }

        componentDidMount()
        {
            this.FetchNews();
        }

        FetchNews()
        {
            const searchKey='nyse';
            const pointerToThis=this;
            const API_KEY='811c3dd1f23caeab7fccd24499cc3146';
            const API_CALL='https://gnews.io/api/v4/search?q='+this.props.searchKey+'&token='+API_KEY;

            const NewsTitleFunction=[];
            const NewsDescriptionFunction=[];
            const NewsContentFunction=[];
            const NewsUrlFunction=[];
            const NewsUrltoImageFunction=[];
            const NewsPublishedAtFunction=[];
            const NewsSourceNameFunction=[];

            fetch(API_CALL)
            .then(function(response)
            {
                return response.json();
            })

            .then(function(data)
            {
                for(var key in data['articles'])
                {
                    NewsTitleFunction.push(data['articles'][key]['title']);
                    NewsDescriptionFunction.push(data['articles'][key]['description']);
                    NewsContentFunction.push(data['articles'][key]['content']);
                    NewsUrlFunction.push(data['articles'][key]['url']);
                    NewsUrltoImageFunction.push(data['articles'][key]['image']);
                    NewsPublishedAtFunction.push(data['articles'][key]['publishedAt']);
                    NewsSourceNameFunction.push(data['articles'][key]['source']['name']);

                }

                pointerToThis.setState({
                    NewsTitle:NewsTitleFunction,
                    NewsDescription:NewsDescriptionFunction,
                    NewsContent:NewsContentFunction,
                    NewsUrl:NewsUrlFunction,
                    NewsImage:NewsUrltoImageFunction,
                    NewsPublishedAt:NewsPublishedAtFunction,
                    NewsSourceName:NewsSourceNameFunction,

                })
            })

        }

        render()
        {
            return(
                <>
                <div className="GridLayout2">
                    {
                        this.state.NewsTitle.map((title,i)=>(
                            // <a key={i} href={this.state.NewsUrl[i]} target='_blank'>
                            <div  className="News">
                    <img src={this.state.NewsImage[i]}/>
                    <p>SOURCE : {this.state.NewsSourceName[i]}</p>
                    <p>PUBLISHED AT : {this.state.NewsPublishedAt[i]}</p>
                    <h2>{this.state.NewsTitle[i]}</h2>
                    <p>{this.state.NewsDescription[i]}<span className="read__more"><a key={i} href={this.state.NewsUrl[i]} target='_blank'>...Read More</a></span></p>
                </div>
                // </a>
                        ))
                    }
                
                </div>
                </>
            )
        }
}

export default NewsFetcher;