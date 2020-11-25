import React from 'react'


function getDateString(dateTimeStr){
    return new Date(dateTimeStr).toDateString()
}

const NewsItem = ({item}) => (
    <div className='card mb-4'>
        {item.urlToImage && (
            <img 
                src={item.urlToImage}
                className='card-image-top'
                alt={item.title}
                height='200'
            /> 
        )}
        <div className='card-body'>
            <a 
                href={item.url} 
                target='_blank' 
                rel="noopener noreferrer" 
                style={{color:'#42424'}}
            >
                <h4 className='card-title'>{item.title}</h4>
            </a>
            <a 
                href={item.url} 
                target='_blank' 
                rel="noopener noreferrer" 
                style={{color:'#42424'}}
            >
                <h4>{item.content}</h4>
            </a>
            <div className='mt-2 d-flex align-items-center'>
                <small>
                    <strong>
                        Published At {getDateString(item.publishedAt)}
                    </strong>
                </small>
                <div
                    className='ml-auto'
                    style={{
                        padding: '0.25rem 0.5rem',
                        backgroundColor: '#ededed',
                        color: '#424242',
                        display: 'inline-block',
                        borderRadius: '0.25rem'
                    }}
                >
                    <small>{item.source.name}</small>
                </div>
            </div>
        </div>
    </div>
)

function NewsList({news}) {
    return (
        <div>
        {news && news.length == 0 && <h4>There are no news</h4>}
        {news && news.map(item => <NewsItem key={item.title} item={item} />)}
        </div>
    )
}

export default NewsList
