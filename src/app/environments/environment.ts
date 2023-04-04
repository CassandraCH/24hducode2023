// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  // urlRequete: "http://vs-nbi-01-dev:8080/eCompetenceBack/",
  urlRequete : "http://185.98.136.60:9090/",
  header : new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODAzNjI3MDQsImlhdCI6MTY4MDM0MTEwNCwianRpIjoiNGZiYjMwNWEtODg5YS00MDAxLWEwNzQtOTkxYmI3NjAxNmEwIiwiaXNzIjoiaHR0cDovLzE4NS45OC4xMzYuNjA6ODA4MC9yZWFsbXMvY29kZWxlbWFucyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiZjM4YjAxNi1jZTNkLTRjMDMtOTdiNC0yNTYxY2MzNDBiNTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcHAtZGVmaS0yNGgiLCJzZXNzaW9uX3N0YXRlIjoiZDBmMzQyMjYtMDQ0ZS00ZWNkLTk2N2UtYzgzNGY4OTE0MjlhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtY29kZWxlbWFucyIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6ImQwZjM0MjI2LTA0NGUtNGVjZC05NjdlLWM4MzRmODkxNDI5YSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJsZXMtaW5mb3RlbGllbiIsInRlYW1faWQiOiIxNiIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IkxlcyBJbmZvdGVsaWVuIn0.m0IfSf4HFP3mjiTTPmO4erGquLqreqRynNvdHZzaL79LNHiW_8sL6XHmQ-I6wYCCY4UR9Rk_FfnJ8R_GKEMde8Ep2n1yHgIkRNNu06dnmUjRaHYnKUzrPLiSvHJ1-4rGP0IyeI1lPLMjkTLaRpj2_q2JlH3MJk3GGKbtrenNi9Lxyer8Z-EmQzQ0SPeEn2-HfWLwDbayRYRh55cf7eSLgEtbdKsZP69kfRoeckHuNYwjdLkkvF7HFjeW8_k4RN5NMKi-YIzRO6YGUaFZ2Op22a0SI7i610GL671w39gZbzyoAczC_paQlVGEwpDTGWJawVSpOtJpfdOtVupYUfE2rA`
  })

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
