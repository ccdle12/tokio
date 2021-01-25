window.BENCHMARK_DATA = {
  "lastUpdate": 1611533026584,
  "repoUrl": "https://github.com/ccdle12/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35b1a4d0b3a411f52ffc97010b9b002e53bd0d84",
          "message": "chore: prepare Tokio 1.1.0 (#3462)",
          "timestamp": "2021-01-22T23:05:37+01:00",
          "tree_id": "54efedad7616780dc46f50b4a6248de978daa8dc",
          "url": "https://github.com/ccdle12/tokio/commit/35b1a4d0b3a411f52ffc97010b9b002e53bd0d84"
        },
        "date": 1611533008137,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 201601,
            "range": "± 36951",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 723743,
            "range": "± 51442",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5277838,
            "range": "± 505469",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21349133,
            "range": "± 2652960",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35b1a4d0b3a411f52ffc97010b9b002e53bd0d84",
          "message": "chore: prepare Tokio 1.1.0 (#3462)",
          "timestamp": "2021-01-22T23:05:37+01:00",
          "tree_id": "54efedad7616780dc46f50b4a6248de978daa8dc",
          "url": "https://github.com/ccdle12/tokio/commit/35b1a4d0b3a411f52ffc97010b9b002e53bd0d84"
        },
        "date": 1611533025731,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15572,
            "range": "± 3972",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 932,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 549,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15478,
            "range": "± 4946",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 925,
            "range": "± 175",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}