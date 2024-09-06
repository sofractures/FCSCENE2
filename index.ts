import { Frog, Button } from 'frog'
// Remove the following line as it's not needed for Vercel deployment
// import { serveStatic } from 'hono/serve-static.bun'

// Initialize the Frog app
const app = new Frog({
  basePath: '/api',
  hubApiUrl: 'https://api.hub.wevm.dev',
})

// Add a root route
app.get('/', (c) => {
  return c.text('Farcaster Frame API is running!')
})

// Define your frame
app.frame('/frame', (c) => {
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Hello Farcaster!
      </div>
    ),
    intents: [
      <Button value="click_me">Click me!</Button>
    ]
  })
})

// Handle button clicks
app.frame('/click', (c) => {
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        You clicked the button!
      </div>
    )
  })
})

// Remove the following line as it's not needed for Vercel deployment
// app.use('/static/*', serveStatic({ root: './' }))

export default app