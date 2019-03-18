# github-rest-api-responses

> Record responses for all of GitHub’s [v3 REST API](https://developer.github.com/v3/) endpoints

# 🚧 THIS IS WORK IN PROGRESS

See [octokit/fixtures#204](https://github.com/octokit/fixtures/issues/204)

## Usage

### Update [requests.json](requests.json)

```
node index.js
```

Example request

```json
{
  "method": "GET",
  "path": "/repos/:owner/:repo",
  "params": [
    "owner",
    "repo"
  ]
}
```

## License

[ISC](LICENSE)