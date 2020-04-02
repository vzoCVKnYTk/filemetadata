import express from 'express'
import cors from 'cors'
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

// require and use "multer"...

const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', (_req, res) => {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, _next) => {
  const { 
    originalname,
    mimetype,
    size
  } = req.file

  const json = { 
    name: originalname,
    type: mimetype,
    size
  }


  res.json(json)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Node.js listening ...')
})
