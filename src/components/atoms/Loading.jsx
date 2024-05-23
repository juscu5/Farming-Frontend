import loading from '../../assets/loading.gif';
import './Loading.scss';

const Loading = () => {
  return (
    <div className={`loading-overlay visible`}>
      <div className="loading-content">
        <img src={loading} alt="Loading" className="loading-gif" />
      </div>
    </div>
  )
}

export default Loading

