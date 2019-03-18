const { writeFileSync } = require('fs')
const FILE_PATH = 'requests.json'

const sortBy = require('lodash/sortBy')
const ROUTES = require('@octokit/routes')

const requests = Object.keys(ROUTES).reduce((requests, scope) => {
  ROUTES[scope].forEach(endpoint => {
    const { method, path, params } = endpoint
    const requestParams = params
      .filter(param => param.required && !/[.\[]/.test(param.name))
      .map(param => param.name)

    requests.push({ method, path, params: requestParams })
  })

  return requests
}, [])

const methodOrder = ['GET', 'HEAD', 'POST', 'PATCH', 'PUT', 'DELETE']
const sortedUniqRequests = sortBy(uniqRequests, request => `${request.path}/ ${methodOrder.indexOf(request.method)}`)
console.log(`${requests.length} requests found`)
writeFileSync(FILE_PATH, JSON.stringify(sortedUniqRequests, null, 2))
console.log(`${FILE_PATH} updated.`)
