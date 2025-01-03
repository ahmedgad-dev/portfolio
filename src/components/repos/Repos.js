import React, {useContext, useEffect, useState} from 'react'
import { GithubContext } from '../../context/context'
import Repo from '../repo/Repo'
import './repos.scss'
import {ReactComponent as GithubIcon} from '../../assets/svg/github.svg'
import { Link } from 'react-router-dom'

const Repos = ({githubPage, hommePage}) =>{
     const {data} = useContext(GithubContext)
     const[repos, setRepos] = useState([])
     const[page, setPage] = useState(0)
    

    useEffect(() => {       
      return setRepos(data[page])
    },[page, data])

    const handlePage = (index) => {
      setPage(index)
    }
    
    const nextPage = () => {
    //old page reprsents the old state or prev state we had
     setPage( (oldPage) => {
       let nextPage = oldPage + 1;
       if(nextPage > data.length -1 ){
         nextPage = 0
       }
       return nextPage
     })
    }
    
    const prevPage = () => {
    setPage( (oldPage) => {
      let prevPage = oldPage - 1;
      if(prevPage < 0 ){
          prevPage = data.length -1 
      }
      return prevPage
    })
  }

  return(
    <section className='repos flex flex-col justify-around align-center flex-wrap mt-36' id='repos'>
      <h1 className='repos-head flex flex-row bg-white align-center items-center ml-6 mt-6'>
         GitHub  <GithubIcon className='ml-2 icon-github'/>        
     </h1>
     
      <p className='git-info text-black text-base lg:text-2xl capitalize ml-12 mt-6 p-8 w-2/3 lg:w-1/2'>
        {`here is a list of all my (public) repos coming from 
          my github account using the github API to fetch the repos${githubPage? '(in case you missed them at home page 😉)': ', you can see more in my'}`}
         {hommePage?  <Link to='/github' className='git-link'>Github Page</Link> : ''} 
      </p>
      <div className='repos--list flex justify-around align-center flex-wrap  p-3 sm:p-8'>
        {repos && repos.map((repo => {
          const {id} = repo
          return <Repo repo={repo} key={id} />
        }))}
      </div>

      {repos && (
          <div className='btn-container'>
            <button className='prev-btn hidden sm:block' onClick={prevPage}  >
              prev
            </button>
            {data && data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null }`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn hidden sm:block' onClick={nextPage} >
              next
            </button>
          </div>
        )}
    </section>
  )
}

export default Repos

/* }*/