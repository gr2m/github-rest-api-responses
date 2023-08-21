# github-rest-api-responses

> Record responses for all of GitHub’s [v3 REST API](https://developer.github.com/v3/) endpoints

# 🚧 THIS IS WORK IN PROGRESS

See [octokit/fixtures#204](https://github.com/octokit/fixtures/issues/204)

## Usage

### Update [requests.json](requests.json)

```
node index.js
```

Example

```json
[
  {
    "scope": "repos",
    "idName": "create-in-org",
    "request": {
      "route": "POST /orgs/:org/repos",
      "org": "{ORG}",
      "repo": "tmp-{SCOPE}-{ID_NAME}-{TIMESTAMP}"
    },
    "setup": []
  },
  {
    "scope": "repos",
    "idName": "get",
    "request": {
      "route": "GET /repos/:owner/:repo",
      "owner": "{setup.repo.owner.login}",
      "repo": "{setup.repo.name}"
    },
    "setup": [
      { "scope": "repos", "idName": "create-in-org", "as": "repo"}
    ]
  },
  {
    "scope": "issues",
    "idName": "create",
    "request": {
      "route": "POST /repos/:owner/:repo/issues",
      "owner": "{setup.repo.owner.login}",
      "repo": "{setup.repo.name}",
      "title": "Issue 1"
    },
    "setup": [
      { "scope": "repos", "idName": "create-in-org", "as": "repo"}
    ]
  },
  {
    "scope": "issues",
    "idName": "get",
    "request": {
      "route": "GET /repos/:owner/:repo/issues/:number",
      "owner": "{setup.repo.owner.login}",
      "repo": "{setup.repo.name}",
      "number": "setup.issues.number"
    },
    "setup": [
      { "scope": "repos", "idName": "create-in-org", "as": "repo"},
      { "scope": "issues", "idName": "create", "as": "issue"}
    ]
  }
]
```

## How it works

Replacements in requests

- `SCOPE`: the current request’s scope. E.g. when recording the request for `repos.get`, the temporary repository created would be `tmp-repos-get-20190318171023` (20190318171023 being the current timestamp)
- `ID_NAME`: same as `SCOPE`, but the request’s `idName` value
- `TIMESTAMP`: current date time in the format `YYYYMMDDHHMMSS`
- `setup.*`: Access response from setup. E.g. `setup.repo.name` returns the `name` property from the setup response with `as: 'repo'`.

## License

[ISC](LICENSE)