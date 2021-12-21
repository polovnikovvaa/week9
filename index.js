const express = require('express')
const{pool} = require('./pgConfig')
const PORT = process.env.PORT || 8080
const app = express()
app.get('/',(req, res) =>
{
  const sqll = `select * from задания;`
  pool.query(sqll, (err, resp) =>
  {
      if(err) console.log(err)
      else
      {
          res.render('problemset.ejs',{rows: resp.rows})
      }
  })
})

app.listen(PORT, ()=> console.log('Слушаю порт:', PORT))