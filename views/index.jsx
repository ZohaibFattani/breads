let React = require('react')
let Default = require('./layouts/default')

function Index ({breads})  {
    {
        breads.map((bread, index)=> {
          return (
            <li key={index}>
              <a href={`/breads/${index}`}>
                {bread.name}
              </a>
            </li>
          )
        })
    }
      
}


module.exports = Index