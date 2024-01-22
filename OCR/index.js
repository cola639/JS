const path = require('path')
const imagePath = path.join(__dirname, 'english.png')

const { createWorker } = require('tesseract.js')

;(async () => {
  const worker = await createWorker('eng', 1, {
    logger: m => console.log(m) // Add logger here
  })

  const {
    data: { text }
  } = await worker.recognize(imagePath)
  console.log(text)
  await worker.terminate()
})()
