window.BENCHMARK_DATA = {
  "lastUpdate": 1623837098261,
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
      },
      {
        "commit": {
          "author": {
            "email": "yotam.ofek@gmail.com",
            "name": "Yotam Ofek",
            "username": "yotamofek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21de476ae7ce97d1ca502b82dad20f2ba3850769",
          "message": "sync: export sync::notify::Notified future publicly (#3840)",
          "timestamp": "2021-06-14T10:05:34+02:00",
          "tree_id": "15a7467e98c3352a242485c6c2b09b084e286320",
          "url": "https://github.com/ccdle12/tokio/commit/21de476ae7ce97d1ca502b82dad20f2ba3850769"
        },
        "date": 1623679744250,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191372,
            "range": "± 46007",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 681896,
            "range": "± 112915",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5291103,
            "range": "± 806372",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21260733,
            "range": "± 5316047",
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
      },
      {
        "commit": {
          "author": {
            "email": "yotam.ofek@gmail.com",
            "name": "Yotam Ofek",
            "username": "yotamofek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21de476ae7ce97d1ca502b82dad20f2ba3850769",
          "message": "sync: export sync::notify::Notified future publicly (#3840)",
          "timestamp": "2021-06-14T10:05:34+02:00",
          "tree_id": "15a7467e98c3352a242485c6c2b09b084e286320",
          "url": "https://github.com/ccdle12/tokio/commit/21de476ae7ce97d1ca502b82dad20f2ba3850769"
        },
        "date": 1623679736030,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18277,
            "range": "± 29029",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 957,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 639,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 19297,
            "range": "± 13525",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1009,
            "range": "± 185",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
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
        "date": 1611533036215,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1005,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17301,
            "range": "± 3971",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1059,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 18591,
            "range": "± 7083",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 572,
            "range": "± 93",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yotam.ofek@gmail.com",
            "name": "Yotam Ofek",
            "username": "yotamofek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21de476ae7ce97d1ca502b82dad20f2ba3850769",
          "message": "sync: export sync::notify::Notified future publicly (#3840)",
          "timestamp": "2021-06-14T10:05:34+02:00",
          "tree_id": "15a7467e98c3352a242485c6c2b09b084e286320",
          "url": "https://github.com/ccdle12/tokio/commit/21de476ae7ce97d1ca502b82dad20f2ba3850769"
        },
        "date": 1623679727516,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 745,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12558,
            "range": "± 5002",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 762,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12192,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 494,
            "range": "± 29",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "34c6a26c016c83fa82ff6a99fb9375cd326b95ed",
          "message": "chore: prepare Tokio v1.7.0 (#3863)",
          "timestamp": "2021-06-15T19:39:33+02:00",
          "tree_id": "e8fc9a0a140b3bf36a18f96b61a10ccc8fd474c3",
          "url": "https://github.com/ccdle12/tokio/commit/34c6a26c016c83fa82ff6a99fb9375cd326b95ed"
        },
        "date": 1623837097656,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 756,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12078,
            "range": "± 4275",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 770,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12431,
            "range": "± 3570",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 495,
            "range": "± 12",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
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
        "date": 1611533062335,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7109412,
            "range": "± 2979052",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7060342,
            "range": "± 2705213",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6587248,
            "range": "± 2925034",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 857,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 847,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 869,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 142014,
            "range": "± 16610",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1845,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1168211,
            "range": "± 322554",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 813727,
            "range": "± 142985",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yotam.ofek@gmail.com",
            "name": "Yotam Ofek",
            "username": "yotamofek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21de476ae7ce97d1ca502b82dad20f2ba3850769",
          "message": "sync: export sync::notify::Notified future publicly (#3840)",
          "timestamp": "2021-06-14T10:05:34+02:00",
          "tree_id": "15a7467e98c3352a242485c6c2b09b084e286320",
          "url": "https://github.com/ccdle12/tokio/commit/21de476ae7ce97d1ca502b82dad20f2ba3850769"
        },
        "date": 1623679758723,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7442077,
            "range": "± 2900199",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7433131,
            "range": "± 1956611",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 7516725,
            "range": "± 3343152",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 320,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 311,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 300,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 62797,
            "range": "± 7345",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1005,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1143554,
            "range": "± 157680",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 815956,
            "range": "± 72670",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}