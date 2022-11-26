import { NextApiRequest, NextApiResponse } from 'next'

const projects = [
  'milsman2/kane-bros-lab',
  'milsman2/the-precast-toolkit-fs',
  'vfarcic/argo-combined-app',
  'argoproj/argo-events'
]

export default function api(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.id) {
    // a slow endpoint for getting repo data
    fetch(`https://api.github.com/repos/${req.query.id}`)
      .then(resp => resp.json())
      .then(data => {
        setTimeout(() => {
          res.json(data)
        }, 2000)
      })

    return
  }
  setTimeout(() => {
    res.json(projects)
  }, 2000)
}