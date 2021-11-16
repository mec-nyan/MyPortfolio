import './terminal.css'


export default function Terminal() {

  return (
    <div className='terminalContainer'>
      <div className='terminal'>
        <div className='titlebar'>
          <div className='decoration'></div>
          <span className='termTitle'>Terminal : vim</span>
          <div className='decoration'>
            <span className='ball'></span>
            <span className='ball'></span>
            <span className='ball'></span>
          </div>
        </div>

        <div className='termScreen'>
          <code>
            <pre><b>  1</b>  Skills:</pre>
            <pre><b>  2</b>  </pre>
            <pre><b>  3</b>  Javascript</pre>
            <pre><b>  4</b>  HTML5</pre>
            <pre><b>  5</b>  CSS3</pre>
            <pre><b>  6</b>  </pre>
            <pre><b>  7</b>  React</pre>
            <pre><b>  8</b>  Redux</pre>
            <pre><b>  9</b>  React-router</pre>
            <pre><b> 10</b>  Mongodb</pre>
            <pre><b> 11</b>  Postgresql</pre>
          </code>
        </div>
      </div>
    </div>
  )
}
