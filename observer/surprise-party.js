const readline = require('readline')

const getResponse = question => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise(resolve => {
    rl.question(question, response => {
      resolve(response)
      rl.close()
    })
  })
}

const girlfriend = () => {
  console.log('G: turnoff lights')
  console.log('G: ask for silence....')
  console.log('G: SURPRISE!!!')
}

const syndic = () => {
  console.log('S: Monitoring...')
}

const concierge = async interesteds => {
  while(true) {
    const response = await getResponse('Does boyfriend arrives? (y/N/q)')
    if(response.toLowerCase() === 'y') {
      (interesteds||[]).forEach(obs => obs())
    }
    
    if(response.toLowerCase() === 'q') {
      break
    } 
  }
}

concierge([girlfriend, syndic])

