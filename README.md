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
  "scope": "repos",
  "idName": "get",
  "route": "GET /repos/:owner/:repo",
  "params": [
    "owner",
    "repo"
  ],
  "setup": [
    {
      "route": "POST /user/repos",
      "name": "tmp-{SCOPE}-{ID_NAME}-{TIMESTAMP}"
    }
  ]
}
```

## License

[ISC](LICENSE)