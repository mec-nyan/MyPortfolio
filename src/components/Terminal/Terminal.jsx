import './terminal.css'


export default function Terminal() {

  return (
    <div className='terminalContainer'>
      <div className='terminal'>
        <div className='titlebar'>
          <div className='decoration'></div>
          <span className='termTitle'>Terminal : Tech skills</span>
          <div className='decoration'>
            <span className='ball'></span>
            <span className='ball'></span>
            <span className='ball'></span>
          </div>
        </div>

        <div className='termScreen'>
          <div className='codeContainer'>
            <code>
              <pre><b>  1</b>  <i>Skills:</i></pre>
              <pre><b>  2</b>  </pre>
              <pre><b>  3</b>  Javascript</pre>
              <pre><b>  4</b>  TypeScript</pre>
              <pre><b>  5</b>  HTML5</pre>
              <pre><b>  6</b>  CSS3, less, SASS</pre>
              <pre><b>  7</b>  </pre>
              <pre><b>  8</b>  Node</pre>
              <pre><b>  9</b>  React</pre>
              <pre><b> 10</b>  Redux</pre>
              <pre><b> 11</b>  React-router</pre>
              <pre><b> 12</b>  Postgresql</pre>
              <pre><b> 13</b>  Sequelize</pre>
              <pre><b> 14</b>  </pre>
              <pre><b> 15</b>  Mongodb</pre>
              <pre><b> 16</b>  </pre>
            </code>
            <code>
              <pre><b> 17</b>  <i>Other:</i></pre>
              <pre><b> 18</b>  </pre>
              <pre><b> 19</b>  Python</pre>
              <pre><b> 20</b>  C++</pre>
              <pre><b> 21</b>  Lua</pre>
              <pre><b> 22</b>  Bash</pre>
              <pre><b> 23</b>  </pre>
              <pre><b> 24</b>  GNU + Linux</pre>
              <pre><b> 25</b>  Ubuntu, debian</pre>
              <pre><b> 26</b>  </pre>
              <pre><b> 27</b>  Firebase</pre>
              <pre><b> 28</b>  Heroku</pre>
              <pre><b> 29</b>  </pre>
              <pre><b> 30</b>  Vector graphics</pre>
              <pre><b> 31</b>  Colour theory</pre>
              <pre><b> 32</b>  Image manipulation</pre>
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}
