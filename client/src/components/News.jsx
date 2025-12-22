
import '../index.css';

export default function News(props) {
  return (
    <div>
      <div className="news-card" >
        {props.item.name.map((item) => (
                <div className='single_news' style={{backgroundColor: props.mode=='dark' ? '#212121 ' : 'white',border: props.mode=='dark' ? ' 1px solid #2c2e30ff' : ' 1px solid white'}}>
                <h4>{item.title}</h4>
                <img src={item.image} alt="news" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}/>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{color:'#6793c0',textDecoration:'none'}}>🔗 Read More</a>
                <p><em>Source: {item.source}</em></p>
                </div>
        ))}
      </div>
    </div>
  )
}
