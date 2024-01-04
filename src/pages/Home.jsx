import ProjectComp from'../components/ProjectComp';
import ArticleComp from '../components/ArticleComp';
import './homeStyles.css'

function Home()
{
  return(
    <div className="hm">
      <h3>Hi, I'm <strong>Aakash Kumar</strong></h3>
      <h1><strong>A full-stack developer</strong></h1>
      <p>Developer, Computer Science Engineer, Learner</p>
      <ul>
        <li>
          <a href="https://x.com/">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#1DA1F2" stroke="none">
              <path d="M23 2a9.36 9.36 0 0 1-2.6.7 4.68 4.68 0 0 0 2.1-2.6 9.32 9.32 0 0 1-3 1.2 4.66 4.66 0 0 0-7.9 4.2c0 .4 0 .8.1 1.2a13.2 13.2 0 0 1-9.6-4.8 4.58 4.58 0 0 0-.6 2.3 4.66 4.66 0 0 0 2.1 3.9 4.62 4.62 0 0 1-2.1-.6v.1a4.66 4.66 0 0 0 3.7 4.6 4.7 4.7 0 0 1-2 .1 4.66 4.66 0 0 0 4.3 3.2 9.36 9.36 0 0 1-5.8 2 9.56 9.56 0 0 1-1.1-.1A13.16 13.16 0 0 0 8 20.2c8 0 12.4-6.6 12.4-12.4 0-.2 0-.4 0-.6a8.91 8.91 0 0 0 2.2-2.3" />
            </svg>

          </a>
        </li>
        <li>
          <a href="https://geeksforgeeks.org">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" width="150" height="48" fill="#4CAF50">
              <text x="0" y="36" font-family="Arial" font-size="32" fill="#4CAF50">GFG</text>
            </svg>

            
</a>
        </li>

        <li>
          <a href="https://leetcode.com">

            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30">
              <text x="42" y="50%" font-size="20" text-anchor="middle" dy=".3em" fill="black">LeetCode</text>
            </svg>



        </a>
        </li>
        
        <li>
          <a href="https://linkedin.com">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" fill="#0077B5">
              <text x="0" y="36" font-family="Arial" font-size="32" fill="#0A66C2">in</text>
            </svg>


            
</a>
        </li>
        <li>
          <a href="https://github.com">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round">
            <g fill="#000000">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.86 8.14 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.51.46-3.04-1.21-3.04-1.21-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.91.06 1.38.92 1.38.92.8 1.37 2.1.97 2.61.74.08-.58.31-.97.56-1.19-1.97-.22-4.04-1-4.04-4.48 0-.99.36-1.8.92-2.43-.09-.22-.4-1.15.09-2.4 0 0 .76-.24 2.48.93.72-.2 1.49-.3 2.26-.30s1.54.10 2.26.30c1.72-1.18 2.48-.93 2.48-.93.49 1.25.18 2.18.09 2.40.57.63.92 1.44.92 2.43 0 3.49-2.08 4.26-4.06 4.48.32.28.61.83.61 1.68 0 1.21-.01 2.18-.01 2.47 0 .27.18.58.69.48C19.14 20.14 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
            </g>
            <path fill="rgb(148, 163, 184)" d="M9 10l2 2 4-4"/>
          </svg>
            
</a>
        </li>
        <li>
          <a href="mailto:aakashkumar2908@gmail.com">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" fill="none"></rect>
              <polyline points="2 9 12 15 22 9" stroke="currentColor" fill="none"></polyline>
              <line x1="2" y1="9" x2="12" y2="15" stroke="currentColor"></line>
              <line x1="12" y1="15" x2="22" y2="9" stroke="currentColor"></line>
            </svg>


          
          </a>
        </li>
      </ul>
      <p>I also create content on my Instagram mainly but not all related to fitness and coding. check out my <a href="">Instagram</a></p>
      <h2>Some of my projects</h2>
      <div>
        <ProjectComp />
        <ProjectComp />
        <ProjectComp />
        <ProjectComp />
      </div>
      <h2>Articles</h2>
      <ArticleComp />
      <br></br>
      <br></br>
      <ArticleComp />
      <br></br>
      <br></br>
      <ArticleComp />
      <p><a href="">Explore More...</a></p>
    </div>
  )
}

export default Home;